Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

   camera = document.getElementById("camaera");

Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>'
    })
}

cansole.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vTISkwQp3/json',modeLoaded);

   function modeLoaded() {
    console.log('Model Loaded!');
   }

   function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The fist prediction is " + prediction_1;
    spack_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + spack_data_2);
    synth.speak(utterThis);
   }

