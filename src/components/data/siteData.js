const siteText = [
    {
        id: 1,
        clas: "box1 box1__site",
        desc: "webstandard"
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
        clas: "box5 box5__site",        
    },
    {
        id: 6,
        clas: "box6",        
    },
    {
        id: 7,
        clas: "box7",        
        desc: "site coding",
        codeView: "웹 표준 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
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
        desc: "웹표준 지첨서 준수",
        codeView: "W3C가 권고한 표준안에 따라 웹 표준 사이트를 제작했습니다. 구조적 마크업과 표현, 레이아웃 및 사용자 행위 제어를 분리하여 구축했으며 웹접근성을 위해 몸이 불편한 사람도 정보를 이용하는데 불편함이 없도록 ir효과를 주었습니다.",
        preCode :
            `        /* IR 효과 */
        .ir_pm {display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;}
        .ir_wa {display: block; overflow: hidden; position: relative; z-index: -1; width: 100%; height: 100%;}
        .ir_su {overflow: hidden; position: absolute; width: 0; height: 0; text-indent: -9999px;}`,              
    },
    {
        id: 13,
        clas: "box12 site__desc",        
        desc: "제이쿼리 플러그인",
        codeView: "slick과 lightgallery는 제이쿼리 기반의 플러그인입니다. 각 홈페이지에 기재된 사용법과 옵션들을 참고하여 사이트 환경에 맞게 수정을 하였습니다. slick을 사용해 배너 부분에 슬라이드를 구현하였고 lightgallery을 사용해 이미지 갤러리 팝업을 만들었습니다.",
        preCode :
            `           // 라이트갤러리 박스
            $(".lightgallery").lightGallery({
                thumbnail: true,
                autoplay: true,
                pause: 3000,
                progressBar: true
            });
        
            // 배너 슬라이드
            $(".ban").slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true
            });`,              
    },
    {
        id: 14,
        clas: "box12 site__desc",        
        desc: "W3C VALIDATION SERVICE",
        codeView: "HTML과 CSS는 각각 W3C validation service를 통과하여 맨 하단에 마크업 되어있습니다.",
        preCode :
            `        <div class="w3c">
            <a href="http://validator.w3.org/check?uri=referer">
                <img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" height="31" width="88" />
            </a>                        
            <a href="http://jigsaw.w3.org/css-validator/check/referer">
                <img style="border:0;width:88px;height:31px" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="올바른 CSS입니다!" />
            </a>                        
        </div>`,              
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

export default siteText;