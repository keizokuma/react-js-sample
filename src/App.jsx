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
/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMEssage";

const App = () => {
  console.log("最初");
  //コンポーネント内で動的に変わる部分はuseStateで定義しておくと良い
  const [num, setNum] = useState(0); //useStateが配列なので分割代入。変数は初期値
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaceShowFlg = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //第二引数に空の配列を渡すと、初回のみレンダリングされる.
  // 変数を渡すと変数を監視し、変化したときだけ動く（.
  // ESLintでは関数内で使用しているfaceShowFlagが使用されていない警告エラーが出るが
  // 今回はnumにのみ関心を置きたいためこのままでOK（ESLintの設定でOFFにできる or ファイルの先頭にコメントを入れる）
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaceShowFlg}>顔文字のon/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^)o(^ )</p>}
    </>
  );
};

//export ：このファイルの関数を他のファイルでも利用できるよ
export default App;
