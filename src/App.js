import React from 'react';
import Characters from "./pages/body/Characters";
import SoloChar from "./components/SoloChars/SoloChar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



function App(props) {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact {...props} component={Characters}/>
                    <Route path="/:id" {...props} component={SoloChar}/>
                </Switch>

            </div>
        </Router>

    );
}


export default App;


