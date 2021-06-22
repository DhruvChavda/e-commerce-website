import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import {
    addCollectionAndDocuments,
    auth,
    createUserProfileDocument,
} from "./firebase/firebase.utils";
import Checkout from "./pages/checkout/checkout";
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import { selectCollectionsForPreview } from "./redux/shop/shop-selectors";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selectors";

const Error404 = (props) => {
    console.log(props);
    return (
        <div>
            <h1>404 Not found</h1>
        </div>
    );
};

class App extends Component {
    // NO NEED FOR CONSTRUCTOR
    // constructor() {
    //     super();

    //     this.state = {
    //         currentUser: null,
    //     };
    // }

    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser, collectionsArray } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({ id: snapShot.id, ...snapShot.data() });
                    //put this console inside setState to view user details,() => console.log("if-block", this.state)
                });
            } else {
                setCurrentUser(userAuth);
                //put this console inside setState to view user details, () => console.log("else-block", this.state)
            }

            addCollectionAndDocuments(
                "collections",
                collectionsArray.map(({ title, items }) => ({ title, items }))
            );
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={Shop} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route
                        exact
                        path='/signin'
                        render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInUp />)}
                    />
                    <Route exact component={Error404} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("user wala prop"); //uncomment to check reselect
    return {
        currentUser: selectCurrentUser(state),
        collectionsArray: selectCollectionsForPreview(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
