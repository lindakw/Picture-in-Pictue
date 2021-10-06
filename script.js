const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt user to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (err) {
        //Catch error here
        console.log('Uh oh! Error: ', err);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Resets Button
    button.disabled = false;
})

// On Load
selectMediaStream();