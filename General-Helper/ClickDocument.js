export const ClickDocument = () => {
  const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: false,
    cancelable: true,
  });

  document.dispatchEvent(clickEvent);
};
