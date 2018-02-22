# Javascript30 - DAY 18 - Adding Up Times with Reduce
[DEMO](https://nono1526.github.io/javascript30/18%20-%20Adding%20Up%20Times%20with%20Reduce/index-nono.html)
## 目標
計算出所有影片播放總時間
## 步驟
1. 抓到所有影片的播放長度 [data-time]
2. 把所有時間換算成秒數並加總起來
3. 把總秒數換成 hours:mins:secs 格式
## 紀錄
### 將 nodeList 轉為 Array 型態
因為用 `document.querySelectorAll` 抓回來的資料為 `nodeList` 型態  
會無法使用一些 Array 的操作  
所有可以使用`Array.prototype.from();` 或者展開運算子（spread operator）`[...]`  
將 nodeList 轉為 Array
### Array.prototype.reduce()
可以做把陣列加總起來
```javascript=
const total = [1,2,3,4,5] // 15
        .reduce( (total, curNum) => {
                    return total+curNum;
                });
    
```

### Array.prototype.map()
這邊有用的一個比較特別的就是直接把 function 代入 map 裡面
```js
const [mins, secs] = timeCode.split(':').map(parseFloat); 
//直接將分割的字串轉為 Float 型態
//等於下面
const [mins, secs] = timeCode.split(':').map(function(str){
    return parseFloat(str);
});
```


```

 
