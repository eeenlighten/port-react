const scriptText2 = [
    {
        id: 1,
        clas: "box1 box1__1",
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
        codeView: "테트리스를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__2",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "객체와 배열을 이용한 블럭 만들기",
        codeView: "테트리스 게임에선 방향키를 눌렀을때 블럭이 회전 하면서 모양이 변하게 됩니다. 그렇기 때문에 바뀐 형태의 모양을 갖을 수 있도록 객체와 배열을 만들고 그 배열안에 좌표값을 넣어주었습니다.",
        preCode: `    const BLOCKS = {
            squre: [
                [[0,0],[0,1],[1,0],[1,1]],
                [[0,0],[0,1],[1,0],[1,1]],
                [[0,0],[0,1],[1,0],[1,1]],
                [[0,0],[0,1],[1,0],[1,1]],
            ],`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "SOME",
        codeView: "forEach() 반복문은 중간에 멈추고 싶을때 break를 할 수 없어 some을 사용해서 원하는 시점에 반복문을 중단시키고 다시 실행시켜 주었습니다. 그래서 블럭이 회전할 수 없는 상황이 오게 된다면 break가 걸려 블럭의 다른 일부분도 회전을 시켜주지 않아도 돼는 효과를 얻었습니다.",
        preCode: `     BLOCKS[type][direction].some(block => {
            const x = block[0] + left;
            const y = block[1] + top;
            const target = playground.childNodes[y] ? playground.childNodes[y].childNodes[0].childNodes[x] : null;
            const isAvailable = checkEmpty(target);`
    },
    {
        id: 11,
        clas: "box9 site__desc",    
        desc: "KEYDOWN EVENT",
        codeView: "key를 눌렀을 때 나타나는 이벤트 객체의 keycode를 사용해서 각각의 키에 따른 함수를 실행시켰습니다. switch문을 통해 case에 고유의 키코드값을 넣고 방향에 따라 움직일 블럭에 숫자를 더해 원하는 위치에 이동할 수 있도록 했습니다.",
        preCode: `    document.addEventListener("keydown", e=>{
            switch(e.keyCode){
                case 39:
                    moveBlock("left", 1);
                    break;
                case 37:
                    moveBlock("left", -1);
                    break;`
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
        codeView: "테트리스 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default scriptText2;