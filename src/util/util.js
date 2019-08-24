const zeroPad = function (num, places) {
  const zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join('0') + num;
};

const dummy = 'DUMMY TO CALM LINTER';

export {
  zeroPad,
  dummy,
};
