const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(
window.innerWidth/2,
600
);

document
.getElementById("three-container")
.appendChild(renderer.domElement);

const geometry =
new THREE.TorusKnotGeometry(
10,
3,
200,
32
);

const material =
new THREE.MeshStandardMaterial({

color:0xff00ff,
metalness:1,
roughness:0

});

const knot =
new THREE.Mesh(
geometry,
material
);

scene.add(knot);

const light1 =
new THREE.PointLight(
0x00ffff,
2
);

light1.position.set(
20,
20,
20
);

scene.add(light1);

const light2 =
new THREE.PointLight(
0xff00ff,
2
);

light2.position.set(
-20,
-20,
20
);

scene.add(light2);

camera.position.z=30;

function animate(){

requestAnimationFrame(animate);

knot.rotation.x+=0.01;
knot.rotation.y+=0.01;

renderer.render(
scene,
camera
);

}

animate();

window.addEventListener(
"resize",
()=>{

camera.aspect=
window.innerWidth/
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth/2,
600
);

}
);

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const x=
e.offsetX/
card.clientWidth;

const y=
e.offsetY/
card.clientHeight;

card.style.transform=
`
rotateY(${(x-0.5)*20}deg)
rotateX(${(0.5-y)*20}deg)
`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform=
"rotateY(0deg) rotateX(0deg)";

});

});