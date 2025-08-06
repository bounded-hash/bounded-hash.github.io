const qValues = ['q1', 'a1', 'q2', 'a2', 'q3', 'a3', 'q4', 'a4'];
let qIndex = 0;

let quizData = null;

const quiz = document.getElementById('quiz');
const buttons = document.getElementById('buttons');


function answer(button){
	const txt = (button.className + "! " + quizData[qValues[qIndex]]);
	quiz.innerText = (txt);
		
	if(qValues[qIndex] !== 'a4') {
		buttons.innerHTML = '<button class="skip" onclick="skip()"> next</button>'
		
		qIndex += 1;
	} else {
		quiz.innerHTML += '<a href="https://www.youtube.com/watch?v=xa-4IAR_9Yw&ab_channel=CasuallyExplained"> context </a>'
		buttons.innerHTML = '<a href="./issheintoyou.html"> return </a>'
	}
}

function skip(){
	const txt = quizData[qValues[qIndex]]
	quiz.innerHTML = txt;
	buttons.innerHTML = '<button class="wrong" onclick="answer(this)"> yes </button> \
				<button class="wrong" onclick="answer(this)"> no </button> \
				<button class="correct" onclick="answer(this)"> can\'t tell </button>'
	qIndex += 1;
}


console.log(quiz)

fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    quizData = data;
    console.log('Data loaded:', quizData);

    const txt = quizData[qValues[qIndex]]
    quiz.innerText = txt;
		qIndex += 1;
		console.log('hi');
  })
  .catch(error => {
    console.error('There was a problem fetching the JSON:', error);
  });

