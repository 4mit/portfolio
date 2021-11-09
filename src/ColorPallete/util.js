export const attachTooltip = (parent) => {
  let tooltip = document.createElement("div");
  tooltip.innerHTML = "Copied..";
  tooltip.style.position = "absolute";
  tooltip.style.top = '50%';
  tooltip.style.left = '50%';
  tooltip.style.transform = 'translate(-50%,-50%)';
  tooltip.style.padding = "7px 18px";
  tooltip.style.backgroundColor = "white";
  tooltip.style.fontSize = "1rem";
  parent.appendChild(tooltip);

  setTimeout(() => {
    tooltip.remove();
  }, 500);
};

export const copyColor = (e) => {
  // if user clicks on the parent itself
  // instead of boxes
  // e.target cant contains itself
  if (e.currentTarget != e.target) {
    console.log(e, e.target.closest(".clr-box"));
    let parent = e.target.closest(".clr-box");

    let color = parent.getAttribute("data-color");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
    }
    if (parent.classList.contains("flash")) {
      parent.classList.remove("flash");
    } else {
      parent.classList.add("flash");
    }

    attachTooltip(parent);
  }
};
