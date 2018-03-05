# Javascript30 - Day 26 - Stripe Follow Along Nav
[[DEMO](https://nono1526.github.io/javascript30/26%20-%20Stripe%20Follow%20Along%20Nav/index-nono.html)] - [[GitHub](https://github.com/nono1526/javascript30/tree/master/26%20-%20Stripe%20Follow%20Along%20Nav)]
## 目標
延續之前做過得一個小作品,  
還記得 Day 22 的動態 highlight 顯示嗎？
這次要做一個 dropdown 的特效
## 步驟
1. 需要用的 element 先抓到存起來,  
設定目標的 `mouseenter` `mouseleave` 事件
2. 設定 enter, leave 兩個 function
```javascript=
function   handleEnter(){

 console.log('enter!');

 this.classList.add('trigger-enter'); //先設定 display: block;

 //這邊設定延遲加上透明度, 因為 display:block 和 opacity 同時設定會沒有效果

 //這邊加上 classList.contains 判斷有無加上 .trigger-enter 才設定加入 .trigger-enter-active 才不會有重複設定

 //.trigger-enter-active 的問題

 setTimeout(()=>   this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); //延遲 透明度設置

 //顯示區塊

 background.classList.add('open');

 //抓取 target 之下的 dropdown 座標

 const   dropdown = this.querySelector('.dropdown');

 const   dropdownCoords = dropdown.getBoundingClientRect(); //抓到 dropdown 大小座標資訊

 //為了修正定位所以抓 nav 的 位置大小資訊

 const   navCoords = nav.getBoundingClientRect();

 const   coords = {

 width:   dropdownCoords.width,

 height:   dropdownCoords.height,

 //扣掉 nav 座標修正　dropdown coords

 left:   dropdownCoords.left - navCoords.left,

 top:   dropdownCoords.top - navCoords.top

}

 //將 background 的 一些 css 屬性 變更

 background.style.width = coords.width + 'px';

 background.style.height = coords.height + 'px';

 background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`)
}

function   handleLeave(){

 console.log('leave!');

 this.classList.remove('trigger-enter','trigger-enter-active');

 background.classList.remove('open');

}

```
這次主要移動的區塊是 .dropdownBackground,  
透過抓取原本 .dropdown 的大小和位置資訊來變更 .dropdownBackground 的大小和位置資訊,  
來達到這次要做的效果