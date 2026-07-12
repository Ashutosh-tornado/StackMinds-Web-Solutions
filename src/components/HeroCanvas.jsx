import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Monochrome wireframe torus-knot with a single pine-green point cluster.
// Soft green lines on the ivory hero background; reacts subtly to the mouse.
export default function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    let W = canvas.clientWidth || parent.clientWidth;
    let H = canvas.clientHeight || parent.clientHeight;
    if (!W || !H) { W = 600; H = 600; }

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    cam.position.z = 6.2;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H, false);

    const grp = new THREE.Group();
    scene.add(grp);
    const geo = new THREE.TorusKnotGeometry(1.7, 0.34, 180, 24, 2, 3);
    const wireGeo = new THREE.WireframeGeometry(geo);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x1b2620, transparent: true, opacity: 0.15 });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    grp.add(wire);
    const dotMat = new THREE.PointsMaterial({ color: 0x1b2620, size: 0.02, transparent: true, opacity: 0.38 });
    const dots = new THREE.Points(geo, dotMat);
    grp.add(dots);

    const ag = new THREE.IcosahedronGeometry(2.35, 0);
    const accMat = new THREE.PointsMaterial({ color: 0x2f6b4f, size: 0.06, transparent: true, opacity: 1 });
    const apts = new THREE.Points(ag, accMat);
    scene.add(apts);

    let mx = 0, my = 0, tmx = 0, tmy = 0, raf;
    const onMove = (e) => {
      tmx = e.clientX / window.innerWidth - 0.5;
      tmy = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener('mousemove', onMove);

    const clock = new THREE.Clock();
    const loop = () => {
      const t = clock.getElapsedTime();
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      grp.rotation.y = t * 0.22 + mx * 0.8;
      grp.rotation.x = t * 0.11 + my * 0.6;
      apts.rotation.y = -t * 0.14;
      apts.rotation.z = t * 0.06;
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onResize = () => {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      if (!W || !H) return;
      cam.aspect = W / H;
      cam.updateProjectionMatrix();
      renderer.setSize(W, H, false);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      geo.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      dotMat.dispose();
      ag.dispose();
      accMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas id="hero-canvas" ref={ref} aria-hidden="true" />;
}
