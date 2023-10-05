import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { Raycaster } from "three";
import { useNavigate } from "react-router-dom";

const Three = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // variables
    let renderer, scene, camera, cameraControl, raycaster, mouseVector;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let stat = new Stats();
    let clock = new THREE.Clock();
    let INTERSECTED;

    //create renderer✅
    function createRenderer() {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.gammaOutput = true;
      canvasRef.current.appendChild(renderer.domElement);
      renderer.shadowMap.enabled = true;
      canvasRef.current.addEventListener("click", onClick);
      canvasRef.current.addEventListener("mousemove", detectMouseMove, false);
    }
    //create scene✅
    function createScene() {
      scene = new THREE.Scene();
      scene.background = new THREE.Color("#98cff3");
    }
    //create camera ✅
    function createCamera() {
      camera = new THREE.PerspectiveCamera(
        6,
        window.innerWidth / window.innerHeight,
        0.2,
        800
      );
      camera.position.set(105, 0, 0);
      camera.lookAt(scene.position);
      scene.add(camera);
      cameraControl = new OrbitControls(camera, renderer.domElement);
    }

    // lights
    // 3 different lights✅
    function createLights() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      ambientLight.position.set(10, 5, 10);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(20, 5, 2);
      scene.add(directionalLight);

      const spotLight = new THREE.SpotLight(0xffa500, 0.6, 5, 95);
      spotLight.position.set(0, 60, 150);
      scene.add(spotLight);

      console.log("Ambient light & Directional light & Spot light all loaded.");
    }
    //resize window✅
    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      console.log("Window has been resized.");
    }
    let planetMixer;
    // load planet model
    function loadPlanet() {
      const planetLoader = new GLTFLoader();
      planetLoader.load("../assets/cute_little_planet/planet.gltf", (gltf) => {
        const planet = gltf.scene;
        planet.position.set(0, 0, -2.5);
        scene.add(planet);
        planetMixer = new THREE.AnimationMixer(planet);
        gltf.animations.forEach((clip) => planetMixer.clipAction(clip).play());
      });
    }

    // slogan
    function loadSlogan() {
      const sloganLoader = new GLTFLoader();
      sloganLoader.load("../assets/slogan/slogan.gltf", (gltf) => {
        const slogan = gltf.scene;
        slogan.position.set(0, 0, 6.5);
        slogan.traverse((child) => {
          if (child.isMesh) {
            child.frustumCulled = false;
            child.castShadow = true;
            child.material.emissive = child.material.color;
            child.material.emissiveMap = child.material.map;
          }
        });
        scene.add(slogan);
      });
    }
    // map cloud
    let mapCloudMixer, quizCloudMixer, infoCloudMixer;
    function loadMapCloud() {
      const mapCloudLoader = new GLTFLoader();
      mapCloudLoader.load("../assets/cloud/cloud1.gltf", (gltf) => {
        const cloud1 = gltf.scene;
        cloud1.position.set(0, 3, -5);
        cloud1.scale.set(0.7, 0.7, 0.7);
        scene.add(cloud1);
        mapCloudMixer = new THREE.AnimationMixer(cloud1);
        gltf.animations.forEach((clip) =>
          mapCloudMixer.clipAction(clip).play()
        );
      });
    }
    //  quiz cloud
    function loadQuizCloud() {
      const quizCloudLoader = new GLTFLoader();
      quizCloudLoader.load("../assets/cloud/quizCloud.gltf", (gltf) => {
        const cloud2 = gltf.scene;
        cloud2.position.set(0, 0.5, -7);
        cloud2.scale.set(0.7, 0.7, 0.7);
        scene.add(cloud2);
        quizCloudMixer = new THREE.AnimationMixer(cloud2);
        gltf.animations.forEach((clip) =>
          quizCloudMixer.clipAction(clip).play()
        );
      });
    }
    // info cloud
    function loadInfoCloud() {
      const infoCloudLoader = new GLTFLoader();
      infoCloudLoader.load("../assets/cloud/infoCloud.gltf", (gltf) => {
        const cloud3 = gltf.scene;
        cloud3.position.set(0, -2.5, -6);
        cloud3.scale.set(0.7, 0.7, 0.7);
        scene.add(cloud3);
        infoCloudMixer = new THREE.AnimationMixer(cloud3);

        gltf.animations.forEach((clip) =>
          infoCloudMixer.clipAction(clip).play()
        );
      });
    }
    function animate() {
      requestAnimationFrame(animate);
      stat.begin();
      const delta = clock.getDelta();
      if (planetMixer && mapCloudMixer && quizCloudMixer && infoCloudMixer) {
        planetMixer.update(delta);
        mapCloudMixer.update(delta);
        quizCloudMixer.update(delta);
        infoCloudMixer.update(delta);
      }
      renderer.render(scene, camera);
      stat.end();
    }
    mouseVector = new THREE.Vector2();
    function detectMouseMove(evt) {
      mouseVector.set(
        2 * (evt.clientX / width) - 1,
        -(evt.clientY / height) * 2 + 1
      );
      raycaster = new Raycaster();
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0) {
        INTERSECTED = intersects[0].object;
        if (
          INTERSECTED.name == "Object_0004" ||
          INTERSECTED.name == "Object_0005" ||
          INTERSECTED.name == "Object_0"
        ) {
          INTERSECTED.material.color = new THREE.Color("#413F42");
        } else {
          // set the other models as null so the color won't change
          INTERSECTED = null;
        }
      } else {
        if (INTERSECTED) {
          INTERSECTED.material.color.set(0xffffff); // Reset the color
          INTERSECTED = null;
        }
      }
    }

    function onClick(event) {
      mouseVector.x = 2 * (event.clientX / width) - 1;
      mouseVector.y = 1 - 2 * (event.clientY / height);
      raycaster = new Raycaster();
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0) {
        INTERSECTED = intersects[0].object;
        if (
          INTERSECTED.name == "Object_0" ||
          INTERSECTED.name == "Object_0_1"
        ) {
          navigate("/maps");
        } else if (
          INTERSECTED.name == "Object_0004" ||
          INTERSECTED.name == "Object_0004_1"
        ) {
          navigate("/quiz");
        } else if (
          INTERSECTED.name == "Object_0005" ||
          INTERSECTED.name == "Object_0005_1"
        ) {
          navigate("/resources");
        }
      }
    }

    function init() {
      createScene();
      createRenderer();
      createCamera();
      createLights();
      onWindowResize();
      loadPlanet();
      loadSlogan();
      loadMapCloud();
      loadQuizCloud();
      loadInfoCloud();
      animate();
    }

    init();
    return () => {
      // Remove event listeners
      window.removeEventListener("resize", onWindowResize);

      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });

      renderer.dispose();

      // Remove the renderer DOM element
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
        canvasRef.current.removeEventListener("click", onClick);
        canvasRef.current.removeEventListener("mousemove", detectMouseMove);
      }
    };
  }, []);

  return <div ref={canvasRef} id="canvas"></div>;
};

export default Three;
