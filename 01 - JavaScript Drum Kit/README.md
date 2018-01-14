1.抓出鍵盤輸入的keycode ，加入鍵盤事件傾聽者(addEventListener)來抓取使用者所鍵入的按鍵。
2.將抓出的 keycode 找到對應的 div 並將 div 加上新的 class 來改變外觀
3.將按下的按鍵找到對應的 audio 元件 ，並且使它播放
4.把畫面上的按鍵按鈕 div 建立 css-transform 載入完成事件
5.加入防呆，以防使用者輸入錯誤鍵值時出現錯誤


學到的東西
==========
classList
---------------
add() & remove()
可加入或移除 class
以前都是用 jq 去做這些動作，現在直接用原生 js 就能辦到了
範例：
classList.add('a','b'); //可以新增多個 class
classList.remove('a','b') //可以移除多的 class


addEventListener
---------------
此範利用到了鍵盤輸入事件 keydown、transitionend
其實原先我是想用 keydown 和 keyup 來做這個專案，不過後來發現沒辦法按著狂發動XD
後來發現作者是用 transitionend 這個事件，讓我又學了一招
這個事件是在 css每個 property 載入完成後會動作，作者是指定 transform （框框確定有變大後）才繼續把 playing 這個 class 拿掉
---------------

template literals
---------------
也是語法 - 樣板文字

用 `` 來將字串和變數組合
變數用 ${} 包起來 
能輕鬆的組合字串和變數，以前都是用 + 號來連結
這個真的是太方便
---------------

Array.from
---------------
範例裡有使用到 Array.from 
原來傳回來的 querySelectorAll 抓回來的不是 Array 而是 NodeList
NodeList 無法使用 push()

---------------

HTML5 的 audio
---------------
之前就有用過這個元件
audio.play() 用來播放
audio.currentTime (調整時間軸)
---------------

