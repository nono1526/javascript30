# Javascript30 - Day 27 - Click and Drag
[[DEMO](https://nono1526.github.io/javascript30/27%20-%20Click%20and%20Drag/index-START.html)] - [[GitHub](https://github.com/nono1526/javascript30/tree/master/27%20-%20Click%20and%20Drag)]
## 目標
做一個滑動的區塊
## 步驟
1. 先抓主要使用的區塊 `.items`
`const   slide = document.querySelector('.items');
`
2. 建立要使用的變數
```javascript=
let isDown = false; // 判斷是否點擊的 flag
let   startX,scrollLeft; 
// startX(使用者點擊起始位置)
//scrollLeft(使用者點擊後起始的捲軸位置)
```
3. 將 slide 加入滑鼠傾聽者去控制滑動  
* mousedown 來確定滑鼠點擊以及起始位置
* mouseup, mouseleave 使用者無點擊或離開 slide 區塊後,  
就不繼續滑動
* mousemove 主要控制滑動的事件  

```javascript=
slide.addEventListener('mousedown', (e) => {

     isDown = true; //點下滑鼠

     //算出起始位置

     startX = e.pageX - slide.offsetLeft;

     //起始的 scroll 位移量

     scrollLeft = slide.scrollLeft;

     slide.classList.add('active');

});

 slide.addEventListener('mouseleave',() => {

     isDown = false;

     slide.classList.remove('active');

  

});

 slide.addEventListener('mouseup', () => {

     isDown = false;

     slide.classList.remove('active');

});

 slide.addEventListener('mousemove',(e) => {

     if(!isDown)return;

     //停止原本 HTML 會有的事件

     //這邊是怕滑動時會選到字

     e.preventDefault();

     //動態位置

     const   x = e.pageX - slide.offsetLeft;

     //總位移量 動態位置 - 原始位置

     const   walk = (x - startX) * 3;

     //最後把位移量 加上去 （因為是滑動位移是相反所以用減的）

     slide.scrollLeft = scrollLeft- walk;

});

```

## 紀錄
### element.scrollLeft
捲軸滑動的位移量
### e.pageX, e.pageY
數標在頁面中的位置座標
## CSS
### will-change: transform
`will-change` 這個屬性是用來優化一些會改變的 css 數值
### perspective
這個是讓元件變得更 3d 的屬性
> 參考 [w3c](http://www.w3school.com.cn/cssref/pr_perspective.asp)
```css=
.item:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }

.item:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }
```
這邊我覺得最後厲害的是配合 scaleX rotateY,  
因為變成 3d 物件所以旋轉角度會和 2d 的不一樣！