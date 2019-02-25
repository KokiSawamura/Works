(function () {
  var $canvas = $('#canvas-stage');

  var grabCursor = function () {
    $('body').on('mousedown touchstart', function () {
      $(this).addClass('grabbing');
    }).on('mouseup touchedn', function () {
      $(this).removeClass('grabbing');
    });
  };

  var resizeCanvas = function () {
    $canvas.width($(window).width());
    $canvas.height($(window).height());
  };
  
  
  var createCanvas = function(){
    var canvas = document.getElementById('canvas'),
        scene  = new THREE.Scene(),
        mesh,
        camera,
        renderer,
        FLOOR  = -25.5;

    initCamera();
    function initCamera() {
      // カメラの生成(fov, aspect, near, far)
      camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 1, 1000);
      // カメラの位置座標(x, y, z)
      camera.position.set(-80, 20, 100);
    }
    
    initLight();
    function initLight() {
      // 平行光源生成(hex, 光源強度)
      var directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 色、光の強さ
      directionalLight.position.set(50, 200, 200);
      scene.add(directionalLight);

      // 環境光生成(hex)
      var ambientLight = new THREE.AmbientLight(0x999999);
      scene.add(ambientLight);

      directionalLight.castShadow = true;
      
      var d = 30;
      
      directionalLight.shadow.camera.left = -d;
      directionalLight.shadow.camera.right = d;
      directionalLight.shadow.camera.top = d * 1.5;
      directionalLight.shadow.camera.bottom = -d;
      directionalLight.shadowMapWidth = 1000;
      directionalLight.shadowMapHeight = 1000;
      
      // デバッグ用
      var directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
      scene.add( directionalLightHelper);
    }

    initGround();
    function initGround() {
      var geometry = new THREE.PlaneBufferGeometry(1000, 1000);
      var material = new THREE.MeshLambertMaterial({color: 0xdddddd});

      var ground = new THREE.Mesh(geometry, material);
      ground.position.set(0, FLOOR, 0);
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      ground.receiveShadow = true;
    }

    loadJson();
    function loadJson() {
      var loader = new THREE.JSONLoader();
      var json = './json/robot.json'; // jsonパスの指定
      loader.load(json, function (geometry, materials) {
        var faceMaterial = new THREE.MeshFaceMaterial(materials);
        var materialColor = 0xff8700; // マテリアルの色
        faceMaterial.materials[0].color = new THREE.Color(materialColor); // マテリアルの色の設定
        faceMaterial.materials[0].wireframe = true; // ワイヤーフレーム表示にする

        mesh = new THREE.SkinnedMesh(geometry, faceMaterial);
        mesh.position.set(0, 0, 0); // 位置の設定
        mesh.scale.set(10, 10, 10); // スケールの設定

        scene.add(mesh); // シーンへメッシュの追加

        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        // デバッグ用
        var skeltoneHelper = new THREE.SkeletonHelper( mesh );
        scene.add(skeltoneHelper);

      });
    }


    initRenderer();
    function initRenderer() {
      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setSize($canvas.width(), $canvas.height());
      renderer.setClearColor(0xe8e8e8);
      $canvas.append(renderer.domElement);
    }

    render();
    function render() {
      renderer.shadowMap.enabled = true;

      renderer.render(scene, camera); // レンダリング
    }


    initDebugMode();
    function initDebugMode() {
      // OrbitControls.jsを使ってマウスによる視点移動を可能にする
      var camera_control = new THREE.OrbitControls(camera, $canvas[0]);
      // XYZのガイドを生成(ガイドの長さ)
      var axis = new THREE.AxisHelper(500);
      axis.position.set(0, 0, 0);

      scene.add(axis);

      debugDraw();
    }

    function debugDraw() {
      // レンダリング
      renderer.render(scene, camera);
      // レンダリング処理をループで呼び出す
      requestAnimationFrame(debugDraw);
    }
  }

  grabCursor();
  resizeCanvas();
  createCanvas();
})();