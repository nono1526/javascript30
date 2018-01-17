vascript30 - DAY 4 - Array Cardio
===================================

## 心得
這回沒有 CSS 都是 JS 有關陣列和物件操作的一些題目,
很多很方便的 Array API,
如果能使用這些 API 來操作陣列,
一定可以比以前省下許多時間,
且有更高的可讀性！,
加上使用 arrow array,
整個程式碼看起來就很乾淨整潔

### filter

`Array.fliter();` 會把回傳為 ```true``` 的陣列保留
```
    const ans1 = inventors.filter(inventor => 
        inventor.year >= 1500 && inventor.year < 1600);
```

### map 
`Array.map()` 走訪陣列, 回傳的值組成新的陣列
```  
const eventorsName = inventors.map( inventor => `${inventor.first} ${inventor.last}`);
```

### sort 
`Array.sort()` 沒有給參數就會由小到大排序,
可自訂排序方式
```
    const sortByBirthdate = inventors.sort((a, b) 
        => a.year > b.year ? 1 : -1);

```
a為最後一筆資料,b是下一筆資料
若 a > b 回傳 1 做交換
若 a < b 則回傳 -1 不做交換
所以此為由大到小排序

### reduce
好用的加總
```let totalYears = 0;
for (let i = 0; i < inventors.length; i++) {
    let liveYear = inventors[i].passed - inventors[i].year;
    totalYears += liveYear;
}
```
沒有使用 reduce 是要打這些來加總

```    
const totalLive = inventors.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year)
    ,0);
```
使用 ``reduce``
第一個參數為 callback 
callback 的第一的參數為要加總的變數,
第二個參數為要操作的變數
```reduce``` 的第二個要的參數為加總變數的初始值

### el.textContent
可抓到 element 的內文 (a div span)
### String.includes('de') 包含 de 文字
存在 de 文字就回傳 true
