import React, { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInUp from "./pages/sign-in-up/sign-in-up";

const Error404 = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>404 Not found</h1>
        </div>
    );
};

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapShot) => {
                    this.setState(
                        {
                            currentUser: { id: snapShot.id, ...snapShot.data() },
                        },
                        () => console.log("if-block", this.state)
                    );
                    //put this console inside setState to view user details,() => console.log("if-block", this.state)
                });
            } else {
                this.setState({ currentUser: userAuth }, () =>
                    console.log("else-block", this.state)
                );
                //put this console inside setState to view user details, () => console.log("else-block", this.state)
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/shop' component={Shop} />
                    <Route exact path='/signin' component={SignInUp} />
                    <Route exact component={Error404} />
                </Switch>
            </div>
        );
    }
}
