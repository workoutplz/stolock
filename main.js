// Init camera
function camInit(stream) {
    var cameraView = document.getElementById("cameraview");
    cameraView.srcObject = stream;
    cameraView.play();
}

function camInitFailed(error) {
    console.log("get camera permission failed : ", error)
}

// Main init

function mainInit() {
    // Check navigator media device available
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia )
    {
        // Navigator mediaDevices not supported
        alert("Media Device not supported")
        return;
    }

    navigator.mediaDevices.getUserMedia({video:true})
        .then(camInit)
        .catch(camInitFailed);

}

const left_scroll = document.querySelector("#left")
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY;
    console.log(value);
    left_scroll.style.transform = `translate(-${value}px, 0)`;
})

const right_scroll = document.querySelector("#right")
window.addEventListener('scroll', function() {
    let value = 1 + window.scrollY;
    console.log(value);
    right_scroll.style.transform = `translate(${value}px, 0)`;
})

const content_form = document.querySelector("#content-form")
const canvas = document.querySelector("#canvas")
const video = document.querySelector("video")
const card = document.querySelector(".card")
const passwd = document.querySelector("#passwd");
window.addEventListener('submit', function(e){
    e.preventDefault();
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    let image_data_url = canvas.toDataURL('image/jpeg');
    console.log(image_data_url)
    video.style.display = 'none'
    canvas.style.display = 'block'
    card.classList.add("print")
    passwd.style.display = 'inline'
})