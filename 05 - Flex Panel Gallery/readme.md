vascript30 - DAY 5 - Flex Panels
==================================
[DEMO](https://nono1526.github.io/javascript30/05%20-%20Flex%20Panel%20Gallery/index-nono.html)
## 步驟紀錄
1. 設定大的區塊 flex
原本題目是將每個 .panel 裝在 .panels 裡,  
所以把 .panels 設定為 flex 容器,  
把 .panel 設 `flex: 1` ,  
會讓每個在 .panels 裡面的 panel 切成五等分來均分 (有五個 .panel),  
2. 設定文字區塊 flex
接下來要把文字排版,  
一樣把 panel 設定成 `flex`,
`justify-content: center;` 設定水平置中,  
再來把 panel 底下的元素也都設為 flex 且做水平、垂直置中
3. 設定文字動畫
將上方文字及下方文字設定到螢幕上方及下方,  
設定開啟區塊後文字的位置,  
4. 設定開啟區塊動畫
將開啟後 flex 區塊比例以及字體條大  

5. 使用 JS 將 panel 設定 click 和 transitionend 事件就完成了!  
注意 transitionend DAY 也有使用到必須要抓到 flex 屬性完成後才做動作  

## CSS 紀錄
### flex
之前沒有使用過得排版用法,  
還不是很熟悉,  
* `display: flex` 來將容器設定成 flex
* `justify-content` 容器內的水平對齊
* `align-items` 容器內的垂直對齊
* `flex-direction` 容器排列的方式,可調整為 `row` 水平或 `column` 垂直排列
* `flex` 這個屬性很特別,  
用於容器下的 element ,  
有三個參數,第一個用來設定延伸比例,第二個用來設定壓縮比例,第三個參數為一個基準,用來設定超過多少要做延伸還是要做壓縮

> 參考 http://www.oxxostudio.tw/articles/201501/css-flexbox.html
### CSS子選擇器 >
範例使用 
`.panel > *`
來抓取所有 .panel 底下的所有子元素
### :first-child :last-child :nth-child(2)
節點選擇 

## JS 語法紀錄
`includes()` 有包含某某字元則回傳 `true`  
`e.propertyName.includes('flex')` 為了瀏覽器相容,  
有的瀏覽器的 `prorertyName` 會是 `flex-grow` 所以用   `includes`來確定有包含 flex 關鍵字就通過
