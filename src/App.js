import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import Shop from "./pages/shop/shop";
import SignInUp from "./pages/sign-in-up/sign-in-up";

const Error404 = (props) => {
    console.log(props);
    return (
        <div>
            <h1>404 Not found</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={Shop} />
                <Route exact path='/signin' component={SignInUp} />
                <Route exact component={Error404} />
            </Switch>
        </div>
    );
}

export default App;
