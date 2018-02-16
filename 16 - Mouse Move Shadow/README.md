Javascript30 - DAY16 - Mouse Shadow
==================================
[DEMO](https://nono1526.github.io/javascript30/16%20-%20Mouse%20Move%20Shadow/index-nono.html)
## 目標
做出一個很酷的跟著鼠標一起滑動的分身～
## 紀錄
### Javascript
#### `element.offsetWidth` `element.offsetHeight` 
element 包含 width + padding + border 的寬度
#### es6 解構付值
es6 新特性
我覺得這個很厲害而且也很實用,  
可以省去寫很多行的時間  
```javascript=
    const [a,b] = [1,2] // a=1, b=2

    const myObj = {name:'nono', age: 24};
    const { name: myName, age: myAge} = myObj;
    // myName = 'nono', myAge = 24
```
#### mousemove
這邊作者在 .hero 這個容器設定 mousemove 事件  
並且抓 `offsetX` `offsetY`  
但是如果鼠標滑到 h1 這個放在 .hero 裡面的子容器後  
會跑去抓取 h1 的 `offsetX` `offsetY`  
所以作者抓取 h1 的 `offsetTop + offsetX` `offsetLeft + offsetY` 讓鼠標的座標修復成正常的  

```javascript=
if (this !== e.target) {

 x = x + e.target.offsetLeft;

 y = y + e.target.offsetTop;

}

```

#### 計算位移量
先算出座標在元件中的百分比 (x / width * walk), 在扣掉整個比例的中心位置 (walk / 2)
```

Math.round((x / width * walk) - (walk / 2))
```


