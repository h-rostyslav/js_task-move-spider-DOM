'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  const wallRect = wall.getBoundingClientRect();

  let clickX = e.clientX - wallRect.left;
  let clickY = e.clientY - wallRect.top;

  let spiderX = clickX - spiderWidth / 2;
  let spiderY = clickY - spiderHeight / 2;
  

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX > wallWidth - spiderWidth) {
    spiderX = wallWidth - spiderWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  } 
  
  if (spiderY > wallHeight - spiderHeight) {
    spiderY = wallHeight - spiderHeight;
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
