import React, { useState, useRef } from "react";
import { Radio, Input, message } from "antd";
import styled from "styled-components";

const initialArrowPos = "top";

const arrowPositionMap = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
};
const Arrow = styled.div`
  position: relative;
  border: ${(props) => `${props.borderWidth}px solid`} black;
  &::after,
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent;
    ${(props) => arrowPositionMap[props.arrowPos]}:100%;
  }
  &::after {
    border-width: ${(props) => `${props.arrowWidth + props.borderWidth}px`};
    ${(props) => `border-${arrowPositionMap[props.arrowPos]}-color`}: black;
  }
  &::before {
    z-index: 1;
    border-width: ${(props) => `${props.arrowWidth}px`};
    ${(props) => `border-${arrowPositionMap[props.arrowPos]}-color`}: #e67e22;
  }
`;
function CssArrow() {
  const [arrowPos, setArrowPos] = useState(initialArrowPos);
  const [borderWidth, setBorderWidth] = useState(4);
  const [arrowWidth, setArrowWidth] = useState(20);

  const copyRef = useRef(null);
  const code = `
  .arrow_box {
    position: relative;
    width:300px;
    height:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e67e22;
    border: ${borderWidth}px solid black;
  }

  .arrow_box:after, 
  .arrow_box:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: transparent;
    ${arrowPositionMap[arrowPos]}:100%;
  }

  .arrow_box:after {
    border-width: ${arrowWidth + borderWidth}px;
    border-${arrowPositionMap[arrowPos]}-color: black;
  }
  
  .arrow_box:before {
    z-index: 1;
    border-width: ${arrowWidth}px;
    border-${arrowPositionMap[arrowPos]}-color: #e67e22;
  }
  `;

  const handleCopy = () => {
    copyRef.current.value = code;
    copyRef.current.select();
    if (document.execCommand("copy")) {
      message.success({ content: "复制成功!", duration: 0.4 });
    } else {
      message.error({ content: "复制失败!", duration: 0.4 });
    }
  };
  return (
    <section className="css-arrow">
      <textarea readOnly className="copy-text" ref={copyRef}></textarea>
      <header className="header-box">
        <h1 className="header__title">css arrow generator</h1>
      </header>
      <main className="main-box">
        <div className="main-box__left">
          <Arrow
            arrowPos={arrowPos}
            arrowWidth={arrowWidth}
            borderWidth={borderWidth}
            className="arrow-box"
          >
            css arrow awsome
          </Arrow>
          <div className="arrow-config">
            <div className="arrow-config__position">
              <Radio.Group
                onChange={(e) => setArrowPos(e.target.value)}
                value={arrowPos}
              >
                <Radio value="top">top</Radio>
                <Radio value="right">right</Radio>
                <Radio value="bottom">bottom</Radio>
                <Radio value="left">left</Radio>
              </Radio.Group>
            </div>
            <div className="arrow-config__size">
              <div className="border-width-box">
                <span>border width</span>
                <Input
                  type="number"
                  value={borderWidth}
                  onChange={(e) => setBorderWidth(+e.target.value)}
                ></Input>
              </div>
              <div className="arrow-width-box">
                <span>arrow width</span>
                <Input
                  type="number"
                  value={arrowWidth}
                  onChange={(e) => setArrowWidth(+e.target.value)}
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="main-box__right">
          <pre className="code-box">
            <div className="button--default btn" onClick={handleCopy}>
              copy
            </div>
            <code dangerouslySetInnerHTML={{ __html: code }}></code>
          </pre>
        </div>
      </main>
    </section>
  );
}
export default CssArrow;
/**
 *     

              


                
 */
