const threeText = [
    {
        id: 1,
        clas: "box1 box1__1",
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
        desc: "CAMERA",
        codeView: "PerspectiveCamera는 사람이 직접 보는 듯한 느낌을 주는 카메라이며 원근법이 적용됩니다. OrthographicCamera는 거리에 상관없이 물체가 다 똑같이 보이는 카메라입니다.",
        preCode: `     createPerspectiveCamera(){
            this.perspectiveCamera = new THREE.PerspectiveCamera(
                35, 
                this.sizes.aspect, 
                0.1,
                1000
                );
                this.scene.add(this.perspectiveCamera)
                this.perspectiveCamera.position.z = 5;
        }
    
        createOrthographicCamera(){
            this.frustrum = 5;
            this.orthographicCamera = new THREE.OrthographicCamera(
                    (-this.sizes.aspect * this.sizes.frustrum)/2,
                    (this.sizes.aspect * this.sizes.frustrum)/2,
                    this.sizes.frustrum/2,
                    -this.sizes.frustrum/2,
                    -100,
                    100
                );
                this.scene.add(this.orthographicCamera)
    
                const size = 10;
                const divisions = 10;
    
                const gridHelper = new THREE.GridHelper(size, divisions);
                this.scene.add(gridHelper);
    
                const axesHelper = new THREE.AxesHelper(10);
                this.scene.add(axesHelper)
        }`
    },
    {
        id: 10,
        clas: "box9 site__desc",    
        desc: "GLTF-DRACO",
        codeView: "glTF와 기본형식과 비슷하지만 buffer date(일반적으로 geometry)는 Draco 알고리즘을 통해 압축되며 가볍습니다.",
        preCode: `     setLoaders(){
            this.loaders = {};
            this.loaders.gltfLoader = new GLTFLoader();
            this.loaders.dracoLoader = new DRACOLoader();
            this.loaders.dracoLoader.setDecoderPath("/draco/");
            this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
        }`
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
        codeView: "THREE.JS 사이트 소스를 깃을 통해 볼 수 있습니다.",
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

export default threeText;