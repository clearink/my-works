import React, { useRef } from "react";
import { message } from "antd";
import colorList from "assets/config/colorList.json";
import { hex2rgb } from "utils";
function HtmlSupportColor() {
  const selectRef = useRef(null);
  function handelCopy(text) {
    selectRef.current.value = text;
    selectRef.current.select();
    const success = document.execCommand("copy");
    if (success) message.success({ content: "复制成功", duration: 0.5 });
    else message.error({ content: "复制失败!", duration: 0.5 });
  }
  return (
    <div  className="html-supprot-color">
      <textarea readOnly ref={selectRef} className="select-box"></textarea>
      <header className="header">HTML SUPPORT COLORS</header>
      <section>
        <ul className="color-list">
          <li className="color-list__header">
            <div className="color-list__header--color">color</div>
            <div className="color-list__header--name">name</div>
            <div className="color-list__header--hex">hex</div>
            <div className="color-list__header--rgb">rgb</div>
          </li>
          {colorList.map((item, index) => (
            <li className="color-list__item" key={item.name}>
              <div className="color-list__item--color">
                <p
                  className="list-item__context"
                  style={{ backgroundColor: item.color }}
                ></p>
              </div>
              <div className="color-list__item--name">
                <span onClick={() => handelCopy(item.name)}>{item.name}</span>
              </div>
              <div className="color-list__item--hex">
                <span onClick={() => handelCopy(item.color)}>{item.color}</span>
              </div>
              <div className="color-list__item--rgb">
                <span onClick={() => handelCopy(hex2rgb(item.color))}>
                  {hex2rgb(item.color)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
export default HtmlSupportColor;
