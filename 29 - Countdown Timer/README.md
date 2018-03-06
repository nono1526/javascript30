# Javascript30 - Day 29 - CountDown Timer
[[DEMO](https://nono1526.github.io/javascript30/29%20-%20Countdown%20Timer/index.html)] - [[GitHub](https://github.com/nono1526/javascript30/tree/master/29%20-%20Countdown%20Timer)]
## 目標
做出一個倒數計時器
## 步驟
1. 建立一個 function timer 為主要使用 
```javascript=
function   timer(seconds){
 const   now   =   Date.now(); //現在時間
 const   then   =   now   +   seconds   *   1000; //結束時間
 displayTimeLeft(seconds); //顯示時間畫面 (因宣告 interval 不會重整畫面)
 displayEndTime(then); //顯示結束時間畫面
 clearInterval(countdown); //以免重複呼叫先清除 interval
 countdown = setInterval(() => {
     const secondsLeft = Math.round((then -Date.now()) / 1000);
     //顯示畫面勝多少時間
     displayTimeLeft(secondsLeft);
     //停止 timer
     if(secondsLeft <= 0) {
         clearInterval(countdown);
     return;
}
},1000);
}
```
2. 寫顯示畫面時間的 function
```javascript=
//這邊創一個 function 因為 setInterval 宣告時自己不會執行

function   displayTimeLeft(seconds){
 const minutes = Math.floor(seconds / 60);
 const remainderSeconds = seconds % 60;
 //將秒數補 '0'
 const display = `${minutes }:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
 timerDisplay.textContent = display;
}
 
//顯示停止時間
function displayEndTime(timestamp){
 const end = new Date(timestamp);
 const hours = end.getHours();
 const minutes = end.getMinutes();
 //將24小時至轉換成12小時
 timeEnd.textContent = `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? '0' : ''}${minutes} 前回來呦`;
}

```
3. 加入網頁上的時間按鈕功能
```javascript=
//點選按紐觸發的動作
function   startTime(){
 const   seconds   =   this.dataset.time;
 timer(seconds);
}
 
buttons.forEach(button   =>   button.addEventListener('click', startTime));

```
4. 加入自訂分鐘功能
```javascript=
//textbox 分鐘控制
document.customForm.addEventListener('submit', function(e){
 e.preventDefault(); //停止原本要執行的預設動作
 console.log(this);
 const mins = this.minutes.value;
 this.reset();
 timer(mins * 60);
})

```
## 紀錄
### `Math.round()`
四捨五入到整數
### `Math.floor()`
捨去整數後方的小數
### document.[name]
若 html 裡面有元素被宣告 name,  
會被加入 document 裡面,
例如 
```javascript=
//一個<form>
<form name="myform">
    <input type="text" name="inside">
</form>

//可以用
document.myform.inside
//去抓到 input
```
### Date.now();
可抓到目前的時間
