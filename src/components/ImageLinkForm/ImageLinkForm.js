import React from "react";
import "./ImageLinkForm.css";

// props获取父组件对应的子组件的属性
// props = { onInputChange: ()=>{}, onButtonSubmit: ()=>{} }
// const ImageLinkForm = (props) => {
// 通过destructuring来直接获取props对象里面的方法
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p>
        {`This Magic Brain will detect faces in your pictures, Give it a link`}
      </p>
      <div className="center">
        <div className="pa4 br3 shadow-5 center form">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            // onChange={console.log(props)}
            // 设置行内sctipt，当input改变时，触发函数
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white"
            style={{ backgroundColor: "#f99f81", border: "1px solid orange" }}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
