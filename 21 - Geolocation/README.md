# Javascript30 - DAY 21 - Geolocation
## 目標
利用 Geolocation 抓取設備的速度、方位相關定位資料
## 紀錄
### css - radial-gradient
作者這邊的背景竟然也是使用 css 去繪製的
用到了一個類似做圓形漸層的方法把圓形"疊"起來,  
再把他利用 background 重複的特性合成一張背景
```css=
background:
 radial-gradient(black   15%, transparent   16%) 0   0,
 radial-gradient(black   15%, transparent   16%) 8px   8px,
 radial-gradient(rgba(255,255,255,.1) 15%, transparent   20%) 0   1px,
 radial-gradient(rgba(255,255,255,.1) 15%, transparent   20%) 8px   9px;
background-color:#282828;
background-size:16px   16px;
background-attachment: fixed;
```
> 參考 [w3c](https://www.w3schools.com/cssref/func_radial-gradient.asp)
### navigator.Geolocation
使用 `navigator.geolocation.watchPosition` 可監控裝置的定位器,  
會回傳一個 Position Object  
`Position.coords.speed` 裝置速度
`Position.coords.heading` 方位
> 參考 [MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/Using_geolocation)
