<script src="https://threejs.org/build/three.min.js"></script>
<script src="https://threejs.org/examples/js/loaders/GLTFLoader.js"></script>

<script src="https://raw.githubusercontent.com/mrdoob/three.js/master/src/loaders/ObjectLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/exporters/USDZExporter.js"></script>

<script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/controls/TrackballControls.js"></script>

<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/loaders/DRACOLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/loaders/OBJLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/loaders/STLLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/loaders/SVGLoader.js"></script>

<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/renderers/nodes/loaders/NodeMaterialLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/renderers/nodes/Nodes.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/renderers/nodes/core/NodeFrame.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/98985923afe4fe4030fce256b0cc0d02dc68696f/examples/jsm/renderers/nodes/loaders/NodeLoader.js"></script>

<script src="https://raw.githubusercontent.com/mrdoob/three.js/12ad8a3cdbc8fe826c44e9505b071b8248b3b912/src/renderers/WebGLRenderer.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/f66f975188a355041263ea2af3049a51dda39ae7/src/extras/PMREMGenerator.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/f37eacb6db143a917213425a2c58c411802e67f0/src/renderers/webgl/WebGLCubeUVMaps.js"></script>


<!-- hdr??-->
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/loaders/HDRCubeTextureLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/webgl_materials_envmaps_hdr.html"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/webgl_loader_texture_hdr.html"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/loaders/RGBELoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/loaders/RGBMLoader.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/environments/DebugEnvironment.js"></script>


<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/stats.module.js"></script>
<script src="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/jsm/libs/lil-gui.module.min.js"></script>

<!-- <script src="https://redcamel.github.io/RedGL2/release/RedGL.min.js"></script> --> 
<!-- <script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/loaders/DRACOLoader.js"></script> -->
<!-- <script src="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/webxr/VRButton.js"></script> -->
<!-- <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script> -->
<!-- <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>  -->

<script> 

let scene, camera, render
var mouseX = 0, mouseY = 0; 
//let container;
//let camera;
//let renderer;
//let scene;
//let house;
//let mixer;


init();
animate();

var windowHalfX = window.innerWidth / 2.5;
var windowHalfY = window.innerHeight / 2.5;

function init() {

const canvas = document.querySelector('#kniga');
//VRButton.createButton( renderer );
//document.body.appendChild( VRButton.createButton( renderer ) );            
//kniga.appendChild( VRButton.createButton( renderer ) );  

            //=========СЦЕНА=========//
            scene = new THREE.Scene();

            const fov = 35;
            const aspect = window.innerWidth / window.innerHeight;
            const near = 1;
            const far = 10000;
            //scene.background = new THREE.Color( 0xa0a0a0 ); //фон сцены
            //scene.fog = new THREE.Fog( 0xa0a0a0, 20, 15 ); ///туман
            
            //КАМЕРА
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            camera.position.set(0, 0, 50);
            scene.add(camera);
            
            //СВЕТ
            const ambient = new THREE.AmbientLight(0x404040, 8);
            scene.add(ambient);

            const light = new THREE.DirectionalLight(0xffffff, 5);
            light.position.set(50, 50, 100);
            scene.add(light);
           
            //-------Дополнителный свет поиграться----
            const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
            hemiLight.position.set( 0, 20, 0 );
            scene.add( hemiLight );
                 
            const dirLight = new THREE.DirectionalLight( 0xffffff );
            dirLight.position.set( - 3, 10, - 10 );
            dirLight.castShadow = true;
            dirLight.shadow.camera.top = 4;
            dirLight.shadow.camera.bottom = - 4;
            dirLight.shadow.camera.left = - 4;
            dirLight.shadow.camera.right = 4;
            dirLight.shadow.camera.near = 0.1;
            dirLight.shadow.camera.far = 40;
            scene.add( dirLight );

           //CUBE CAMERA
           //sphereGroup = new THREE.Group();
           //const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
           //format: THREE.RGBFormat,
           //generateMipmaps: true,
           //minFilter: THREE.LinearMipmapLinearFilter,
            //});
            //cubeCamera = new THREE.CubeCamera(1, 100, cubeRenderTarget);
            //sphereGroup.add(cubeCamera);



                          //=========РЕНДЕР=========//
renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
//renderer.shadowMap.enabled = true; /////туманная карта///
                                //=========HDRI RENDER=========//
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.3;
renderer.outputEncoding = THREE.sRGBEncoding;
var pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();
//===================================================================================================//
//renderer.xr.enabled = true; //(для VR говно)

//renderer.setClearColor(0x000000, 0);
//container.appendChild(renderer.domElement);
//document.getElementById('kniga2').append.Child(renderer.domElement);
                            //=========ORBIT CONTROLS=========//
const controls = new THREE.OrbitControls(camera, canvas);
controls.target = new THREE.Vector3(0, 0, 0);
//controls.target.set(0, 0, 0);
//controls.target.copy(bow.position);//не работает
//controls.enabled = true;
controls.enableKeys = true; //older versions
controls.listenToKeyEvents(document.body);
//controls.keys = {
//LEFT: "ArrowLeft", //left arrow
//UP: "ArrowUp", // up arrow
//RIGHT: "ArrowRight", // right arrow
//BOTTOM: "ArrowDown" // down arrow
//};

//controls.enablePan = true;
controls.panSpeed = 10;
controls.keyPanSpeed = 100;

controls.zoomSpeed = 5;
controls.minZoom = 5;
controls.minDistance = 2;
controls.maxDistance = 1000;
//controls.maxPolarAngle = Math.PI;
//controls.screenSpacePanning = true;
controls.enableDamping = true;


                            //=========СЛУШАТЕЛИ СОБЫТИЙ=========//
//document.addEventListener( 'mousemove', onDocumentMouseMove, false );
//document.addEventListener( 'touchstart', onDocumentTouchStart, false );
//document.addEventListener( 'touchmove', onDocumentTouchMove, false );
window.addEventListener( 'resize', onWindowResize, false );
//=======================ниже функции раскрывают слушатели===========================
        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        };
//--------------------------------------------ЗАГРУЗЧИКИ--------------------------------------------//

        //----------------------Вручную Храм-сфера mesh---------------------//  
        
            //var geometry = new THREE.SphereGeometry( 500, 60, 40 );
            //geometry.scale( - 0.25, 0.25, 0.25 );
            
            //var material = new THREE.MeshBasicMaterial( {
            //map: new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/svyatoslavbogatov/HDRI/main/hram.jpg' )
            //} );
            
            //mesh = new THREE.Mesh( geometry, material );
            //scene.add( mesh );
            
///--------------------------CubeTextureLoader-SCENE.BACKGROUND--(КУБ)--------------------///
     //const urls = [
    //'https://closure.vps.wbsprt.com/files/spherereflect/px_ohmful.png',
    //'https://closure.vps.wbsprt.com/files/spherereflect/nx_bk7je6.png',
    //'https://closure.vps.wbsprt.com/files/spherereflect/py_b1wbia.png',
    //'https://closure.vps.wbsprt.com/files/spherereflect/ny_uotebl.png',
    //'https://closure.vps.wbsprt.com/files/spherereflect/pz_byr0fi.png',
    //'https://closure.vps.wbsprt.com/files/spherereflect/nz_u9mv7e.png',
     //];
  //const cubeTextureLoader = new THREE.CubeTextureLoader();
  //const background = cubeTextureLoader.load(urls);
  //scene.background = background;

///-----------------SKY BOX-SCENE.BACKGROUND-- (КУБ)--------------------///  
const textures = getTexturesFromAtlasFile( 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/cube/sun_temple_stripe.jpg', 6 );

const materials = [];

for ( let i = 0; i < 6; i ++ ) {

materials.push( new THREE.MeshBasicMaterial( { map: textures[ i ] } ) );

}

const skyBox = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), materials );
skyBox.geometry.scale( 1, 1, - 1 );
scene.add( skyBox );

function getTexturesFromAtlasFile( atlasImgUrl, tilesNum ) {

const textures = [];

for ( let i = 0; i < tilesNum; i ++ ) {

textures[ i ] = new THREE.Texture();

}
new THREE.ImageLoader()
.load( atlasImgUrl, ( image ) => {

let canvas, context;
const tileWidth = image.height;

for ( let i = 0; i < textures.length; i ++ ) {

canvas = document.createElement( 'canvas' );
context = canvas.getContext( '2d' );
canvas.height = tileWidth;
canvas.width = tileWidth;
context.drawImage( image, tileWidth * i, 0, tileWidth, tileWidth, 0, 0, tileWidth, tileWidth );
textures[ i ].image = canvas;
textures[ i ].needsUpdate = true;

}

} );

return textures;

}

  //---------------------------------------------СФЕРА_ФОН НАСТРАИВАЕМАЯ--------------------//
  //const loader1 = new THREE.TextureLoader();
  //const textureSphereBg = loader1.load('https://i.ibb.co/4gHcRZD/bg3-je3ddz.jpg');
  
  //textureSphereBg.anisotropy = 16;
  //let geometrySphereBg = new THREE.SphereBufferGeometry(150, 40, 40);
  //let materialSphereBg = new THREE.MeshBasicMaterial({
      //side: THREE.BackSide,
      //map: textureSphereBg,
  //});
  //sphereBg = new THREE.Mesh(geometrySphereBg, materialSphereBg);
  //scene.add(sphereBg);
//---------------------------------------------hdr------------------------------
//new THREE.RGBELoader();
//loader3.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/equirectangular/royal_esplanade_1k.hdr', function ( texture ) {
//var envMap = pmremGenerator.fromEquirectangular(texture).texture;
//scene.background = texture;
//scene.environment = var envMap;
//texture.dispose();
//pmremGenerator.dispose();
//render();
//});

//--------------------------сфера ОТРАЖАТЕЛЬ-------------------------------------//
//const sphereGeometry = new THREE.SphereBufferGeometry(10, 500, 500);   

//sphereMaterial = new THREE.ShaderMaterial({
  //uniforms: {
    //uCubeMap: { value: cubeCamera.renderTarget.texture },
 // },
  //vertexShader: `
    //varying vec2 vUv;
    //varying vec3 vViewVector;
    //varying vec3 vNormal;

    //void main() {
      //vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      //vec4 viewPosition = viewMatrix * modelPosition;
      //vec4 projectedPosition = projectionMatrix * viewPosition;

      //vViewVector = modelPosition.xyz - cameraPosition;
      //vNormal = normal;

      //gl_Position = projectedPosition;
    //}
  //`,
  //fragmentShader: `
    //uniform samplerCube uCubeMap;

    //varying vec3 vViewVector;
    //varying vec3 vNormal;

    //void main() {
      //vec3 reflectedDirection = normalize(reflect(vViewVector, vNormal));
      //reflectedDirection.x = -reflectedDirection.x;

      //vec3 textureColor = textureCube(uCubeMap, reflectedDirection).rgb;

      //gl_FragColor = vec4(textureColor, 1.0);
    //}
  //`,
//});

//sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
//sphereGroup.add(sphereMesh);

//scene.add(sphereGroup);
//----------------------------------------------------------------------------//
//--------------------------------------------------ПОЛ----------------------------------------------------
//const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 200, 200 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
//mesh.rotation.x = - Math.PI / 2;
//mesh.receiveShadow = true;
//scene.add( mesh );

//---------------------------------------------GLTF LOADER-----------------------------------------------------------
var loader = new THREE.GLTFLoader()
loader.load('https://raw.githubusercontent.com/svyatoslavbogatov/kabanotdelno2/main/kaban.gltf', function ( gltf ) {
//gltf.scene.traverse( function( node ) {
//if ( node instanceof THREE.Mesh ) { 
//node.castShadow = true; 
//node.material.side = THREE.DoubleSide;
//}
//});
    kaban = gltf.scene;
    //kaban.position.set(10,0,10); //переещаем
    scene.add( kaban );
    mixer = new THREE.AnimationMixer( kaban );
    mixer.clipAction(gltf.animations[0]).play();
    //mixer.clipAction(gltf.animations[1]).play();
    //mixer.clipAction(gltf.animations[2]).play();
    //mixer.clipAction(gltf.animations[3]).play();
    //mixer.clipAction(gltf.animations[4]).play();
    //animate();
    //return model;
    //kaban.scale.set(1, 1, 1)
    
    //document.body.addEventListener("click", kill);
    //function kill() {
    //mixer.clipAction(gltf.animations[0]).stop();
    //mixer.clipAction(gltf.animations[1]).play();
    //setTimeout(function() {
    //mixer.clipAction(gltf.animations[1]).stop();
    //mixer.clipAction(gltf.animations[0]).play();
        //}, 1500);  
      //}
} );

loader.load('https://raw.githubusercontent.com/svyatoslavbogatov/bow2/main/pawyk.gltf', function ( gltf1 ) {
bow = gltf1.scene;
scene.add( bow );
} );

loader.load('https://raw.githubusercontent.com/svyatoslavbogatov/alebarda/main/alebarda.gltf', function ( gltf3 ) {
alebarda = gltf3.scene;
scene.add( alebarda ); 

} );

//loader.load('https://raw.githubusercontent.com/svyatoslavbogatov/fon-otdelno/main/ptica%20vs%20kaban/fon%20multy/untitled.gltf', function ( gltf2 ) {
//fon = gltf2.scene;
//scene.add( fon );     

//} );
  
  var mixer
  var clock = new THREE.Clock();
  function render() {
  requestAnimationFrame(render);
  var delta = clock.getDelta();
  //if ( mesh.material instanceof NodeMaterial ) frame.update( delta ).updateNode( mesh.material );
  if (mixer != null) mixer.update(delta);
  //if (kaban) kaban.rotation.y += 0.005;
  //camera.lookAt( 0, -10, 0 );
  controls.update();
  ///сфера-отражатель
  //sphereGroup.rotation.x += 0.01;
  //cubeCamera.update(renderer, scene);
  //sphereMaterial.uniforms.uCubeMap.value = cubeCamera.renderTarget.texture;
  //
  renderer.render(scene, camera);
}

render();
}
</script> 