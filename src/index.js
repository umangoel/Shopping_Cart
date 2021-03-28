import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from "firebase";
import "firebase/firestore";


  // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBuIhubzHfuRimzNzyWvufUxo3pwTOATQ8",
//   authDomain: "cart-e7b79.firebaseapp.com",
//   projectId: "cart-e7b79",
//   storageBucket: "cart-e7b79.appspot.com",
//   messagingSenderId: "551327842601",
//   appId: "1:551327842601:web:f36a7eb7f6c565e848f738"
// };
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
