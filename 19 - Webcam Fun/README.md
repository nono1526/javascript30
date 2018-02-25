# Javascript30 - DAY19 - Webcam Fun
## 目標
製作一個很酷的個人視頻要用到鏡頭,
可以拍照和調整濾鏡,
最後還有額外教學綠幕使用的原理

## 紀錄
### npm
因為這邊需要取得視訊鏡頭的資訊,  
需是安全來源（secure origin）,  
也就是 https 或 localhost 才能取得視訊 ,  
所以要使用到 `browser-sync` 這個 localserver,  
這邊需要安裝到 nodejs & npm,  
作者也很用心已經幫我們把 package.json 都準備好了,  
所以只需要執行 `npm install` 把需要套件先安裝好,  
在執行 `npm start` 來執行 `browser-sync` 啦！
執行後就能到 localhost:3000,  
就能使用視訊的 web API 囉

### navigator
可以取得很多設備的資訊,  
如電量、座標、這邊使用的視訊
> [參考 MDN - window.navigator](https://developer.mozilla.org/zh-TW/docs/Web/API/Navigator)
### 取得鏡頭影像
`navigator.mediaDevices.getUserMedia` 取得視訊鏡頭影像
回傳 promise 物件

### window.URL.getObjectURL();
可指定 file or blob 回傳一個帶有 URL 的 DOMString
這邊用來抓取視訊的內容

[參考 MDN - URL.createObjectURL()](https://developer.mozilla.org/zh-TW/docs/Web/API/URL/createObjectURL)

### el.insertBefore();
`node.insertBefore('要插入的元件' ,插入的前一個子元件)`
[參考 MDN - Node.insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)

### ctx.globalAlpha
可設置 canvas 畫出來的透明度（可以讓我們的視訊看起來更 ㄎ一ㄤ XD）

### pixels = ctx.getImageData(0,0,width,height);
可抓取 canvas 中每一個像素
pixels.data 中含有數字陣列代表依序每個 pixel 的 rgba

### 綠幕

```javascript=
function   greenScreen(pixels){

 const   levels   = {}; //將值帶入一個物件 , index 為名稱

 document.querySelectorAll('.rgb input').forEach(input=>{

 levels[input.name] =   input.value;

});

 for(let   i   =   0;i<pixels.data.length;i+=4){

 red   =   pixels.data[i+0]; //R

 green   =   pixels.data[i+1]; //G

 blue   =   pixels.data[i+2]; //B

 alpha   =   pixels.data[i+3]; // alpha

 if( red   >=levels.rmin   
    &&   red   <=   levels.rmax  
    &&   green   >=   levels.gmin   
    &&   green   <=   levels.gmax   
    &&   blue   >=   levels.bmin   
    &&   blue   <=   levels.bmax){

     pixels.data[i+3] =   0;

     //若在選定的範圍內 , 就將那個 pixels 設定為 透明
    }
}

 return   pixels;

}

```
這個函數就是抓到整個 canvas 的 每個 pixel 然後去偵測他的顏色,  
在某個範圍內就會把那個範圍內的 pixel 都變成透明,  
所以基本上不一定只限定用綠色的背景！

###### tags: `javascript30`