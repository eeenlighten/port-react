const reactText = [
    {
        id: 1,
        clas: "box1 box1__0",
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
        clas: "box7 site__desc box7__rea1",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "DESCRIPTION",
        codeView: "React 설치부터 기본 작동 원리, 문법 등을 배웠습니다. React 설치 시 생성되는 파일마다 기본 개념들을 숙지했으며 기본 흐름을 이해했습니다. 본 사이트는 클래스형 컴포넌트로 제작됐습니다.각 섹션마다 있는 배열 데이터를 json 파일로 만들고 axios를 사용해 데이터를 갖고왔습니다. 각 섹션 js 파일도 마찬가지로 데이터를 불러와 반복하는 데이터들은 map()함수를 통해 코드를 작성하였습니다.",
        preCode: `    import React from 'react'
        import Slider from "./components/pages/Slider";
        import Text from "./components/pages/Text";
        import Card from "./components/pages/Card";
        import Img from "./components/pages/Img";
        import Banner from "./components/pages/Banner";
        import Review from "./components/pages/Review";
        
        function App() {
          return (
            <>
               <Slider />
               <Text />
               <Card />
               <Img />
               <Banner />
               <Review />
            </>
          )
        }
        
        export default App;`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "함수형/클래스형",
        codeView: "함수형 컴포넌트는 함수를 기반으로 작성 된 것으로 클래스형 컴포넌트에 비해 짧고 직관적으로 코드를 짤 수 있고 현재 대부분이 함수형 컴포넌트를 사용중입니다. 클래스형 컴포넌트는 함수형 컴포넌트와 Hook이 등장하기 이전에 사용하던 컴포넌트이고 함수형 컴포넌트의 역할과 동일합니다. 차이점은 표현방법이 더 명시적이고 state기능과 생명주기 기능을 이용할 수 있습니다.",
        preCode: `     class Review extends React.Component {
            state = {
              reviewtxt: [0],
              footertxt: [],
              footertxt2: [0],    
            };
          
            getReview = async () => {
              const {
                data: {
                  data: { reviewtxt },
                },
              } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/review.json")
              this.setState({ reviewtxt })
            };
          
            getFooter = async () => {
              const {
                data: {
                  data: {footertxt}, data: {footertxt2}
                }, 
              } = await axios.get("https://raw.githubusercontent.com/eeenlighten/-react2data/main/footer.json");
              this.setState({ footertxt })
              this.setState({ footertxt2 })
            };
          
            componentDidMount(){
              this.getFooter();
              this.getReview();
            }
    
            render(){
                const { reviewtxt } = this.state;   
                const { footertxt } = this.state;   
                const { footertxt2 } = this.state;   
              return (
                <>
                  <Contents>
                    <ReviewCont reviewtxt={reviewtxt} />
                  </Contents>
                  <Footer footertxt={footertxt} footertxt2={footertxt2}/>
                </>
              )
            }
            }
            
            export default Review;`
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
        codeView: "퍼즐 게임 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default reactText;