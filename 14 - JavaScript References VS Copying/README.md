Javascript30 - DAY14 - JS Reference VS copy
===========================================
[DEMO](https://nono1526.github.io/javascript30/14%20-%20JavaScript%20References%20VS%20Copying/index-nono.html)
## 目標
學習 js 基本參數以及 object 使用
## 紀錄
### 基本型態
-   Number （數字）
-   String （字串）
-   Boolean （布林）
-   Object （物件）
    -   Function （函式）
    -   Array （陣列）
    -   Date （日期）
    -   RegExp
-   Null （空）
-   Undefined （未定義）

Number,String,Boolean 在用 a = b; 都是傳值呼叫 不會影響到原來的參數  
Object 的物件則是使用傳址呼叫 必須要用一些特別的方法才能複製 Object  
陣列的複製可用
* `Array.slice()` 不帶入參數直接複製整個陣列
* `Array.concat` 把陣列和一個空陣列結合
* `[...]` es6 新用法 展開運算子（spread operator）
物件的複製
* `Object.assign();` 直接把陣列帶入
但若不只一層就無法這樣直接帶入  
必須直接用 JSON.parse & JSON.strtify()  
直接轉為字串在轉回陣列就不會有位址的連動啦！！