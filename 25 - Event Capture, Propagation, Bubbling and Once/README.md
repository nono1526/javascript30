# Javascript30 - Day 25 - Event Capture, Propagation, Bubbling and Once
[[DEMO](https://nono1526.github.io/javascript30/25%20-%20Event%20Capture,%20Propagation,%20Bubbling%20and%20Once/index-nono.html)] - [[GitHub](https://github.com/nono1526/javascript30/tree/master/25%20-%20Event%20Capture%2C%20Propagation%2C%20Bubbling%20and%20Once)]
## 目標
學習 Js 事件傳遞,  
利用不同顏色的 div 來學習事件的捕獲、冒泡、單次執行
## 紀錄
### 事件傳遞
假如今天點擊一個 `<a>`,  
事件會從 window 往下傳遞,  
到 `<a>` 為止,  
然後開始觸發冒泡事件,  
從 `<a>` 開始傳遞回 window  
而一般我們在 addEventListener 通常都是用事件冒泡時的觸發
![參考 w3c doc - eventFlow](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)
### event Capture 事件捕獲
意思就是從 window 到 target 傳遞過程,  
可從 addEventListener 的第三個參數, 
調整成 capture: true, 讓事件觸發從在事件捕獲階段
```javascript=
divs.forEach(div=>   div.addEventListener('click', clickIt , {capture:   true}));
```
### event Bubbling 事件冒泡
就是由 target 開始傳遞回 window 的過程,  
addEventListener 的預設模式
### event Once
事件只執行一次就自己消除事件綁
```javascript=
button.addEventListener('click', clickIt, {once:   true});
```