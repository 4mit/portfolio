import React from "react";

import { copyColor } from "./util";
const ColorPallate = ({ colors }) => {
  return (
    <div className="clr-container" onClick={copyColor}>
      {colors.map((c) => {
        let h = 200;
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
  );
};

export default ColorPallate;
