let count=1;
let score=0;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];
let queNo=1;
let correctVal;
function scoreChecking(btn) {
    
  
    let selectedValue = Number(btn.innerText);
  
    if (selectedValue === Number(correctVal)) {
      score += 3;
      count = Math.min(3, count + 1);
    } else {
      score -= 1;
      count = Math.max(1, count - 1);
    }
  
document.getElementById("scor").innerText=score;

    if(queNo===11){
        localStorage.setItem("finalScore", score);
  window.location.href = "result.html";
    }
    setTimeout(() => {
      quizStart();
    }, 1000);
  }
  

function quizStart(){
    
    document.getElementById("quno").innerText=queNo;
    queNo+=1;
    let randomIndex = Math.floor(Math.random() * arr.length);
    let val=arr.splice(randomIndex, 1)[0];
    
     let ele=questions[val](count);
     
     document.getElementById("question").innerText=ele.question
     let options=makeOptions(ele.answer);
     correctVal=ele.answer;
     document.getElementById("op1").innerText=options[0];
     document.getElementById("op2").innerText=options[1];
     document.getElementById("op3").innerText=options[2];
     document.getElementById("op4").innerText=options[3];
     
}

function makeOptions(correctAnswer) {
    correctAnswer = Number(correctAnswer.toFixed(2));
  
    let wrong1 = Number((correctAnswer + 2).toFixed(2));
    let wrong2 = Number((correctAnswer + 5).toFixed(2));
    let wrong3 = Number((correctAnswer - 2).toFixed(2));
  
    if (wrong3 < 0) wrong3 = Number((correctAnswer + 7).toFixed(2));
  
    let options = [correctAnswer, wrong1, wrong2, wrong3];
    return options.sort(() => Math.random() - 0.5);
  }

  const questions = [
    makeQuestion1,
 
  
    makeQuestion2,
   
  
    makeQuestion3,
   
  
    makeQuestion4,
   
  
    makeQuestion5,
   
  
    makeQuestion6,
  
  
    makeQuestion7,
    
  
    makeQuestion8,
   
  
    makeQuestion9,
    
    makeQuestion10,
    
  
    makeQuestion11,
    
  
    makeQuestion12,
   
  ];
 

function makeQuestion1(type) {
    let a = Math.floor(Math.random() * 10) * 200;
    let b = Math.floor(Math.random() * 10) * 2;
  
    if (type === 3) {
      return {
        question: `A person crosses a ${a} m long street in ${b} minutes.
         What is his speed in km/hr?`,
        answer: (a / 1000) / (b / 60)
      };
    }
  
    if (type === 2) {
      return {
        question: `A person crosses a ${a} km long street in ${b} minutes.
         What is his speed in km/hr?`,
        answer: a / (b / 60)
      };
    }
  
    if (type === 1) {
      return {
        question: `A person crosses a ${a} m long street in ${b} sec. 
        What is his speed in m/sec?`,
        answer: a / b
      };
    }
  }

  function makeQuestion2(type) {
    let a = Math.floor(Math.random() * 10) * 400;
    let b = Math.floor(Math.random() * 10) * 2;
  
    if (type === 3) {
      return {
        question: `A cycle was priced at ${a}, and its price increased by ${b}%.
         Find the final price of the cycle.`,
        answer: a + (a * b) / 100
      };
    }
  
    if (type === 2) {
      return {
        question: `what is ${a} % of ${b} `,
        answer: (a * b) / 100
      };
    }
  
    if (type === 1) {
      return {
        question: `If A is 25% more than B, then B is what percent less than A?`,
        answer: 20
      };
    }
  }

  function makeQuestion3(type) {
    let a = Math.floor(Math.random() * 10) + 3;
  
    if (type === 2) {
      return {
        question: `Find the missing number in the sequence: ${a}, ${a * 2}, ${a * 4}, ${a * 8}, ?`,
        answer: a * 16
      };
    }
  
    if (type === 3) {
      return {
        question: `Find the missing number in the sequence: 2, 6, 12, 20, 30, ?`,
        answer: 42
      };
    }
  
    if (type === 1) {
      return {
        question: `Find the missing number in the sequence: ${a}, ${(a ** 2) - 1}, ${(a ** 3) - 1}, ${(a ** 4) - 1}, ?`,
        answer: (a ** 5) - 1
      };
    }
  }
  

  function makeQuestion4(type) {
    let a = Math.floor(Math.random() * 10) + 2;
    let b = Math.floor(Math.random() * 10) + 9;
    let c = Math.floor(Math.random() * 10) + 5;
    if (type === 3) {
      return {
        question: `A mother is ${a} times as old as her daughter. 
        If the daughter is ${b} years old, what is the mother's age?`,
        answer: (a*b)
      };
    }
  
    if (type === 2) {
      return {
        question: `A father is ${a} times as old as his son. After ${c} years, 
        the son will be ${b} years old. What is the father’s present age?`,
        answer: a*(b-c)
      };
    }
  
    if (type === 1) {
      return {
        question: `A man is ${a} times as old as his brother. If after ${c} years, the brother 
        will be ${b} years old, what is the man’s present age?`,
        answer: a*(b-c)
      };
    }
  }
  function makeQuestion5(type) {
    let a = (Math.floor(Math.random() * 10) + 1) * 10;
    let b = Math.floor(Math.random() * 9) + 2;
  
    if (type === 1) {
      return {
        question: `What is ${b}% of ${a}?`,
        answer: (a * b) / 100
      };
    }
  
    if (type === 2) {
      return {
        question: `${a} is what percent of ${a * b}?`,
        answer: (a / (a * b)) * 100
      };
    }
  
    if (type === 3) {
      return {
        question: `A number is increased by ${b}%. If the original number was ${a}, what is the new number?`,
        answer: a + (a * b) / 100
      };
    }
  
  }
  function makeQuestion6(type) {
    let a = Math.floor(Math.random() * 20) + 5;
    let b = Math.floor(Math.random() * 10) + 2;
  
    if (type === 1) {
      return {
        question: `Find the average of ${a}, ${b}, and ${a + b}.`,
        answer: (a + b + (a + b)) / 3
      };
    }
  
    if (type === 2) {
      return {
        question: `The average of 4 numbers is ${a}. What is their total sum?`,
        answer: a * 4
      };
    }
  
    if (type === 3) {
      return {
        question: `The average of 5 numbers is ${a}. If one number is removed, the average becomes ${b}. Find the removed number.`,
        answer: a * 5 - b * 4
      };
    }
  
  }
  function makeQuestion7(type) {
    let a = Math.floor(Math.random() * 10) + 2;
    let b = Math.floor(Math.random() * 10) + 2;
  
    if (type === 1) {
      return {
        question: `Find the area of a rectangle of length ${a} cm and breadth ${b} cm.`,
        answer: a * b
      };
    }
  
    if (type === 2) {
      return {
        question: `Find the perimeter of a rectangle of length ${a} cm and breadth ${b} cm.`,
        answer: 2 * (a + b)
      };
    }
  
    if (type === 3) {
      return {
        question: `A square has side ${a} cm. What is its area?`,
        answer: a * a
      };
    }
  
  }
  function makeQuestion8(type) {
    let a = (Math.floor(Math.random() * 10) + 1) * 100;
    let b = (Math.floor(Math.random() * 5) + 1) * 10;
  
    if (type === 1) {
      return {
        question: `A shopkeeper bought an item for ${a} and sold it for ${a + b}. Find the profit.`,
        answer: b
      };
    }
  
    if (type === 2) {
      return {
        question: `A shopkeeper bought an item for ${a} and sold it for ${a - b}. Find the loss.`,
        answer: b
      };
    }
  
    if (type === 3) {
      return {
        question: `A shopkeeper bought an item for ${a} and sold it for ${a + b}. Find the profit percent.`,
        answer: (b / a) * 100
      };
    }
  
  }
  function makeQuestion9(type) {
    let a = Math.floor(Math.random() * 20) + 5;
    let b = Math.floor(Math.random() * 10) + 2;
  
    if (type === 1) {
      return {
        question: `Find the simple interest on ${a * 100} at ${b}% per annum for 2 years.`,
        answer: (a * 100 * b * 2) / 100
      };
    }
  
    if (type === 2) {
      return {
        question: `Find the simple interest on ${a * 100} at 5% per annum for ${b} years.`,
        answer: (a * 100 * 5 * b) / 100
      };
    }
  
    if (type === 3) {
      return {
        question: `The simple interest on ${a * 100} for 1 year at ${b}% is ?`,
        answer: (a * 100 * b * 1) / 100
      };
    }
  
  }
  function makeQuestion10(type) {
    let a = Math.floor(Math.random() * 10) + 2;
    let b = Math.floor(Math.random() * 10) + 2;
  
    if (type === 1) {
      return {
        question: `The ratio of boys to girls is ${a}:${b}. If boys are ${a * 5}, how many girls are there?`,
        answer: b * 5
      };
    }
  
    if (type === 2) {
      return {
        question: `The ratio of apples to oranges is ${a}:${b}. If apples are ${a * 3}, how many oranges are there?`,
        answer: b * 3
      };
    }
  
    if (type === 3) {
      return {
        question: `The ratio of two numbers is ${a}:${b}. If the first number is ${a * 4}, find the second number.`,
        answer: b * 4
      };
    }
  
  }
  function makeQuestion11(type) {
    let a = Math.floor(Math.random() * 15) + 5;
    let b = Math.floor(Math.random() * 10) + 2;
  
    if (type === 1) {
      return {
        question: `What is the square of ${a}?`,
        answer: a * a
      };
    }
  
    if (type === 2) {
      return {
        question: `What is the cube of ${b}?`,
        answer: b * b * b
      };
    }
  
    if (type === 3) {
      return {
        question: `What is the square of ${a + b}?`,
        answer: (a + b) * (a + b)
      };
    }
  
  }
  function makeQuestion12(type) {
    let a = (Math.floor(Math.random() * 10) + 1) * 20;
    let b = Math.floor(Math.random() * 5) + 2;
  
    if (type === 1) {
      return {
        question: `What is 1/${b} of ${a}?`,
        answer: a / b
      };
    }
  
    if (type === 2) {
      return {
        question: `What is 3/4 of ${a}?`,
        answer: (3 * a) / 4
      };
    }
  
    if (type === 3) {
      return {
        question: `What is 2/5 of ${a}?`,
        answer: (2 * a) / 5
      };
    }
  
  }
  