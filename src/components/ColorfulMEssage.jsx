import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contenStyle = {
    color, //color: colorという設定と同じ
    fontSize: "18px"
  };
  //propsのchildrenはReactで定義されているプロパティ
  //このコンポーネントで囲まれている文字情報を取れる
  return <p style={contenStyle}>{children}</p>;
};
