import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import stores from "./components/store";
import Word from "./components/Word";

function App()
{
    return(
        <>
        <Provider store={stores}>
            <Word/>
        </Provider>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<App/>)