import { Route, Switch } from "react-router";
import "./App.css";
import Homepage from "./pages/homepage/homepage";

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
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact component={Error404} />
            </Switch>
        </div>
    );
}

export default App;
