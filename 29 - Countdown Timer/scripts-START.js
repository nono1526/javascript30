let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
function timer(seconds){
    const now = Date.now(); //現在時間
    const then = now + seconds * 1000; //結束時間
    displayTimeLeft(seconds); //顯示時間畫面 (因宣告 interval 不會重整畫面)
    displayEndTime(then); //顯示結束時間畫面
    clearInterval(countdown); //以免重複呼叫先清除 interval

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //顯示畫面勝多少時間
        displayTimeLeft(secondsLeft);
        //停止 timer
        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
          }
        //顯示
    },1000);
}

//這邊創一個 function 因為 setInterval 宣告時自己不會執行
function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes }:${remainderSeconds < 10 ?  '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

//顯示停止時間
function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    timeEnd.textContent = `${hours > 12 ? hours - 12 : hours }:${minutes < 10 ?  '0' : ''}${minutes} 前回來呦`;
}
//點選按紐觸發的動作
function startTime(){
    const seconds = this.dataset.time;
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTime));

//textbox 分鐘控制
document.customForm.addEventListener('submit', function(e){
    console.log(e);
    e.preventDefault();
    console.log(this);
    const mins = this.minutes.value;
    this.reset();
    timer(mins * 60);
})