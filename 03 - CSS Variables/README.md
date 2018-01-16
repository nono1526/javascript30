Javascript30 - DAY 3 - Scoped CSS Variables and JS
==================================================
## 目標
透過宣告 CSS 變數 
讓使用者能夠調整圖片的模糊、邊框、邊框顏色,
並且動態修改調整
## 步驟
1. 宣告三個 CSS Variable 來使用 
1. 用 querySelector 抓到 element 設定事件
1. 使用 JS 修改 CSS Variables 來動態改變 IMG 外觀

## CSS 紀錄
### CSS Variable 
之前沒有碰過
感覺拿來做這種動態更新畫面的來不錯,
且有需要定義的 theme 用起來也滿方便的,

範例：
```
:root {
  --global-color: #666;
  --pane-padding: 5px 42px;
}
```

### filter 屬性
感覺很實用的濾鏡效果！
有很多不同的
> 參考 http://blog.shihshih.com/css-filter/
> 
## JS 紀錄
`document.documentElement.style.setProperty`
`document.documentElement` 整份 document 文件
`style.setProperty` 修改 css 的方法
`el.dataset` 可用來抓 element 中 data-* 的欄位