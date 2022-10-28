const reactText3 = [
    {
        id: 1,
        clas: "box1 box1__2",
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
        clas: "box7 site__desc box7__rea3",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "SPA, ROUTER",
        codeView: "SPA란 한 개의 페이지로 이루어진 애플리케이션이라는 의미이며 새로고침 없이 변경사항에 대해 서버에 요청을 보내고 변경된 부분의 데이터만을 서버로부터 전달 받아 클라이언트가 렌더링합니다. Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리 입니다. SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지는 로딩된 자바스크립트와 현재 사용자 브라우저의 주소에 따라 다양한 화면을 보여 줄 수 있습니다. 이 때 다른 주소에 다른 화면을 보여주는 것을 라우팅이라고 합니다.",
        preCode: `    function App() {
          return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/youtube" element={<Youtube />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/reference" element={<Reference />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </BrowserRouter>
          );
        } `
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "생명주기 함수",
        codeView: "컴포넌트는 생성부터 소멸까지의 과정을 컴포넌트의 생명주기(LifeCycle)라고 합니다. 컴포넌트는 생명주기마다 함수를 가지고 있고 이 함수들을 이용하면 특정 시점에 원하는 동작을 하도록 만들 수 있습니다. 생명주기 함수는 총 8종의 함수가 있습니다.",
        preCode: `     componentDidMount() {
          setTimeout(() => {
            this.getRefers();
          }, 1500);
        } // 본 사이트의 생명주기 함수
  
        // 1. constructor(props) 함수, 2. render() 함수, 3. static getDerivedStateFromProps(props, state) 함수, 4. componentDIdMount() 함수, 5. shouldComponentUpdate(nextProps, nextState) 함수, 6. getSnapshotBeforeUpdate(prevProps, prevState) 함수, 7. componentDidUpdate(prevProps, prevState, snapshot) 함수, 8. componentWillUnmount() 함수`
    },       
    {
      id: 11,
      clas: "box9 site__desc",    
      desc: "FETCH()",
      codeView: "fetch()는 Request나 Response와 같은 HTTP 파이프라인을 구성하는 요소를 조작할 수 있게 해주는 API 입니다. 쉽게 말해 API 호출하는 역할이며 본 사이트에서는 youtube와 TMDB API를 연동시켰습니다.",
      preCode: `     fetch(
        'https://api.themoviedb.org/3/search/movie?api_key=92b532899fdd8e32db216a990dc266dd&query=$'{query}',
      requestOptions
      )   // TMBD
  
      fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=koreanenglishman&key=AIzaSyCREIKL7RLN5Pyl736t0BDtVL6f7bwD_-s",
      requestOptions
      )   // Youtube`
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
        codeView: "리액트 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default reactText3;