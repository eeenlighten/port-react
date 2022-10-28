const scriptText4 = [
    {
        id: 1,
        clas: "box1 box1__3",
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
        codeView: "타이핑 게임을 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__4",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "단어 불러오기",
        codeView: "random word api사이트에서 url을 호출시켜 무작위 단어를 갖고왔습니다. api를 호출하기 위해 axios 사용했고 html 상단에 링크를 걸었습니다. forEach() 반복문과 조건문으로 배열안에 있는 단어 중 길이가 긴 단어들은 제외 시켰습니다.",
        preCode: `    function getWords(){
            axios.get('https://random-word-api.herokuapp.com/word?number=100')
                .then(function (response) {
                response.data.forEach((word)=>{
        
                    if(word.length < 10){
                        words.push(word)
                    }
                })
                buttonChange('start')
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })    
        }`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "단어 일치 체크",
        codeView: "html에서 입력했던 단어와 input 태그의 값이 서로 일치하기 위해 비교연산자와 input 이벤트를 실행시켰습니다. 조건문을 사용해 단어가 일치했을때 점수 증가, 화면에 출력된 단어가 일치하였을 때 다음 단어가 무작위로 나올 수 있게 Math.random()과 소수점을 없애기 위해 Math.floor()를 사용했습니다.",
        preCode: `     function checkMatch(){
            if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
                wordInput.value = "";
                if (!isPlaying){
                    return;
                }
                score++;
                scoreDisplay.innerText = score;
                time = GAME_TIME;
                const randomIndex = Math.floor(Math.random() * words.length);
                wordDisplay.innerText = words[randomIndex];
            }
        }`
    },       
    {
        id: 11,
        clas: "box10",        
    },
    {
        id: 12,
        clas: "box11",        
    },    
    {
        id: 13,
        clas: "box12",                    
    },  
    {
        id: 14,
        clas: "box13"         
    },
    {
        id: 15,
        clas: "box14",        
    },
    {
        id: 16,
        clas: "box15",        
        desc: "code view",        
        codeView: "타이핑 게임 사이트 소스를 깃을 통해 볼 수 있습니다.",
        codeText : "view"       
    },
    {
        id: 17,
        clas: "box16", 
        desc: "site view",        
        codeView: "netlify에 올린 파일을 직접 볼 수 있습니다.",
        codeText : "view"                 
    },                      
]

export default scriptText4;