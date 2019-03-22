const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

// 캠이 존재한다면 캠을 시작한다.
function getVideo() {
    navigator.mediaDevices.getUserMedia({video:true, audio: false})
    .then(localMediaStream => {
        
        console.log(localMediaStream);

        //  DEPRECIATION : 
        //       The following has been depreceated by major browsers as of Chrome and Firefox.
        //       video.src = window.URL.createObjectURL(localMediaStream);
        //       Please refer to these:
        //       Depreceated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

        video.srcObject = localMediaStream;
        video.play();
    }).catch(err => {
        console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();
}

getVideo();

// 지정된 미디어 유형을 재생할 수 있는지 여부를 결정합니다.
video.addEventListener('canplay', paintToCanvas);