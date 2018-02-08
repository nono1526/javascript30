Javascript30 - DAY13 - Slide in on Scroll
==================
(DEMO)[https://nono1526.github.io/javascript30/13%20-%20Slide%20in%20on%20Scroll/index-nono.html]
## 目標
將圖片做一個動態效果  
將頁面滑到圖片時, 圖片會滑動出來
## 步驟
1. 將所有圖片用 querySelectorAll 抓出來
2. 設定頁面滾動事件 addEventListener('scroll')
3. 這邊作者有做一個 debunce 來延遲 scroll 事件,  
不要讓它觸發太多次來影響效能
4. 判斷視窗底部有無超過圖片的一半, 以及圖片底部是否小於視窗最高點
5. 若判斷確定幫圖片加上 active class
## js紀錄
### **window**
捲軸的視窗頂部為 `window.scrollY`  
視窗的內部大小 `window.innerHeight`  
### **元件**
元件對於整個網頁最上部的距離 `element.offsetTop`

```javascript=
 // 用來判斷網頁最底部 ,為整個視窗高度 - img / 2
 const   slideInAt = (window.scrollY + window.innerHeight) \- sliderImage.height/2;
 // 為 img 最底部的位置
 const   imageBottom = sliderImage.offsetTop + sliderImage.height;
 // 這兒判斷我們的判斷線有無超過 img 的最上面
 const   isSlideTop = slideInAt \> sliderImage.offsetTop;
 // 這兒判斷我們的網頁最頂部有無超過 img 最底部
 // 怕使用者一次滑超過相片
 const   isPastBottom = imageBottom \> window.scrollY;

```

###### tags: `javascript30`
