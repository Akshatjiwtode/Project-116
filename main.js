function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', modelReady);

    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error,results){
        console.log("got result");
    }

}

function start(){
    startClassification();
}