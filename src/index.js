import React from 'react';
import ReactDom from 'react-dom';
import App from './App'; //拡張子(js)はつけなくてもよい

//画面に描画
//　第一引数：描画するJSXの関数名
//　第二引数：描画する場所（要素）
ReactDom.render(<App />, document.getElementById('root'));
