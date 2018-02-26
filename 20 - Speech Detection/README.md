# Javascript30 - DAY 20 - Speech Detection
## 目標
這次要做一個語音識別的簡單小程式,  
很簡單不過超酷的！！  

## 紀錄
這邊一樣要使用到 local server 來取得語音裝置的控制權限
`npm install` 安裝需要用的到套件
`npm start` 開始 server

1. 判斷瀏覽器的使用
```javascript=
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
```
2. 使用語音物件
```javascript=
//儲存語音識別的物件
 const   recognition = new   SpeechRecognition();
 //自動識別收到語音的資訊
 recognition.interimResults = true;
 //使用的語言 'cmn-Hant-TW' 可使用繁體中文
 recognition.lang = 'cmn-Hant-TW';
```
3. 事件

### `recognition.start();` 開始使用語音辨識

### result 取得結果
```javascript=
recognition.addEventListener('result', e   => {
    e.results //可看到辨識結果相關資訊
    const   transcript = Array.from(e.results) //取得識別字串
    .map( result => result[0])
    .map( result => result.transcript).join('');
}
```
### end 結束
```javascript=
recognition.addEventListener('end', recognition.start); //這邊用來連續判斷連續句子
```

### contenteditable 創造可輸入的 html tag
```htmlmixed=
<div contenteditable="true">
    可自由修改內容
</div>
```