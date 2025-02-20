const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Cámara ortográfica para 2D
const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;

// Crear geometría del círculo
const geometríaCirculo = new THREE.CircleGeometry(100, 100);
const materialCirculo = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const circulo = new THREE.Mesh(geometríaCirculo, materialCirculo);
escena.add(circulo);

// Crear geometría del triángulo
const geometríaTriangulo = new THREE.ConeGeometry(100, 100);
const materialTriangulo = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const triangulo = new THREE.Mesh(geometríaTriangulo, materialTriangulo);
escena.add(triangulo);
// Animación (opcional)
function animacion() {
    requestAnimationFrame(animacion);
    circulo.rotation.z += 0.01; 
    triangulo.rotation.y -= 0.01; 
    renderizador.render(escena, camara);
}
animacion();

// Ajuste al redimensionar ventana
window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});
