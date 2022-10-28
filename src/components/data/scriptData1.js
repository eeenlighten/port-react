const scriptText = [
    {
        id: 1,
        clas: "box1 box1__0",
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
        codeView: "퍼즐 게임을 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__1",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "이미지 조각 만들기",
        codeView: "이미지를 16등분을 하기 위해 우선 Array(), fill() 명령어를 통해 배열을 만들어 주었습니다. 그 다음 forEach() 반복문으로 16개의 li태그를 반복하여 만들어 주었습니다. 인덱스와 data-type의 위치가 맞는지를 비교하기 위해 setAttribute()를 사용하여 위치 또한 확인하였습니다.",
        preCode: `    function createImagesTiles(){
            const tempArray = [];
            Array(tileCount).fill().forEach((_, i) => {
                const li = document.createElement("li");
                li.setAttribute('data-index', i)
                li.setAttribute('draggable', 'true');
                li.classList.add('list{i}')
                tempArray.push(li)
            })
            return tempArray;
        }`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "DRAG EVENT",
        codeView: "drag를 깔끔하게 실행하기 위해 먼저 li에 setAttribute('draggable', 'true') 속성을 주었습니다. 'dragstart'에서 indexOf를 사용하기 위해 object를 [...]을 통해 강제로 배열로 만들어 주었습니다. 'dragover'에선 어떠한 element 위에 오버된 상태에서 놓으면 drop이 발생 하지 않아 'dragover' 이벤트가 발생하지 않도록 preventDefault() 메소드를 사용했습니다. 'drop'에선 조건문과 before(), after() 메소드로 인덱스를 이동 시켰을때 위치해 있던 인덱스도 자동으로 자신의 위치에 이동할 수 있게 만들었습니다.",
        preCode: `     container.addEventListener('dragstart', e => {
            if(!isPlaying) return;
            const obj = e.target;
            dragged.el = obj;
            dragged.class= obj.className;
            dragged.index = [...obj.parentNode.children].indexOf(obj)
        })
        container.addEventListener('dragover', e => {
            e.preventDefault();
        })
        container.addEventListener('drop', e => {
            if(!isPlaying) return;
           const obj = e.target;
           if(obj.className !== dragged.class){
            let originPlace;
            let isLast = false;
        
            if(dragged.el.nextSibling){
                originPlace = dragged.el.nextSibling
            } else {
                originPlace = dragged.el.previousSibling
                isLast = true;
            }    
            const droppedIndex = [...obj.parentNode.children].indexOf(obj);
                dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
                isLast ? originPlace.after(obj) : originPlace.before(obj)
           }
           checkStatus();
        })
        }`
    },
    {
        id: 11,
        clas: "box9 site__desc",    
        desc: "PUZZLE SHUFFLE",
        codeView: "16개 등분한 li 태그를 무작위 순으로 만들기 위해서 while문과 Math.random(), 소수점을 없애기 위해 Math.floor()로 감싸주어 배열 원소의 순서를 바꾸는 로직으로 순서가 뒤섞인 배열을 나타냈습니다.",
        preCode: `    function shuffle(array){
            let index = array.length -1;
            while(index > 0){
                const randomIndex = Math.floor(Math.random()*(index+1));
                [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
                index--;
            }
            return array;
        }
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
        codeView: "퍼즐 게임 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default scriptText;