export const sizeScss = pixels => {
  const vw = window.innerWidth * 0.01;
  const style = getComputedStyle(document.body);
  const screenSize = style.getPropertyValue('--screen-size');

  return (pixels / screenSize) * 100 * vw;
};

export const reverseSizeScss = pixels => {
  const vw = window.innerWidth * 0.01;
  const style = getComputedStyle(document.body);
  const screenSize = style.getPropertyValue('--screen-size');

  return (pixels / (100 * vw)) * screenSize;
};
