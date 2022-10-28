const threeText = [
    {
        id: 1,
        clas: "box1 box1__0",
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
        codeView: "THREE.JS 사이트를 제작하였습니다. 클릭하시면 사용한 코드를 볼 수 있습니다.",
        codeText : "view"
    },
    {
        id: 6,
        clas: "box6",        
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
        desc: "THREE.JS",
        codeView: "three.js는 자바스크립트 기반 WebGL 엔진으로, 브라우저에서 바로 GPU로 구동되는 게임과 기타 그래픽으로 구동되는 앱을 실행할 수 있습니다. three.js 라이브러리는 브라우저에서 3D 장면을 그리기 위한 많은 기능과 API를 제공합니다.",
        preCode: `    import * as THREE from 'three';
        import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
        import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
        import * as CANNON from 'cannon-es';
        import { PreventDragClick } from './PreventDragClick';
        import { Domino } from './Domino';
        import { Raycaster } from 'three';`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "RENDERER",
        codeView: "Renderer는 Three.js의 핵심 객체로 Scene과 Camera 객체를 넘겨 받아 카메라의 절두체 안 3D안 씬의 일부를 평면(2차원) 이미지로 렌더링합니다.",
        preCode: `     // Renderer
        const canvas = document.querySelector('#three-canvas');
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      
        // Scene
        const scene = new THREE.Scene();
      
        // Camera
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.y = 1.5;
        camera.position.z = 4;
        scene.add(camera);`
    },      
    {
      id: 11,
      clas: "box9 site__desc",    
      desc: "ORBITCONTROLS",
      codeView: "Three.js에선 카메라를 조정하기 위한 다양한 controls을 제공해주는데 OrbitControls도 포함이며 아무스 이동시 화면을 회전시켜주는 기능이 있습니다.",
      preCode: `    // Controls
      const controls = new OrbitControls(camera, renderer.domElement);`
  },
  {
      id: 12,
      clas: "box9 site__desc",    
      desc: "CANNON",
      codeView: "3D 물리엔진 라이브러리입니다. 본 사이트에선 gravity 속성을 통해 중력을 설정하였습니다.",
      preCode: `     // Cannon(물리 엔진)
      const cannonWorld = new CANNON.World();
      cannonWorld.gravity.set(0, -10, 0);`
    },            
    {
        id: 13,
        clas: "box10",        
    },
    {
        id: 14,
        clas: "box11",        
    },    
    {
        id: 15,
        clas: "box12",                    
    },  
    {
        id: 16,
        clas: "box13"         
    },
    {
        id: 17,
        clas: "box14",        
    },
    {
        id: 18,
        clas: "box15",        
        desc: "code view",        
        codeView: "THREE.JS 사이트 소스를 깃을 통해 볼 수 있습니다.",
        codeText : "view"       
    },
    {
        id: 19,
        clas: "box16", 
        desc: "site view",        
        codeView: "netlify에 올린 파일을 직접 볼 수 있습니다.",
        codeText : "view"                 
    },                      
]

export default threeText;