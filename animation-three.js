/*
 * Ugly website deserves truly ugly code.
 * Code is not optimized at all, but it works.
 * Could not get the animation instancing to work through looping for some reason.
 */


// Initialize scenes, camera, renderer and meshes
let scene, canvas, camera, renderer, geometryOne, geometryTwo, geometryThree, geometryFour, geometryFive, geometrySix, particleOne, particleTwo, particleThree, particleFour, particleFive, particleSix, pointsOne, pointsTwo, pointsThree, pointsFour, pointsFive, pointsSix;


// Set the global camera parameters
camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 5, 300);
camera.position.z = 1;
camera.rotation.x = Math.PI / 2;


// Initialize the scene
function initScene() {

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x1c524f, 30, 220 );

    canvas = document.querySelector("#the-canvas")
    
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 10;
    
    // Get the sprites
    const sprites = [
        window.location.origin + '/images/logo-a.png',
        window.location.origin + '/images/logo-d.png',
        window.location.origin + '/images/logo-e.png',
        window.location.origin + '/images/logo-m.png',
        window.location.origin + '/images/logo-r.png',
        window.location.origin + '/images/logo-v.png',
    ];

    
    // Create particle clouds for each sprite
    geometryOne = new THREE.Geometry();
    geometryTwo = new THREE.Geometry();
    geometryThree = new THREE.Geometry();
    geometryFour = new THREE.Geometry();
    geometryFive = new THREE.Geometry();
    geometrySix = new THREE.Geometry();

    for (let i = 0; i < 1200; i++) {
        particleOne = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particleOne.velocity = 0.15;
        particleOne.acceleration = 0.05;
        geometryOne.vertices.push(particleOne);
    }

    for (let i = 0; i < 1200; i++) {
        particleTwo = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particleTwo.velocity = 0.25;
        particleTwo.acceleration = 0.003;
        geometryTwo.vertices.push(particleTwo);
    }

    for (let i = 0; i < 1200; i++) {
        particleThree = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particleThree.velocity = 0.18;
        particleThree.acceleration = 0.007;
        geometryThree.vertices.push(particleThree);
    }

    for (let i = 0; i < 1200; i++) {
        particleFour = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particleFour.velocity = 0.22;
        particleFour.acceleration = 0.004;
        geometryFour.vertices.push(particleFour);
    }

    for (let i = 0; i < 1200; i++) {
        particleFive = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particleFive.velocity = 0.17;
        particleFive.acceleration = 0.006;
        geometryFive.vertices.push(particleFive);
    }

    for (let i = 0; i < 1200; i++) {
        particleSix = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particleSix.velocity = 0.14;
        particleSix.acceleration = 0.009;
        geometrySix.vertices.push(particleSix);
    }

    let textureOne = new THREE.TextureLoader().load( sprites[0] );
    let materialOne = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 5.0,
        map: textureOne,
        transparent: true,
    });

    let textureTwo = new THREE.TextureLoader().load( sprites[1] );
    let materialTwo = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 5.0,
        map: textureTwo,
        transparent: true,
    });

    let textureThree = new THREE.TextureLoader().load( sprites[2] );
    let materialThree = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 5.0,
        map: textureThree,
        transparent: true,
    });

    let textureFour = new THREE.TextureLoader().load( sprites[3] );
    let materialFour = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 5.0,
        map: textureFour,
        transparent: true,
    });

    let textureFive = new THREE.TextureLoader().load( sprites[4] );
    let materialFive = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 5.0,
        map: textureFive,
        transparent: true,
    });

    let textureSix = new THREE.TextureLoader().load( sprites[5] );
    let materialSix = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 5.0,
        map: textureSix,
        transparent: true,
    });

    pointsOne = new THREE.Points(geometryOne, materialOne);
    pointsTwo = new THREE.Points(geometryTwo, materialTwo);
    pointsThree = new THREE.Points(geometryThree, materialThree);
    pointsFour = new THREE.Points(geometryFour, materialFour);
    pointsFive = new THREE.Points(geometryFive, materialFive);
    pointsSix = new THREE.Points(geometrySix, materialSix);
    scene.add(pointsOne);
    scene.add(pointsTwo);
    scene.add(pointsThree);
    scene.add(pointsFour);
    scene.add(pointsFive);
    scene.add(pointsSix);

    animateOne();
    animateTwo();
    animateThree();
    animateFour();
    animateFive();
    animateSix();

    window.addEventListener("resize", onWindowResize, false);

    /*
    sprites.forEach(sprite => {
        let particle;
        let geometry = new THREE.Geometry();
    
        // Create particles
        for(let i = 0; i < 1000; i++) {
            particle = new THREE.Vector3(
                Math.random() * 600 - 300,
                Math.random() * 600 - 300,
                Math.random() * 600 - 300
            );
            particle.velocity = 0.20;
            particle.acceleration = 0.005;
            geometry.vertices.push(particle);
        }

        let texture = new THREE.TextureLoader().load(sprite);
        let material = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 2.0,
            map: texture,
            transparent: true,
        });
        let points = new THREE.Points(geometry, material);
        scene.add(points);

        //if (geometry !== undefined) {
            animate(geometry, points);
        //}
    });
    */

}

/*
 * Resize the window and adjust the camera aspect ratio
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}



function animateOne() {
    geometryOne.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    geometryOne.verticesNeedUpdate = true;
    pointsOne.rotation.y +=0.018;
    renderer.render(scene, camera);
    requestAnimationFrame(animateOne);

}

function animateTwo() {
    geometryTwo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    geometryTwo.verticesNeedUpdate = true;
    pointsTwo.rotation.y +=0.018;
    renderer.render(scene, camera);
    requestAnimationFrame(animateTwo);
}

function animateThree() {
    geometryThree.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    geometryThree.verticesNeedUpdate = true;
    pointsThree.rotation.y +=0.018;
    renderer.render(scene, camera);
    requestAnimationFrame(animateThree);
}

function animateFour() {
    geometryFour.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    geometryFour.verticesNeedUpdate = true;
    pointsFour.rotation.y +=0.018;
    renderer.render(scene, camera);
    requestAnimationFrame(animateFour);
}

function animateFive() {
    geometryFive.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    geometryFive.verticesNeedUpdate = true;
    pointsFive.rotation.y +=0.018;
    renderer.render(scene, camera);
    requestAnimationFrame(animateFive);
}

function animateSix() {
    geometrySix.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    geometrySix.verticesNeedUpdate = true;
    pointsSix.rotation.y +=0.018;
    renderer.render(scene, camera);
    requestAnimationFrame(animateSix);
}


initScene();


/*
function animate(sprite) {
    console.log(sprite)
    let particle;
    let geometry = new THREE.Geometry();

    // Create particles
    for(let i = 0; i < 1000; i++) {
        particle = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        );
        particle.velocity = 0.20;
        particle.acceleration = 0.005;
        geometry.vertices.push(particle);
    }

    let texture = new THREE.TextureLoader().load(sprite);
    let material = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 2.0,
        map: texture,
        transparent: true,
    });
    let points = new THREE.Points(geometry, material);
    scene.add(points);

    // Particles animation
    geometry.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
    
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0;
        }
    });
    
    if (geometry !== undefined && geometry.verticesNeedUpdate !== undefined) {
        geometry.verticesNeedUpdate = true;
    }

    if (points !== undefined) {
        points.rotation.y +=0.000;
    }
    
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
*/
