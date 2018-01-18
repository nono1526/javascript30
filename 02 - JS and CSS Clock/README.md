Javascript30 - DAY 2 - JS and CSS Clock
========================================
[DEMO](https://nono1526.github.io/javascript30/02%20-%20JS%20and%20CSS%20Clock/index-nono.html)
步驟
---
1.把指針的樣式做好 (transform, transition)  
2.用 js 把分秒時針都抓出來  
3.設定每秒執行一次去抓新的時間,且改變指針該轉的角  

心得
---
這次學了很多 css 動畫的語法,  
還有 js 抓時間的語法  

js 語法
--------
* `new Date(); `取得目前日期 （本機）的日期
    * `getSeconds();` 抓秒數
    * `getMinutes();` 抓分鐘
    * `getHours();` 抓小時
* object.style.[css語法] 可用來改變元件的 style


css 語法 
------------------------
transform
* `transform-origin` 更改旋轉目標的中心點 (須和 `transform`  一同使用)
* `transform` 可對 html 做變形、旋轉、傾斜之類的動作
transition
可以幫 css 做轉換時的動畫
* `transition width 5s` 當寬度改變時在五秒內慢慢變長成新的寬度
* `transition-timing-function` 為你做的動畫做一點效果
`cubic-bezier()` 
可用來調整轉場動畫不同時間所產生的效果,  
有四個參數我也說不太明白他的用途,  
可以透過開發人員工具來調整XD,  
另外有提供幾個常用的轉場效果參數讓我們使用  
    * `ease`
    * `linearease-in`
    * `ease-in`
    * `ease-out`
    * `ease-in-out `

> 相關說明 https://www.w3schools.com/css/css3_transitions.asp
