import React from 'react';
import Home from '../Home/Home';
import "./App.css";
import {Switch, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

export default App;