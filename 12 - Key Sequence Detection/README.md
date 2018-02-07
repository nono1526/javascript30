Javascript30 - DAY 12 - Key Detection
=====================================
[DEMO](https://nono1526.github.io/javascript30/12 - Key Sequence Detection/index-nono.html)
## 目標
做出可以在網頁中打出特殊的通關密碼,  
就可以出現特別的彩的東西
## 步驟
1. 將 window 綁定 keyup 事件, 來判斷輸入的字元
2. 把輸入的字元用陣列儲存
3. 把輸入的陣列控制內容在一定的數量
4. 判斷輸入的陣列有無相符
## 紀錄
`array.splice()` 可以用來取代陣列或刪除部份內容
```javascript=
    var arr = ['a','b','c'];
    splice(0,1); //把第一個元素刪除
    splice(0,1,'d') //把 'a' 換成 'd'
    splice(-1,1) //從後面開始算, 所以是 'c' 被刪除
    splice(0,-1) //無效所以不做事
```
作者在這邊用了
```javascript=
pressed.splice(-keyword.length - 1 ,pressed.length - keyword.length );

```
這樣在輸入七個文字時會發現 `splice(-7,1)`  
會從最後面算回來也就是第一個文字刪除  
這樣就可以一直輸入但是 pressed 陣列裡面永遠都是最後輸入的七個字元
### Array.prototype.join()
用來把陣列轉為字串， 帶入的參數為要分割的字元

### Array.prototype.includes()
用來判斷是否有此字元存在
