# Javascript30 - Day28 - Video Speed Controller
[[DEMO](https://nono1526.github.io/javascript30/28%20-%20Video%20Speed%20Controller/index-nono.html) - [[GitHub](https://github.com/nono1526/javascript30/tree/master/28%20-%20Video%20Speed%20Controller)]
## 目標
做一個可以控制影片速度的控制條
## 步驟
1. 取得要控制的元素, 設置事件
```javascript=
const   video = document.querySelector('.flex');
const   speed = document.querySelector('.speed');
const   bar = document.querySelector('.speed-bar');
function handleBar(){}
speed.addEventListener('mousemove',handleBar);
```
2. 算出位移量且做動態改變各個 tag 狀態（如註解）
```javascript=
function   handleBar(e){
 //算出位移量
 const   y = e.pageY - this.offsetTop;
 //算出位移的比例
 const   percent = y / this.offsetHeight;
 //最小和最大
 const   min = 0.4;
 const   max = 4;
 //要顯示的高度
 const   height = Math.round(percent * 100) + '%';
 //播放速度 (介於最小與最大範圍之間)
 const   playbackRate = percent * (max - min) + min;
 bar.style.height = height;
 //要顯示的播放速度
 bar.textContent = playbackRate.toFixed(2) + 'x';
 video.playbackRate = playbackRate;
}
```