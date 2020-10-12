Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(pic){
        document.getElementById("snap").innerHTML=`<img id="captured pic" src=${pic}>`
    });
}

console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qrVw1vt4_/model.json',modelloaded);

function modelloaded(){
    console.log("Model loaded");
}

function check(){
    picture=document.getElementById("captured pic");
    classifier.classify( picture,gotresult);
}

function gotresult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    result1=results[0].label;
    result2=results[1].label;
    document.getElementById("emotion1_name").innerHTML=result1;
    document.getElementById("emotion2_name").innerHTML=result2;
if(result1=="angry"){
document.getElementById("emoji1").innerHTML="&#128545;";
} 
if(result1=="suprised"){
document.getElementById("emoji1").innerHTML="&#128558;";
}
if(result1=="sad"){
document.getElementById("emoji1").innerHTML="&#128532;";
}  
if(result1=="happy"){
document.getElementById("emoji1").innerHTML="&#128522";
}
if(result2=="angry"){
    document.getElementById("emoji2").innerHTML="&#128545;";
    } 
    if(result2=="suprised"){
    document.getElementById("emoji2").innerHTML="&#128558;";
    }
    if(result2=="sad"){
    document.getElementById("emoji2").innerHTML="&#128532;";
    }  
    if(result2=="happy"){
    document.getElementById("emoji2").innerHTML="&#128522";
    }
}
}