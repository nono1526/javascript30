Javascript30 - DAY10 - Hold Shift to Checked!
============================================
## 目標
可以用 shift 多選 checkbox
## 步驟
1. 抓到所有的 checkbox
2. 設定點擊事件
3. 紀錄最後點擊的事件
4. 每次點擊走訪 checkbox 
4. 建立一個 flag 紀錄哪個區間是可以打勾的

## 紀錄
* `e.shiftKey` 可判斷有無按下 shift 

## 問題
但發現一個問題就是如果一開始沒有先點直接按下 shift 就回導致全選
所以在加上判斷有無 lastClicked 在進行走訪 checkbox 
`if( e.shiftKey && this.checked && lastClicked){ //若按下 shift
`