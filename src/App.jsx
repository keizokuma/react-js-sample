/**
 * jsxを使用している場合は、拡張子をjsxにすると分かりやすくなる
 *
 * 補足
 * Reactのコンポーネント名は必ず先頭を大文字から初める！
 * [正しい例]
 *  App
 * [エラーとなる例]
 *  app
 * [エラーにはならないが推奨されない例]
 *   Some_component
 *
 */
import React from 'react';
import ColorfulMessage from './components/ColorfulMEssage';

const App = () => {
  const onClickButton = () => {
    alert('test');
  };
  const contenLadyStyle = {
    color: 'pink',
    fontSize: '18px'
  };
  return (
    <>
      <h1 style={{ color: 'red' }}>こんにちは！!</h1>
      <ColorfulMessage />
      <p style={contenLadyStyle}>元気です!</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

//export ：このファイルの関数を他のファイルでも利用できるよ
export default App;
