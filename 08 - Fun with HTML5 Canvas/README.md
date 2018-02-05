Javascript30 - Day8 - Canvas
============================
[DEMO](https://nono1526.github.io/javascript30/08%20-%20Fun%20with%20HTML5%20Canvas/index-nono.html)
## 目標
使用 canvas 製作一個網頁畫布
## 紀錄
* `window.innerHeight` `window.innerWidth`
判斷目前視窗的大小
### Canvas
* HTML5 的畫布, 以前有用這個東西做過遊戲, 功能很強大, 支援 2d 3d 繪圖(不過我也只用過 2d...)  

    * `ctx.beginPath` 這個告訴 canvas 我們準備要畫線囉！
    * `ctx.strokeStyle` 這個來設定我們要畫出的顏色
    * `ctx.lineCap` 設定線的開頭及結尾的形狀用 `round` 設定成圓弧
    * `ctx.lineJoin` 設定當線交會處的表現 `round` 為圓角 `bevel` 為斜角
    * `ctx.moveTo(x,y)` 移動畫筆的起始點
    * `ctx.lineTo(x,y)` 畫筆要畫的終點
    * `ctx.stroke()` 開始畫圖
    * `ctx.lineWidth` 畫筆粗度
> w3c 有滿完整的教學 [w3c canvas](https://www.w3schools.com/html/html5_canvas.asp)
### HSL
HSL即色相、飽和度、亮度
* 色相 0~360
* 飽和度 0% ~ 100%
* 亮度 0% ~ 100%
* `HSL( 240,  100%,  50% )`

###### tags: `javascript30`
