var finalAnswers = [];

function pleaseDisappear(prev, next) {
  let prevPage = document.getElementById(prev);
  let nextPage = document.getElementById(next);
  prevPage.style.display = "none";
  nextPage.style.display = "flex";
}

//Question 1
function foodQuestion() {
  var x = document.getElementById("select-form").value;
  console.log(x);
  finalAnswers.push(parseInt(x));
  pleaseDisappear("question-1", "question-2");
}

//Question 2

function likeToDo() {
  var Radio1 = document.getElementById("radio1").checked;
  var Radio2 = document.getElementById("radio2").checked;
  var Radio3 = document.getElementById("radio3").checked;

  if (Radio1) {
    finalAnswers.push(parseInt(radio1.value));
  } else if (Radio2) {
    finalAnswers.push(parseInt(radio2.value));
  } else if (Radio3) {
    finalAnswers.push(parseInt(radio3.value));
  } else {
    finalAnswers.push(parseInt(radio4.value));
  }
  pleaseDisappear("question-2", "question-3");
}

//Question 3
//Select only 1 checkbox:
$(document).ready(function () {
  $("input:checkbox").click(function () {
    $("input:checkbox").not(this).prop("checked", false);
  });
});

function travelChoice() {
  Check1 = document.getElementById("check1").checked;
  Check2 = document.getElementById("check2").checked;
  Check3 = document.getElementById("check3").checked;
  Check4 = document.getElementById("check4").checked;
  console.log(Check1, Check2, Check3, Check4);

  if (Check1) {
    finalAnswers.push(parseInt(check1.value));
    pleaseDisappear("question-3", "question-4");
  } else if (Check2) {
    finalAnswers.push(parseInt(check2.value));
    pleaseDisappear("question-3", "question-4");
  } else if (Check3) {
    finalAnswers.push(parseInt(check3.value));
    pleaseDisappear("question-3", "question-4");
  } else if (Check4) {
    finalAnswers.push(parseInt(check4.value));
    pleaseDisappear("question-3", "question-4");
  } else {
    alert("Please check one of the boxes");
  }
}

// Question 4

function languageChoice() {
  inputValue = document.getElementById("input-form").value;
  console.log(inputValue);

  if (inputValue === "") {
    alert("Please write one of the options provided");
  } else {
    if (inputValue == "french" || inputValue == "French") {
      pleaseDisappear("question-4", "question-5");
      finalAnswers.push(parseInt("2"));
    } else if (inputValue == "japanese" || inputValue == "Japanese") {
      pleaseDisappear("question-4", "question-5");

      finalAnswers.push(parseInt("1"));
    } else if (inputValue == "spanish" || inputValue == "Spanish") {
      pleaseDisappear("question-4", "question-5");

      finalAnswers.push(parseInt("3"));
    } else if (inputValue == "english" || inputValue == "English") {
      pleaseDisappear("question-4", "question-5");

      finalAnswers.push(parseInt("4"));
    } else {
      alert("Please write one of the options provided");
    }
  }
}
//Disappear

// Question 5

function choose(element) {
  imageValue = element.getAttribute("value");
  console.log(imageValue);
  finalAnswers.push(parseInt(imageValue));
}

function fuck() {
  console.log("Hi");
}

function thingsDisappear() {
  pleaseDisappear("first-page", "question-1");
}
//   var firstPage = document.getElementById("first-page");
//   var question1 = document.getElementById("question-1");

//   if ((question1.style.display = "none")) {
//     question1.style.display = "flex";
//   }
//   if ((firstPage.style.display = "flex")) {
//     firstPage.style.display = "none";
//   }
// }

// Final Result

function finalResult() {
  // Find the most frequent value in the array
  var mf = 1;
  var m = 0;
  var mostFrequent;
  for (var i = 0; i < finalAnswers.length; i++) {
    for (var j = i; j < finalAnswers.length; j++) {
      if (finalAnswers[i] == finalAnswers[j]) m++;
      if (mf < m) {
        mf = m;
        mostFrequent = finalAnswers[i];
      }
    }
    m = 0;
  }

  console.log("Monstfrequent", mostFrequent);

  if (mostFrequent == 1) {
    document.getElementById("question-5").style.display = "none";
    document.getElementById("asia-result").style.display = "flex";
  } else if (mostFrequent == 2) {
    document.getElementById("question-5").style.display = "none";
    document.getElementById("europe-result").style.display = "flex";
  } else if (mostFrequent == 3) {
    document.getElementById("question-5").style.display = "none";
    document.getElementById("southAmerica-result").style.display = "flex";
  } else if (mostFrequent == 4) {
    document.getElementById("question-5").style.display = "none";
    document.getElementById("australia-result").style.display = "flex";
  }
}
