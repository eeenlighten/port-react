const javascriptText = [
    {
        id: 1,
        clas: "box1 box1__2",
        desc: "three.js"
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
        codeView: "JAVASCRIPT 내용 정리 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",  
        desc: "programmers",
        codeView: "PROGRAMMERS 사이트의 자바스트립트 알고리즘 문제들을 정리하였습니다."      
    },
    {
        id: 7,
        clas: "box7 site__desc box7__three",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "데이터 저장하기",
        codeView: "자바스크립트 코드에서는 ‘변수'에 ‘값'을 할당하는 방식으로 데이터를 다루며, 변수와 값을 각각 메모리 영역에 저장합니다. 값에는 타입이 존재하고, 변수에는 타입이 존재하지 않습니다. 자바스크립트에서는 타입 강제를 하지 않기 때문에 변수는 어떠한 타입의 값이라도 가질 수 있습니다.",
        preCode: `     {
            var/let/const x = 100;            
            var/let/const y = 200;            
            var/let/const z = "javascript";  
        
            document.write(x);
            document.write(y);
            document.write(z);
        }        `
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "데이터 불러오기",
        codeView: "'객체'는 0개 이상의 요소로 구성 됐으며, 요소는 키(key)와 값(value)으로 구성됩니다. '배열'은 순서가 있는 값을 의미하며 배열에 들어있는 값을 요소(element)라고 합니다. 배열의 순서는 인덱스(index)라고 부르고 0부터 시작합니다.",
        preCode: `     {
            const arr = [100, 200, ["javascript", "jquery"]];   // 배열
        
            document.write(arr[0]);
            document.write(arr[1]);
            document.write(arr[2]);
            document.write(arr[2][0]);
            document.write(arr[2][1]);
        }
    
        {
            const obj = {   // 객체
                a: 100,
                b: 200,
                c: "javascript"
            };
        
            document.write(obj.a);
            document.write(obj.b);
            document.write(obj.c);
            document.write(obj['a'])
            document.write(obj['b'])
            document.write(obj['c'])
        }`
    },     
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "데이터 실행하기",
        codeView: "함수는 어떠한 목적을 가진 작업들을 수행하는 코드들이 모인 블럭으로 지시사항들의 묶음입니다. 함수의 특징으로 function 키워드로 시작하고 정의/생성할 수 있으며, 출력할 수도 있습니다.",
        preCode: `      {
            function func(){
                document.write("함수가 실행되었습니다.1 ");
            }
            func();
        }`
    },  
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "데이터 제어하기",
        codeView: "조건문은 특정 조건 만족 시(참인 경우) 실행하는 명령의 집합 이며, 어떤 작업을 수행하고 싶을 때 사용합니다. 반복문은 어떤 것을 반복적으로 시행할 때 사용하는 것으로 빠르고 간편하게 사용할 수 있습니다.",
        preCode: `     {
            if(true){   // 조건문
                document.write("살행되었습니다.(true)"); 
             } else {
                 document.write("실행되었습니다.(false)")
             }
        }
    
        {
            for(let i=1; i<=5; i++){ // 반복문
                document.write(i + ". 실행되었습니다.");
            }
        }    `
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
        codeView: "JAVASCRIPT 내용 정리 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default javascriptText;