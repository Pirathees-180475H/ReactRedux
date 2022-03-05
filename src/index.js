import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux Imports
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";

//Reducers
import hospitalReducers from "./Features/HospitalsReducers";
import AuthDonorReducers from './Features/AuthDonorDetailsReducers';

const store=configureStore({   // System All State Handler
  reducer:{              
    hospitals:hospitalReducers,
    donorDetails:AuthDonorReducers
  }                    
})

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
 ,
  document.getElementById('root')
);


reportWebVitals();
