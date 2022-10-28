const reactText = [
    {
        id: 1,
        clas: "box1 box1__1",
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
        codeView: "TO DO LIST 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__rea2",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "PROPS",
        codeView: "props(속성)란 HTML 태그 속성처럼, 한 컴포넌트의 요소에 props value를 지정하면 다른 컴포넌트에서 그 value에 값을 넣어 사용 할 수 있습니다. 즉, props란 컴포넌트끼리 값을 전달하는 수단이고 부모 컴포넌트에서만 설정 가능하며 자식 컴포넌트로 값을 전달합니다.",
        preCode: `    return (
          <div className="App">
            <header>
                <h1>To do List</h1>
            </header>
            <Form
              inputText={inputText} 
              todos={todos} 
              setTodos={setTodos} 
              setInputText={setInputText}
              setStatus={setStatus}
              />
            <TodoList 
            filteredTodos={filteredTodos}
            setTodos={setTodos} 
            todos={todos} />
          </div>
        );
      }`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "USESTATE, USEEFFECT",
        codeView: "useState는 함수형 컴포넌트에서 상탯값을 관리하게 해줍니다. useEffect는 어떤 Effect를 발생시키고 싶을 때 사용합니다. effect는 명령형함수 또는 타이머, 로깅, 변형, sideEffect등 을 발생시키는 함수등을 말합니다.",
        preCode: `     function App() {
          // State stuff
          const [inputText, setInputText] = useState("");
          const [todos, setTodos] = useState([]);
          const [status, setStatus] = useState("all");
          const [filteredTodos, setFilteredTodos] = useState([]);
        
          // RUN ONCE when the app start
          useEffect(() => {
            getLocalTodos()
          }, []);
        
          // useEffect
          useEffect(() => {
            filterHandler();
          }, [todos, status]);
        
          // Function
          const filterHandler = () => {
            switch(status){
              case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true))
                break;
              case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false))
                break;
              default:
                setFilteredTodos(todos);
                break;
            }
          };`
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
        codeView: "TO DO LIST 사이트 소스를 깃을 통해 볼 수 있습니다.",
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