Javascript30 - Day7 - Array Cardio
===================================
## 心得
共四題陣列的操作,也是用一些我之前沒看過得語法
## 紀錄
* `Array.prototype.some(element, key, array);`
可以用來走訪陣列, 回傳判斷只要有一個為 `true` 結果就會為 `true`  
```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```
* `Array.prototype.every(el, key, array);`
和上面的 some 相反, 必須要全部的值符合條件才會回傳 `true`
```javascript=
function isBigEnough(element, index, array) { 
  return element >= 10; 
} 

[12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true
```
* `Array.prototype.find();
一樣會走訪陣列, 且回傳第一個符合條件的項目
```javascript=
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

```
* `Array.prototype.findIndex();
一樣會走訪陣列, 且回傳第一個符合條件項目的 index


* 展開運算符(Spread Operator) `...`
之前看到就覺得很好奇的 `...` 的用法  
可把陣列展開, 常用在複製一個陣列或結合陣列  
還有很多有趣的用法可參考
> [展開運算符與其餘運算符](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/rest_spread.html)
> [Spread syntax - JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_operator)
> 
###### tags: `javascript30`

