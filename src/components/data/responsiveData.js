const responsiveText = [
    {
        id: 1,
        clas: "box1 box1__res",
        desc: "responsive"
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
        clas: "box5 box5__res",        
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7",        
        desc: "site coding",
        codeView: "반응형 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9",        
    },
    {
        id: 10,
        clas: "box10",        
    },
    {
        id: 11,
        clas: "box11",        
        desc: "code view",
        codeView: "웹 표준 사이트 소스를 github을 통해 볼 수 있습니다.",
        codeText : "view"
    },    
    {
        id: 12,
        clas: "box12 site__desc",        
        desc: "미디어 쿼리",
        codeView: "다양한 디바이스들이 웹브라우징을 지원하면서 웹에서 화면의 해상도에 따라 유연하게 컨텐츠를 배치하는 기술이 점점 중요해지고 있습니다. 그에 따라 반응형 사이트의 핵심인 미디어 쿼리를 배웠습니다. 본 사이트는 총 6개로 스크린 크기를 나누었고 다양한 크기의 스크린을 보실 수 있습니다.",
        preCode :
            `         /* mediaquery */
            /* 화면 너비 0~1220px */
            @media (max-width: 1220px){
                .container {width: 100%;}
                .row {padding: 0 15px;}
                #cont_center {min-height: 1350px;}
                #contents .container {border: 0;}
        
                .title .btn {right: 15px;}
                .square a {width: 24%}
                .square a:nth-child(5n) {display: none;}
            }`,              
    },
    {
        id: 13,
        clas: "box12 site__desc",        
        desc: "EFFECT",
        codeView: "사이드 영역들에 css의 transform 속성을 이용하여 마우스 오버 효과를 주었습니다.",
        preCode :
            `           /* 사이드 이펙트1 */
            .side1 {position: relative; display: block; perspective: 600px;}
            .side1 .front {
            transform-style: preserve-3d;
            transform: rotateY(0deg);
            transition: all 0.5s ease-in-out;
            backface-visibility: hidden;
            }`,              
    },
    {
        id: 14,
        clas: "box12 site__desc",        
        desc: "FILTER 이펙트",
        codeView: "backdrop-filter 속성은 배경에 그래픽 효과를 설정합니다. 중간 이미지들을 마우스 오버 하시면 다양한 효과의 filter를 보실 수 있습니다.",
        preCode :
            `        .square a:nth-child(1):hover img {filter: blur(2px);}
            .square a:nth-child(2):hover img {filter: brightness(50%);}
            .square a:nth-child(3):hover img {filter: contrast(10%);}
            .square a:nth-child(4):hover img {filter: grayscale(100%);}
            .square a:nth-child(5):hover img {filter: hue-rotate(120deg);}
            .square a:nth-child(6):hover img {filter: invert(100%);}
            .square a:nth-child(7):hover img {filter: opacity(10%);}
            .square a:nth-child(8):hover img {filter: saturate(10%);}
            .square a:nth-child(9):hover img {filter: sepia(120%);}
            .square a:nth-child(10):hover img {filter: sepia(120%) hue-rotate(120deg);}`,              
    },        
    {
        id: 15,
        clas: "box13",        
    },
    {
        id: 16,
        clas: "box14",        
    },
    {
        id: 17,
        clas: "box15",        
        desc: "site view",
        codeView: "netlify에 올린 파일을 직접 볼 수 있습니다.",
        codeText : "view"        
    },
    {
        id: 18,
        clas: "box16",        
    },                      
]

export default responsiveText;