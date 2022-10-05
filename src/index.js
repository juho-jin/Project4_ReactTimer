import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//내가 만든 컴포넌트들은 무조건 대문자로 시작
const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = () =>{
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//1초에 한번씩 다시 랜더링 할 수 있도록 콜하는 함수
setInterval(() => tick(),1000);