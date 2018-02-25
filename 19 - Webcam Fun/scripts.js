const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({video: true, audio:false})
    .then(localMediaStream => {
        video.src = window.URL.createObjectURL(localMediaStream); // 抓取視訊的 URL
        video.play();
    })   
    .catch(err=>{
        console.err('no!',err);
    }); //失敗時
}


function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    return setInterval(()=>{
        ctx.drawImage(video,0,0,width,height);
        //取得 pixels
        let pixels = ctx.getImageData(0,0,width,height); //取得每一個像素資訊
        //更改 pixels
        pixels = greenScreen(pixels);
        //ctx.gobalAlpha = 0.5;
        //傳回 pixels
        ctx.putImageData(pixels,0,0);
    },16);
}

function greenScreen(pixels){
    const levels = {}; //將值帶入一個物件 , index 為名稱
    document.querySelectorAll('.rgb input').forEach(input=>{
        levels[input.name] = input.value;
    });
    for(let i = 0;i<pixels.data.length;i+=4){
        red = pixels.data[i+0]; //R
        green = pixels.data[i+1]; //G
        blue = pixels.data[i+2]; //B
        alpha = pixels.data[i+3]; // alpha

        if( red >=levels.rmin && red <= levels.rmax && green >= levels.gmin && green <= levels.gmax && blue >= levels.bmin && blue <= levels.bmax){
            pixels.data[i+3] = 0;
            //若在選定的範圍內 , 就將那個 pixels 設定為 透明
        }

    }
    return pixels;
}

function redEffect(pixels){
    for(let i=0;i < pixels.data.length;i+=4){
        pixels.data[i+0] = pixels.data[i+0] + 100; //R
        pixels.data[i+1] = pixels.data[i+1] - 50; //G
        pixels.data[i+2] = pixels.data[i+2] * 0.5; //B


    }
    return pixels;
}
function rgbSplit(pixels){
    for(let i=0;i < pixels.data.length;i+=4){
        pixels.data[i-150] = pixels.data[i+0] + 100; //R
        pixels.data[i+300] = pixels.data[i+1] - 50; //G
        pixels.data[i-550] = pixels.data[i+2] * 0.5; //B


    }
    return pixels;
}

function takePhoto(){
    //聲音
    snap.currentTime = 0;
    snap.play();
    //輸出 canvas 的影像
    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download','handsome');
    link.textContent = "Download Image";
    link.innerHTML = `<img src="${data}" alt = "me">`;
    strip.insertBefore(link, strip.firstChild);
}

getVideo();
video.addEventListener('canplay',paintToCanvas);