import React from 'react';
import './style.css';

const colors = [
  {
    "color": "rgb(244, 67, 54)",
    "text": "RED"
  },
  {
    "color": "rgb(233, 30, 99)",
    "text": "PINK"
  },
  {
    "color": "rgb(103, 58, 183)",
    "text": "DEEP PURPLE"
  },
  {
    "color": "rgb(63, 81, 181)",
    "text": "INDIGO"
  },
  {
    "color": "rgb(33, 150, 243)",
    "text": "BLUE"
  },
  {
    "color": "rgb(3, 169, 244)",
    "text": "LIGHT BLUE"
  },
  {
    "color": "rgb(0, 188, 212)",
    "text": "CYAN"
  },
  {
    "color": "rgb(0, 150, 136)",
    "text": "TEAL"
  },
  {
    "color": "rgb(76, 175, 80)",
    "text": "GREEN"
  },
  {
    "color": "rgb(139, 195, 74)",
    "text": "LIGHT GREEN"
  },
  {
    "color": "rgb(205, 220, 57)",
    "text": "LIME"
  },
  {
    "color": "rgb(255, 235, 59)",
    "text": "YELLOW"
  },
  {
    "color": "rgb(255, 193, 7)",
    "text": "AMBER"
  },
  {
    "color": "rgb(255, 152, 0)",
    "text": "ORANGE"
  },
  {
    "color": "rgb(255, 87, 34)",
    "text": "DEEP ORANGE"
  },
  {
    "color": "rgb(121, 85, 72)",
    "text": "BROWN"
  },
  {
    "color": "rgb(158, 158, 158)",
    "text": "GREY"
  },
  {
    "color": "rgb(96, 125, 139)",
    "text": "BLUE GREY"
  }
]
const ColorPallete = () => {

  const attachTooltip = (parent) => {

    let tooltip = document.createElement('div');
    tooltip.innerHTML = 'Copied..';
    tooltip.style.position = 'absolute';
    tooltip.style.top = 0;
    tooltip.style.right =0;
    tooltip.style.padding= '0px 10px';
    tooltip.style.backgroundColor='white'
    tooltip.style.fontSize= '1rem';
    parent.appendChild(tooltip);

    setTimeout(() => {
      tooltip.remove();
    },500)
  }

  const copyColor = (e) =>{

    // if user clicks on the parent itself
    // instead of boxes
    // e.target cant contains itself
    if(e.currentTarget != e.target){

      console.log(e, e.target.closest('.clr-box'))
      let parent = e.target.closest('.clr-box');
  
      let color = parent.getAttribute('data-color')

      if(navigator.clipboard){
        navigator.clipboard.writeText(color);
      }
      if(parent.classList.contains('flash')){
        parent.classList.remove('flash')
      }else{
        parent.classList.add('flash')
      }

      attachTooltip(parent);
    }
  }
  return (
    <div className="clr-container" onClick={copyColor}>
      {
        colors.map(c => {
          let h = Math.max(200, Math.floor(Math.random()*200+100));
          return (
            <div 
              className={`clr-box`}
              data-color={c.color}
              style={{ 
                backgroundColor: c.color ,
                height: h,
                gridRowEnd: `span ${Math.ceil(h/10)+1}`,
                zIndex: `${Math.floor(Math.random()*10)}`
              }}>
              <h6 className="clr-header">
                {c.text}
              </h6>
              <div className="clr-box__footer-content">
                <ul>
                  <li>{c.color}</li>
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default ColorPallete;