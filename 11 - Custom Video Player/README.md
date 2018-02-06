Javascript30 - DAY11 - HTML VIdeo Player
========================================
[DEMO](https://nono1526.github.io/javascript30/11%20-%20Custom%20Video%20Player/)
## 目標
做出自定義的播放器, 作者已將 css 和 html 都先準備好了  
所以我們只要負責用 javascript 來控制這些元素！
## 步驟
1. 抓所有要控制的節點
2. 設定節點的事件
3. 幫各個元素套上不同的功能！
## 紀錄
* `el.textContent` 更改內文內容
* HTML5 video html 內建的播放器功能滿強大的
* `video.paused` 判斷否正在播放
* `video.pause` `video.plau` 控制播放或暫停
* `video.currentTime` 控制播放的時間軸
* `video.volime` 音量
* `video.palybackRate` 播放速度
* `video.duration` 影片總長度
* `video.requestFullscreen()` 設定成全螢幕
但預設全螢幕已經有預設的樣式
也可以修改
參考 [Hiding Native HTML5 Video ](https://css-tricks.com/custom-controls-in-html5-video-full-screen/)
* 
`

* `flexBasis` 設定 flex 的長度
## video event
* `video.play` 當影片播放
* `video.pause` 當影片暫停
* `video.timeupdate` 當 currentTime 更新時
