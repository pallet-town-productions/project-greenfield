// imgId is expandedmainphoto
const ZOOMRATIO = 2.5;

export default function (e, imageUrl) {
  e.preventDefault();

  // probably a lot faster to just set this as a state on style change
  let i = new Image();
  i.src = imageUrl;
  let imgWidth = i.width * ZOOMRATIO;
  let imgHeight = i.height * ZOOMRATIO;

  let screenWidth = 1600; // this will be dynamic based on screen
  let screenHeight = 975; // this will be dynamic based on screen
  
  let cursorX = e.clientX;
  let cursorY = e.clientY;

  // // this is key but each have to be really good
  // let imgX = (screenWidth-imgWidth) * cursorX / (screenWidth); 
  // // this is key but each have to be really good
  // let imgY = (screenWidth-imgWidth) * cursorY / (screenHeight); 

  let imgPctX = 100 * cursorX / screenWidth;
  let imgPctY = 100 * cursorY / screenHeight;
  
  let zoom = document.getElementById("zoomphoto");
  zoom.style.backgroundImage = `url("${imageUrl}")`;
  zoom.style.backgroundPosition = `${imgPctX}% ${imgPctY}%`;

  console.log(`CursorXY: ${cursorX}, ${cursorY}`, 
  `WidthHeight: ${imgWidth}, ${imgHeight}`,
  `ScreenXY: ${screenWidth}, ${screenHeight}`);

};

// export default function(imgId, resultId) {
//   var img = document.getElementById(imgId);
//   var zoom = document.getElementById(resultId);

//   var lens = document.createElement('DIV');
//   lens.setAttribute('class', 'img-zoom-lens');
  
//   function moveLens(e) {
//     var pos, cursorX, cursorY;
//     /* Prevent any other actions that may occur when moving over the image */
//     e.preventDefault();
//     /* Get the cursor's cursorX and cursorY positions: */
//     pos = getCursorPos(e);
//     /* Calculate the position of the lens: */
//     cursorX = pos.cursorX - (lens.offsetWidth / 2);
//     cursorY = pos.cursorY - (lens.offsetHeight / 2);
//     /* Prevent the lens from being positioned outside the image: */
//     if (cursorX > width - lens.offsetWidth) {cursorX = width - lens.offsetWidth;}
//     if (cursorX < 0) {cursorX = 0;}
//     if (cursorY > height - lens.offsetHeight) {cursorY = height - lens.offsetHeight;}
//     if (cursorY < 0) {cursorY = 0;}
//     /* Set the position of the lens: */
//     lens.style.left = cursorX + "px";
//     lens.style.top = cursorY + "px";
//     /* Display what the lens "sees": */
//     zoom.style.backgroundPosition = "-" + (cursorX * cx) + "px -" + (cursorY * cy) + "px";
//   }
//   function getCursorPos(e) {
//     var a, cursorX = 0, cursorY = 0;
//     e = e || window.event;
//     /* Get the cursorX and cursorY positions of the image: */
//     a = getBoundingClientRect();
//     /* Calculate the cursor's cursorX and cursorY coordinates, relative to the image: */
//     cursorX = e.pageX - a.left;
//     cursorY = e.pageY - a.top;
//     /* Consider any page scrolling: */
//     cursorX = cursorX - window.pageXOffset;
//     cursorY = cursorY - window.pageYOffset;
//     return {cursorX : cursorX, cursorY : cursorY};
//   }
// }