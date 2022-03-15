import React from "react";
import "./App.css";
import Category from "./components/Category/Category"

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Category />
                </div>
            </div>
        );
    }
}

export default App;
