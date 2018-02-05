Javascript30 - DAY 9 -Console Tricks!
=====================================
## 目標 
這一集學習了 Chrome 開發工具的一些小技巧
## 紀錄
* google chrome 中斷點 break on
從 google 開發人員工具中的 Element 分頁 點選 dom 右鍵,選擇 break on
* console
    * `consle.log()` 一般的將文字或變數印出
    * `console.log('hi im %s nono , how are you', 'ohya');`  
    可用變數將值帶入此方法同 
    `javascript=
    console.log('hi im `${someVar}` nono , how are you')`
    * `console.log('%c hi im nono ','font-size: 18px')` 可將 console 改 css 樣式
    * `console.warn('denger!denger!denger!denger!denger!');
` 可使用 warn 樣式的 console
    * `console.error() 可使用 error 樣式的 console`
    * `console.info()` 可使用 info 樣式的 console
    * ` console.assert(1===2 , 'fail!');` 可作測試 如果不符合則印出錯誤訊息
    * `console.clear();` 清除在這之上的 console 資訊
    * `console.dir` 印出整個 dom 詳細資訊
    * 群組且自訂顯示名稱 group and groupEnd
    ```javascript
    dogs.forEach((dog) =>{

     console.group(dog.name);

     console.log('dog name: `${dog.name}`');

     console.log('dog age: `${dog.age}`');

     console.groupEnd();

    });
    ```
    * `console.count();` 紀錄這個 console 出現幾次
    
```javascript=
    console.count('nono'); //nono: 1

     console.count('nono'); //nono: 2

     console.count('nono'); //nono: 3

     console.count('cindy');//cindy: 1

     console.count('nono'); //nono: 4

     console.count('cindy');//cindy: 2

     console.count('cindy');//cindy: 3

     console.count('nono'); //nono: 5

     console.count('nono'); //nono: 6
```
    * `console.time（）`可紀錄程式運作的時間

```javascript=
console.time('start');

 window.setTimeout(() => {

 console.timeEnd('start');

},1000);
```
###### tags: `javascript30`
