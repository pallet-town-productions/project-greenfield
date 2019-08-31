// const ZOOMRATIO = 2.5;

export default function (e, imageUrl) {
  e.preventDefault();

  // probably a lot faster to just set this as a state on style change
  const i = new Image();
  i.src = imageUrl;
  // const imgWidth = i.width * ZOOMRATIO;
  // const imgHeight = i.height * ZOOMRATIO;

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const cursorX = e.clientX;
  const cursorY = e.clientY;

  // // this is key but each have to be really good
  // let imgX = (screenWidth-imgWidth) * cursorX / (screenWidth);
  // // this is key but each have to be really good
  // let imgY = (screenWidth-imgWidth) * cursorY / (screenHeight);

  const imgPctX = (100 * cursorX) / screenWidth;
  const imgPctY = (100 * cursorY) / screenHeight;

  const zoom = document.getElementById('zoom-photo');
  zoom.style.backgroundImage = `url("${imageUrl}")`;
  // zoom.style.backgroundSize = `${imgWidth-cursorX}px ${imgWidth-cursorY}px`;
  zoom.style.backgroundPosition = `${imgPctX}% ${imgPctY}%`;

  // console.log(`CursorXY: ${cursorX}, ${cursorY}`,
  //   `WidthHeight: ${imgWidth}, ${imgHeight}`,
  //   `ScreenXY: ${screenWidth}, ${screenHeight}`);
}
