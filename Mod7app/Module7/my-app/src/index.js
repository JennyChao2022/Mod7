import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './component/Greeting';
import Clock from './component/Clock';
import Emoji from './component/emoji';
import { HandleEmojiProvider } from './context/toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting name={"Henry"}/>
    <Clock/>
   <HandleEmojiProvider >
    <Emoji/>
    <Emoji/>
    </HandleEmojiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
