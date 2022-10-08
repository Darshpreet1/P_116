function startClassfication()
{
  navigator.mediaDevices.getUserMedia({audio : true});
  Classfier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/txgZgIm5R/model.json",modelready)
 }
function modelready()
{
  Classfier.classify(gotresults);
}

function gotresults(error,results)
{
  console.log(gotresults);
}