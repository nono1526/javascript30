JavaScript30 - DAY 6 - Type Ahead
==================================
[DEMO](https://nono1526.github.io/javascript30/06%20-%20Type%20Ahead/index-nono.html)
## 目標
製作一個讓使用者 keyin 去搜尋地方歡迎程度的功能
## 步驟
1. 用一個 API `fetch` 來到原本提供的網址來把資料抓下來
2. 用 `array.filter` 來把符合搜尋條件的項目選出來
3. 將輸入 input 設定事件
4. 將輸入事件後把結果放到 ul 上
## Javascript 紀錄
* `promise` 可完成同步延遲, 減少使用 callback 造成程式碼難以閱讀的麻煩,fetch 回傳的就是 promise 物件

> 參考 [JavaScript 同步延遲 ( Promise + setTimeout )](http://www.oxxostudio.tw/articles/201706/javascript-promise-settimeout.html)
* `fetch API` 用來取代舊有的 xhr , html5 的新 API, 回傳 `promise` 物件
> 參考 [從ES6開始的JavaScript學習生活-AJAX與Fetch API](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)
* Regex 正規表示法
這個完全沒有好好研究過, 所以不太懂用法,　自己的認知是知道可以用來做驗證一些字串，此範例用來過濾

* `String.match()` 利用正規表達式來比對搜尋字串,若沒有使用會預設自己 new 一個正規表示式
* 三位一撇小數
````javascript
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
`````
  * 作者用來做三位一撇小數逗號的正規表示法..
還需要研究一下！


###### tags: `javascript30`

