# Javascript30 - Day 24 - Sticky Nav
[DEMO](https://nono1526.github.io/javascript30/24%20-%20Sticky%20Nav/index-nono.html)
## 目標
製作一個 Nav 滑動到內文後會固定在上方,  
還有一些頁面特效！
## 步驟
1. 抓取 Nav tag ,  
抓取 Nav 和網頁最上方的距離
2. 加上視窗滑動事件,  
判斷是否滑動超過 nav 的最上方座標,  
是則在 body 加上一個 class 來讓 nav 有固定的效果
```javascript=
if(window.scrollY >= topOfNav){
 //把 class 加入在 body 可用一個 class 控制更多不同的部份
 document.body.classList.add('fixed-nav');
 //因為 nav 變成 fixed 所以會突然少掉 nav 的高度
 //加上 nav 的 height 來修正
 document.body.style.paddingTop = nav.offsetHeight + 'px';
}else{
 document.body.style.paddingTop = '0px';
 document.body.classList.remove('fixed-nav');
}
```
3. 在 css 上把其他元件定義在 .fixed-nav 的子類別中,  
可以讓 .fixed-nav 控制更多
```css=
.fixed-nav nav{

 position: fixed;

 box-shadow: 0px   5px   #eeeeee;

}

.fixed-nav li.logo{

 max-width: 500px;

}

.fixed-nav .site-wrap{

 transform: scale(1);

}

```
## 紀錄
### `element.offsetTop`
可抓取 html tag 和網頁最上方的距離
### `window.scrollY`
抓取網頁目前滑動到的位置,  
最上方為基準
