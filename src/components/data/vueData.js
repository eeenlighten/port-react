const vueText = [
    {
        id: 1,
        clas: "box1 box1__4",
        desc: "vue.js"
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
        codeView: "뷰 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7 site__desc box7__vue",        
    },
    {
        id: 8,
        clas: "box8",        
    },        
    {
        id: 9,
        clas: "box9 site__desc",    
        desc: "DESCRIPTION",
        codeView: "vue 설치부터 기본 작동 원리, 문법 등을 배웠습니다. vue 설치 시 생성되는 파일마다 기본 개념들을 숙지했으며 기본 흐름을 이해했습니다. 본 사이트는 html 섹션별로 컴포넌트를 구성하여 정상적으로 브라우저에 출력하였습니다.",
        preCode: `    <template>
        <HeaderSection fonts="gmarket" />
        <SliderSection />
        <TextSection fonts="gmarket" />
        <CardSection fonts="gmarket" />
        <ImgSection fonts="gmarket" />
        <BannerSection fonts="gmarket" />
        <ReviewSection fonts="gmarket" />
        <FooterSection fonts="gmarket" />
    </template>`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "V-BIND",
        codeView: "HTML 태그 속성처럼, 한 컴포넌트의 요소에 v-bind value를 지정하면 다른 컴포넌트에서 그 value에 값을 넣어 사용 할 수 있습니다. 즉, v-bind란 컴포넌트끼리 값을 전달하는 수단입니다. 본 사이트에서는 value값을 지정해주어 클래스에 넣어 사용하였습니다.",
        preCode: `     <template>
        <section id="reviewType" v-bind:class="fonts">
            <h2>수업 후기</h2>
            <p>수강생들의 솔직한 후기를 보실 수 있습니다.</p>`
    },
    {
        id: 11,
        clas: "box9 site__desc",    
        desc: "SCOPED",
        codeView: "Vue를 사용하는 프로젝트는 다수의 컴포넌트를 사용하여 하나의 앱을 구현합니다. 각각의 컴포넌트에 선언된 스타일이 의도하지 않거나 실수 등에 의해 다른 컴포넌트에 영향을 줄 수 있게 됩니다. 그렇기 때문에 오직 특정 컴포넌트에 고유의 스타일을 선언하기 위한 방법으로 vue-loader가 제공합니다.",
        preCode: `    <style scoped>
        #headerType {
            height: 200px;
            background-color: #fff;
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
        codeView: "뷰 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default vueText;