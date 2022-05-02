function startClassification()
 {
      navigator.mediaDevices.getUserMedia({ audio: true});
       classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GwaqxOFSb/model.json',modelReady);
       function modelReady()
       {
            classifier.classify( gotResults);
         }
         function gotResults(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
document.getElementById("result_label").innerHTML="detected voice is of-"+results[0].label;
img=document.getElementById("animals").innerHTML;
if(results[0].label== "dog"){
    img.src="dog.png";
}
else if(results[0].label=="cat"){
    img.src="cat.png";
}
else{
    img.src="ear.png";
}
 }
}