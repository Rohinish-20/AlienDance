function sound_classifier()
{
 navigator.mediaDevices.getUserMedia({audio: true});
 classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ut_Lu2kpe/model.json", modelReady);
} 

function modelReady()
{
 classifier.classify(gotResult);
}

function gotResult(error, results)
{
 if(error)
 {
  console.log(error);
 }

 else
 {
  console.log(results);

  red_number = Math.floor(Math.random()*255) + 1;
  green_number = Math.floor(Math.random()*255) + 1;
  blue_number = Math.floor(Math.random()*255) + 1;

  document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
  document.getElementById("accuracy_label").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2)+" % ";
  document.getElementById("result_label").style.color = "rgb("+red_number+", "+green_number+", "+blue_number+")";
  document.getElementById("accuracy_label").style.color = "rgb("+red_number+", "+green_number+", "+blue_number+")";

  img1 = document.getElementById("alien1");
  img2 = document.getElementById("alien2");
  img3 = document.getElementById("alien3");
  img4 = document.getElementById("alien4");

  if(results[0].label == "Clapping")
  {
   img1.src = "aliens-01.gif";
   img2.src = "aliens-02.png";
   img3.src = "aliens-03.png";
   img4.src = "aliens-04.png";
  }

  else if(results[0].label == "Snaping")
  {
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.gif";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.png";
  }

  else if(results[0].label == "Tap")
  {
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.gif";
    img4.src = "aliens-04.png";
  }
  
  else 
  {
    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.gif";
  }
 }
}