import React from "react";
import { Row, Col, Button, Typography, Layout } from "antd";
import "antd/dist/antd.css";
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const colors = [
  {
    color: "rgb(244, 67, 54)",
    text: "Stock Average Calculator",
  },
  {
    color: "rgb(233, 30, 99)",
    text: "PINK",
  },
  {
    color: "rgb(103, 58, 183)",
    text: "DEEP PURPLE",
  },
];
const SAC = () => {
  return (
    <>
      <div className="clr-container">
        {colors.map((c) => {
          let h = Math.max(200, Math.floor(Math.random() * 200 + 100));
          return (
            <div
              className={`clr-box`}
              data-color={c.color}
              style={{
                backgroundColor: c.color,
                height: h,
                gridRowEnd: `span ${Math.ceil(h / 10) + 1}`,
                zIndex: `${Math.floor(Math.random() * 10)}`,
              }}
            >
              <h6 className="clr-header">{c.text}</h6>
              <div className="clr-box__footer-content">
                <ul>
                  <li>{c.color}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SAC;
