'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  let spiderX = e.clientX - wallRect.left - spiderWidth / 2;
  let spiderY = e.clientY - wallRect.top - spiderHeight / 2;

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX > wallWidth - spiderWidth) {
    spiderX = wallWidth - spiderWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  } else if (spiderY > wallHeight - spiderHeight) {
    spiderY = wallHeight - spiderHeight;
  }

  spider.style.left = spiderX + 'px';
  spider.style.top = spiderY + 'px';
});
