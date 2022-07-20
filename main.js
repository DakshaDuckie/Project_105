Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quailty: 90
});
var camera = document.getElementById("camera");
var picture = document.getElementById("result");
 Webcam.attach(camera);

 function capture(){
    Webcam.snap(function(data_uri){
        picture.innerHTML = '<img id="picture" src="'+data_uri+'">';
    });
}

console.log("ml5 Version: ",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cCJzAHVXk/model.json',modelLoaded);

function modelLoaded() {
    console.log("model loaded successfully");
};

function check() {
    img = document.getElementById("picture");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
        var object_show = document.getElementById("result_of_objects");
        var accurate_show = document.getElementById("result_of_accuracy");
        object_show.innerHTML = results[0].label;
        accurate_show.innerHTML = results[0].confidence.toFixed(3);
    }
}