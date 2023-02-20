import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./components/Counter";
import App from "./App";


//STORE -> GLOBALIZED STORE


//ACTION INCREMENT

const increment=()=>{
  return{
    type:'INCREMENT'
  }
}

const decrement=()=>{
  return{
    type:'DECREMENT'
  }
}

// REDUCER


// DISPATCH






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  
    <App/>
  </Provider>
);


