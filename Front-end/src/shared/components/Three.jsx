import React from "react";
import * as THREE from "three";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

// import exhibitObj from "../../public/3d/Emergency_Backup_Generator-(Wavefront OBJ).obj";
// import exhibitMtl from "../assets/3d/Emergency_Backup_Generator-(Wavefront OBJ).mtl";

export default function Three() {
  let width = window.innerWidth - 100;
  let height = window.innerHeight;
  let threeCanvas = React.useRef();
  let scene = React.useRef(new THREE.Scene()).current;
  let camera = React.useRef(
    new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
  ).current;
  let render = React.useRef(
    new THREE.WebGLRenderer({ antialias: true })
  ).current;
  let mesh = React.useRef([]).current;
  let light = React.useRef([]).current;
  let isDown = React.useRef(false).current;
  let PI = React.useRef(15).current;
  let R = React.useRef(90).current;
  // 初始化
  let init = React.useCallback(() => {
    render.setSize(width, height);
    render.setClearColor("rgb(256,256,256,0)", 1.0);
    camera.updateProjectionMatrix();
    camera.position.set(10, 10, PI);
    camera.lookAt(0, 0, 0);
    // camera.add(light.pointLight);
  }, [render, threeCanvas]);
  // 创建mesh
  //   let createMesh = React.useCallback(() => {
  //     let rect = new THREE.BoxBufferGeometry(2, 2, 2);
  //     let material = new THREE.MeshBasicMaterial({ color: "red" });
  //     let rectMesh = new THREE.Mesh(rect, material);
  //     rectMesh.position.set(0, 0, 0);
  //     scene.add(rectMesh);
  //     mesh.push(rectMesh);
  //   }, []);
  // 创建灯光
  let createControls = React.useCallback(() => {}, []);
  let createLight = React.useCallback(() => {
    let dirLight = new THREE.DirectionalLight("#ffffff", 0.5);
    dirLight.position.set(100, 200, 100);
    let ambLight = new THREE.AmbientLight("#ffffff", 0.5);
    scene.add(dirLight, ambLight);
    light.push(dirLight, ambLight);
  }, []);
  // 载入模型
  let createObj = React.useCallback(() => {
    let mtlLoader = new MTLLoader();
    mtlLoader.setPath("/3d/");
    mtlLoader.load(
      "Emergency_Backup_Generator-(Wavefront OBJ).mtl",
      function (mtl) {
        mtl.preload();
        let loader = new OBJLoader();
        loader.setMaterials(mtl);
        loader.setPath("/3d/");
        loader.load(
          // 资源的URL
          "Emergency_Backup_Generator-(Wavefront OBJ).obj",

          // onLoad回调
          // Here the loaded data is assumed to be an object
          function (obj) {
            // Add the loaded object to the scene
            obj.position.set(0, 0, 0);

            scene.add(obj);
            mesh.push(obj);
          },

          // onProgress回调
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },

          // onError回调
          function (err) {
            console.error("An error happened");
          }
        );
      }
    );
  }, []);
  // 逐帧渲染
  let renderScene = React.useCallback(() => {
    render.render(scene, camera);
    window.requestAnimationFrame(() => {
      renderScene();
    });
  }, [render]);
  let down = React.useCallback(() => {
    isDown = true;
  }, []);
  let up = React.useCallback(() => {
    isDown = false;
  }, []);
  let move = React.useCallback((event) => {
    if (isDown === false) return;
    R -= event.movementX * 1;
    let x = PI * Math.sin(R / (180 * Math.PI));
    let y = camera.position.y + event.movementY * 0.1;
    let z = PI * Math.cos(R / (180 * Math.PI));
    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
  }, []);
  React.useEffect(() => {
    threeCanvas.current.append(render.domElement);
    init();
    createLight();
    // createMesh();
    // createControls();
    createObj();
    renderScene();
  }, []);

  return (
    <>
      <div
        ref={threeCanvas}
        onMouseDown={down}
        onMouseUp={up}
        onMouseMove={move}
      >
        <div
          className={"hero-slider__item__info__title color-undefined"}
          style={{
            position: "absolute",
            width: "40vw",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          空调展示
        </div>
      </div>
    </>
  );
}
