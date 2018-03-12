---
title: Javascript30 - Day30 - Whack A Mole
date: 2018-03-12 12:15:52
categiries:
- javascript30
tags:
- javscript
- frontend
---
[[DEMO](https://nono1526.github.io/javascript30/30%20-%20Whack%20A%20Mole/index-nono.html)] - [[GitHub](https://github.com/nono1526/javascript30/tree/master/30%20-%20Whack%20A%20Mole)]

![js30-30](https://i.imgur.com/CqDh11I.gif)

## 目標
做一個打地鼠小遊戲,  
最後一天了！！！
## 步驟
1. 先抓到要控制的 html tag, 還定義有要使用的變數
```javascript=
const   holes = document.querySelectorAll('.hole');//地鼠的洞
const   scoreBoard = document.querySelector('.score'); //分數
const   moles = document.querySelectorAll('.mole'); //地鼠
let   lastHole; //最後出現的地鼠 (為了怕重複出現同一隻)
let   timeUp = false; //遊戲進行判斷
let   score; //分數
```
2. 做可以產生隨機選擇地鼠洞和隨機地鼠停留時間的函數
```javascript=
//隨機地鼠停止時間
 function   randomTime(min,max){
 return   Math.floor(Math.random() * (max - min) + min);
}
 //隨機選一個地鼠洞
 function   randomHole(holes){
 //隨機選擇一個洞
 const   idx = Math.floor(Math.random() * moles.length);
 const   hole = holes[idx];
 //避免出現重複的洞
 if(hole === lastHole){
 console.log('在找一次');
 return   randomHole(holes);
}
 lastHole = hole;
 return   hole;
}

```
3. 把上面的函數整合成一個讓地鼠不斷鑽出的 function
```javascript
function   peep(){
 const   time = randomTime(200, 1000);
 const   hole = randomHole(holes);
 hole.classList.add('up'); //鑽出
 setTimeout(()=> {
 hole.classList.remove('up');
 if (!timeUp) peep(); //若時間沒到就繼續鑽出下一隻地鼠
}, time)
}
//打到地鼠
 function bonk(e){
 if(!e.isTrusted) return; //作弊 （用程式點擊）
 //讓地鼠縮回去
 this.classList.remove('up');
 //加一分
 score++;
 scoreBoard.textContent = score;
}

```
4. 設定按鈕點擊開始遊戲,  
並初始化各種狀態
```javascript
function   startGame(){
 //初始化遊戲
 timeUp = false;
 scoreBoard.textContent = 0;
 score = 0;
 peep();
 //過 10s 停止遊戲
 setTimeout(() =>   timeUp = true, 10000);
}
```
## 紀錄
### event.isTrusted
此可以用來判斷使否真的是用滑鼠去點擊事件,  
而不是用程式去跑的事件,  
防止作弊的情況產生

### css overflow:hidden
這邊利用 orverflow: hidden 的特性,  
讓超出 hole 範圍的地鼠隱藏起來,
在利用修改 position,  
所以看起來就像是地鼠從地上鑽出來
