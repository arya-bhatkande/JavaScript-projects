const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2 // Index of the correct option
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Jane Austen"],
      correct: 0
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2
    },
    {
      question: "Which year did World War II end?",
      options: ["1941", "1945", "1939", "1950"],
      correct: 1
    }
  ];

  let currentQuestionIndex=0;
  let score=0;

  const questionEl=document.getElementById("question")
  const optionEl=document.getElementById("options")
  const nextBtn=document.getElementById("next-btn")


  loadQuestion();


  function loadQuestion(){
    optionEl.innerHTML="";

    const currentQuestion=questions[currentQuestionIndex];
    questionEl.textContent=currentQuestion.question;

    currentQuestion.options.forEach((option,index)=>{
        const optionBtn=document.createElement("button")
        optionBtn.textContent=option;
        optionBtn.classList.add("option")
        optionBtn.onclick=()=>selectOption(index);
        optionEl.appendChild(optionBtn)  
    })
  }

  function selectOption(selectedIndex){
    const currentQuestion=questions[currentQuestionIndex]

    if(selectedIndex===currentQuestion.correct){
        score++;
    }

    Array.from(optionEl.children).forEach((button)=>{
        button.disabled=true;
        if(button.textContent===currentQuestion.options[currentQuestion.correct]){
            button.style.backgroundColor="green"
    }else if(button.textContent===currentQuestion.options[selectedIndex]){
        button.style.backgroundColor="red"
    }
        
    })
  }

  nextBtn.addEventListener("click",()=>{
    currentQuestionIndex++;

    if(currentQuestionIndex<questions.length){
        loadQuestion()
    }else{
        showscore()
    }
  })

  function showscore(){
    questionEl.textContent=`Quiz Over ! Your Score is ${score}/${questions.length}.`;   
    optionEl.innerHTML="";
    nextBtn.textContent="Restart";
    nextBtn.onclick=RestartQuiz;
  }

  function RestartQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.textContent="Next";
    nextBtn.onclick=()=>{
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            loadQuestion()
        }else{
            showscore()
        }
    }
    loadQuestion();
  }