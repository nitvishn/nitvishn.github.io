import React, { Component } from "react";
import Header from "./HeaderComponent";

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    Hi man
                </div>
            </>
        );
    }
}

export default Main;