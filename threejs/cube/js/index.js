(function () {
  var $canvas = $('#canvas-stage');
  
  var resizeCanvas = function(){
    $canvas.width($(window).width());
    $canvas.height($(window).height());
  };
  
  var createCanvas = function () {
    var canvas = document.getElementById('canvas');
    var scene;
    var box;
    var camera;
    var renderer;

    scene = new THREE.Scene();

    createBox();
    function createBox() {
      var textureLoader = new THREE.TextureLoader();
      
      box = new THREE.Mesh(
        new THREE.BoxGeometry(100, 100, 100),
        new THREE.MeshLambertMaterial({
          map: textureLoader.load('./img/block_texture.png')
        })
      );
      box.position.set(0, 0, 0);

      // シーンに追加
      scene.add(box);
    }


    initRenderer();

    function initRenderer() {
      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setSize($canvas.width(), $canvas.height());
      renderer.setClearColor(0xefefef);
      // 画面のピクセル比を設定
      renderer.setPixelRatio(window.devicePixelRatio);
      $canvas.append(renderer.domElement);
    }

    initLight();

    function initLight() {
      // 平行光源生成(hex, 光源強度)
      var directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 色、光の強さ
      directionalLight.position.set(0, 100, 30);
      scene.add(directionalLight);

      // 環境光生成(hex)
      var ambientLight = new THREE.AmbientLight(0x999999);
      scene.add(ambientLight);
    }

    initCamera();

    function initCamera() {
      // カメラの生成(fov, aspect, near, far)
      camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 1, 1000);
      // カメラの位置座標(x, y, z)
      camera.position.set(200, 100, 800);
      // boxの位置にカメラを向ける。
      camera.lookAt(box.position);
    }

    render();

    var rotateStep = 0;
    function render() {
      rotateStep += .02;
      box.rotation.set(0, rotateStep, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }


    /*initDebugMode();*/

    function initDebugMode() {
      // OrbitControls.jsを使ってマウスによる視点移動を可能にする
      var camera_control = new THREE.OrbitControls(camera, $canvas[0]);
      // XYZのガイドを生成(ガイドの長さ)
      var axis = new THREE.AxisHelper(500);
      axis.position.set(0, 0, 0);

      scene.add(axis);

      debugDraw();
    }

    var rotateStep = 0;
    function debugDraw() {
      rotateStep += .02;
      box.rotation.set(0, rotateStep, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(debugDraw);
    }
  };
  
  resizeCanvas();
  createCanvas();
})();