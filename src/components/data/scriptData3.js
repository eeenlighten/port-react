const scriptText3 = [
    {
        id: 1,
        clas: "box1 box1__2",
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
        codeView: "카드 게임을 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__3",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "CARD FLIP",
        codeView: "if 조건문과 비교연산자를 통해 카드가 서로 맞지 않을 경우 카드가 다시 뒤집어지고 카드가 서로 맞을 경우 카드 뒤집기를 멈추도록 식을 짰습니다.",
        preCode: `    function flipCard(e) {
            if(!isPlaying) {
                isPlaying = true;
                timer = setInterval(initTimer, 1000);
            }
            let clickedCard = e.target;
            if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
                flips++;
                flipsTag.innerText = flips;
                clickedCard.classList.add("flip");
                if(!cardOne) {
                    return cardOne = clickedCard;
                }
                cardTwo = clickedCard;
                disableDeck = true;
                let cardOneImg = cardOne.querySelector(".back-view img").src,
                cardTwoImg = cardTwo.querySelector(".back-view img").src;
                matchCards(cardOneImg, cardTwoImg);
            }
        }`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "CARD MATCH",
        codeView: "if문과 비교연산자로 카드가 모두 일치하고 시간이 남는 다면 clearInterval()로 타이머를 즉시 종료 시켰고 removeEventListener 두 카드가 일치 하지 않을때 기존에 사용됐던 addEventListener를 제거하고 카드를 뒷면으로 뒤집어 주었습니다.",
        preCode: `     function matchCards(img1, img2) {
            if(img1 === img2) {
                matchedCard++;
                if(matchedCard == 6 && timeLeft > 0) {
                    return clearInterval(timer);
                }
                cardOne.removeEventListener("click", flipCard);
                cardTwo.removeEventListener("click", flipCard);
                cardOne = cardTwo = "";
                return disableDeck = false;
            }
        
            setTimeout(() => {
                cardOne.classList.add("shake");
                cardTwo.classList.add("shake");
            }, 400);
        
            setTimeout(() => {
                cardOne.classList.remove("shake", "flip");
                cardTwo.classList.remove("shake", "flip");
                cardOne = cardTwo = "";
                disableDeck = false;
            }, 1200);
        }`
    },
    {
        id: 11,
        clas: "box9 site__desc",    
        desc: "CARD SHUFFLE",
        codeView: "카드 숫자만큼 배열을 만들고 삼항연산자 식으로 Math.random()과 sort() 함수로 카드가 무작위로 섞일수 있도록 만들었습니다. 모든 카드에 클래스를 지우고 이미지를 반복해서 불러올 수 있게 forEach()문도 사용했습니다.",
        preCode: `    function shuffleCard() {
            timeLeft = maxTime;
            flips = matchedCard = 0;
            cardOne = cardTwo = "";
            clearInterval(timer);
            timeTag.innerText = timeLeft;
            flipsTag.innerText = flips;
            disableDeck = isPlaying = false;
        
            let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
            arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        
            cards.forEach((card, index) => {
                card.classList.remove("flip");
                let imgTag = card.querySelector(".back-view img");
                setTimeout(() => {
                    imgTag.src = './assets/images/img-'$'{arr[index]}.png';
                }, 500);
                card.addEventListener("click", flipCard);
            });
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
        codeView: "카드 게임 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default scriptText3;