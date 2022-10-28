const reactText3 = [
    {
        id: 1,
        clas: "box1 box1__3",
        desc: "react.js"
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
        codeView: "리액트 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__rea4",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "ROUTER",
        codeView: "Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리 입니다. SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지는 로딩된 자바스크립트와 현재 사용자 브라우저의 주소에 따라 다양한 화면을 보여 줄 수 있습니다. 이 때 다른 주소에 다른 화면을 보여주는 것을 라우팅이라고 합니다.",
        preCode: `    function App() {
            return (
              <>
                <Router>
                  <Navbar />
                  <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Sign-up' element={<SignUp />} />
                  </Routes>
                </Router>
              </>
            );
          }`
    },
    {
        id: 10,
        clas: "box10",        
    },
    {
        id: 11,
        clas: "box11",        
    },    
    {
        id: 12,
        clas: "box12",                    
    },  
    {
        id: 13,
        clas: "box13"         
    },
    {
        id: 14,
        clas: "box14",        
    },
    {
        id: 15,
        clas: "box15",        
        desc: "code view",        
        codeView: "리액트 사이트 소스를 깃을 통해 볼 수 있습니다.",
        codeText : "view"       
    },
    {
        id: 16,
        clas: "box16", 
        desc: "site view",        
        codeView: "netlify에 올린 파일을 직접 볼 수 있습니다.",
        codeText : "view"                 
    },                      
]

export default reactText3;