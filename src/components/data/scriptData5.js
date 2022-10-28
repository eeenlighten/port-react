const scriptText5 = [
    {
        id: 1,
        clas: "box1 box1__4",
        desc: "javascript"
    },
    {
        id: 2,
        clas: "box2",        
    },
    {
        id: 3,
        clas: "box3",        
    },        
    {
        id: 4,
        clas: "box4",        
        desc: "home",
    },   
    {
        id: 5,
        clas: "box5",   
        desc: "site coding",        
        codeView: "스피드 타이핑 게임을 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__5",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "문단 불러오기",
        codeView: "게임에 사용할 문단들을 무작위로 갖고올 수 있도록 먼저 변수를 만들었습니다. 배열안에 있는 여러 문단들을 forEach() 반복문과 innerHTML 속성을 이용하여 문단을 불러와주었습니다.",
        preCode: `    function randomParagraph() {
    
            let randInex = Math.floor(Math.random() * paragraphs.length);
            typingText.innerHTML = "";
            
            paragraphs[randInex].split("").forEach(span => {
                let spanTag = ''$'{span}';
                typingText.innerHTML += spanTag;
            });
            typingText.querySelectorAll("span")[0].classList.add("active")
          
            document.addEventListener("keydown", () => inpFeild.focus());
            typingText.addEventListener("click", () => inpFeild.focus());
        }  `
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "TYPING",
        codeView: "setInterval로 타이핑 했을 시 시간이 1초씩 줄어들 수 있도록 만들었습니다. classList.add와 remove로 정타, 오타가 났을때 css에서 표현한 내용을 불러 들일 수 있게 해놓았습니다. 설정해둔 변수와 조건문을 통해 오타가 났을 때 오타 갯수와 타자 속도도 표현해 주었습니다.",
        preCode: `     function initTyping() {
            const characters = typingText.querySelectorAll("span");
            let typedChar = inpFeild.value.split("")[charIndex];
            if(charIndex < characters.length -1 && timeLeft > 0) {
                if(!isTyping) {
                    timer = setInterval(initTimer, 1000);    
                    isTyping = true;
                }
            
                if(typedChar == null) {
                    charIndex--;
                    if(characters[charIndex].classList.contains("incorrect")){
                        mistakes--;
                    }
                    characters[charIndex].classList.remove("correct", "incorrect")
                } else {
                    if(characters[charIndex].innerText === typedChar){
                        characters[charIndex].classList.add("correct");
                    } else {
                        mistakes++;
                        characters[charIndex].classList.add("incorrect");
                    }
                    charIndex++;
                }
                characters.forEach(span => span.classList.remove("active"));
                characters[charIndex].classList.add("active");
            
                let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                mistakeTag.innerText = mistakes;
                wpmTag.innerText = wpm;
                cpmTag.innerText = charIndex - mistakes;
            } else {
                inpFeild.value = "";
                clearInterval(timer);
            }
        }`
    },
    {
        id: 11,
        clas: "box9 site__desc",    
        desc: "TIMER&RESET",
        codeView: "상위에 만들었던 문단 불러오기 함수를 호출하고 clearInterval() 안에 변수를 넣어 버튼을 눌렀을때 초기화 될 수 있도록 만들었습니다. 조건문을 통해 남은시간이 0보다 크다면 시간이 점점 줄어들어 게임이 종료되도록 하였습니다.",
        preCode: `    function resetGame() {
            randomParagraph();
            inpFeild.value = "";
            clearInterval(timer);
            timeLeft = maxTime,
            charIndex = mistakes = isTyping = 0;
            timeTag.innerText = timeLeft;
            mistakeTag.innerText = 0;
            wpmTag.innerText = 0;
            cpmTag.innerText = 0;
        }`
    },        
    {
        id: 12,
        clas: "box10",        
    },
    {
        id: 13,
        clas: "box11",        
    },    
    {
        id: 14,
        clas: "box12",                    
    },  
    {
        id: 15,
        clas: "box13"         
    },
    {
        id: 16,
        clas: "box14",        
    },
    {
        id: 17,
        clas: "box15",        
        desc: "code view",        
        codeView: "스피드 타이핑 게임 사이트 소스를 깃을 통해 볼 수 있습니다.",
        codeText : "view"       
    },
    {
        id: 18,
        clas: "box16", 
        desc: "site view",        
        codeView: "netlify에 올린 파일을 직접 볼 수 있습니다.",
        codeText : "view"                 
    },                      
]

export default scriptText5;