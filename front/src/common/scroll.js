export const getScrollWidth = () => {
  const outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';

  document.body.appendChild(outer);
  const scrollWidth = outer.offsetWidth - outer.clientWidth;
  document.body.removeChild(outer);

  return scrollWidth;
};

export const disableDocumentScroll = () => {
  const body  = document.body;
  body.style.overflow = 'hidden';
  
  if(body.scrollHeight > window.innerHeight) {
    const scrollWidth = getScrollWidth();
    body.style.paddingRight = scrollWidth + 'px';
  }
};

export const enableDocumentScroll = () => {
  const body = document.body;
  body.style.overflow = null;
  body.style.paddingRight = null;
};
