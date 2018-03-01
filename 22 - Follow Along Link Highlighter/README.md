# Javascript30 - DAY 22 - Follow Along Link Highlighter
[DEMO](https://nono1526.github.io/javascript30/22%20-%20Follow%20Along%20Link%20Highlighter/index-START.html)
## 目標
這邊作者原本是介紹一個 dropdown 在 hover 時,  
會用同一個區塊去跑動他,  
這邊用簡單的 link 來做範例.  
原理是差不多的！  
## 步驟
1. 先抓到所有要讓做滑動區塊的連結,  
並且用一塊 span 放在 body 裡面,  
以便之後作為動畫區塊使用
```javascript= 
const   trigglers = document.querySelectorAll('a'); 
const   highlight = document.createElement('span');
highlight.classList.add('highlight'); 
document.body.appendChild(highlight);
```
2. 把所有要做變化的 link 加上 mouseenter 事件（類似 css hover）
`trigglers.forEach((triggler)=>   triggler.addEventListener('mouseenter',highlightLink));
`
3. 建構一個 function 來執行主要的動作,  
因為考量到頁面的滑動,  
所以 top, left 的位移要加上 window.scrollY & window.scrollX
```javascript=
function   highlightLink(e){

 let   linkCoords = this.getBoundingClientRect(); //取得滑鼠滑過的 'a' 的大小相關

 console.log(linkCoords);

 const   coords = {

 width:   linkCoords.width,

 height:   linkCoords.height,

 left:   linkCoords.left + window.scrollX,

 top:   linkCoords.top + window.scrollY

}

 highlight.style.width = `${coords.width}px`;

 highlight.style.height = `${coords.height}px`;

 highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;

}

```
## 紀錄
### `el.getBoundingClientRect`
抓取 html 標籤元素的大小以及位置資訊
