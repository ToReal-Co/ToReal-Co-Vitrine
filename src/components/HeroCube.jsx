import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Bounding boxes of the ToReal&Co mark's five glyph strokes (from the logo's
// own coordinate space) — cubes assemble onto these rectangles.
const RECTS = [
  [10.4, 12.9, 21, 44.4],
  [21, 44.4, 31.6, 55.1],
  [21, 23.3, 31.6, 34],
  [36.5, 34.2, 47.2, 54.9],
  [46.9, 24.1, 57.6, 34.8],
];

/**
 * The hero's animated mark: a swarm of small cubes that assemble into the
 * ToReal&Co glyph, drift with a slow wave, gently tilt toward the cursor,
 * and "explode" back into orbit on click (or on scroll-past). Renders into
 * a host div sized/masked by the parent; click anywhere on it to recompose.
 */
const HeroCube = () => {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const base = host?.parentElement;
    if (!host || !base) return undefined;

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.innerWidth < 760;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.domElement.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block';
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(30, host.clientWidth / host.clientHeight, 0.1, 200);
    const fitZ = () => (22 * host.clientHeight) / Math.max(1, base.clientHeight);
    cam.position.set(0, 0, fitZ());

    scene.add(new THREE.HemisphereLight(0xffffff, 0xbfd3f7, 1.2));
    const d1 = new THREE.DirectionalLight(0xffffff, 1.8);
    d1.position.set(4, 6, 9);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0x5b9bff, 1.2);
    d2.position.set(-7, -3, 4);
    scene.add(d2);

    const group = new THREE.Group();
    scene.add(group);

    const U = 10.6;
    const S = 1.2 / U;
    const sub = mobile ? 1 : 2;
    const step = (U / sub) * S;
    const sz = step * 0.9;
    const geo = new THREE.BoxGeometry(sz, sz, sz);
    const mats = [
      new THREE.MeshStandardMaterial({ color: 0xdbe9fe, roughness: 0.3, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ color: 0x5b9bff, roughness: 0.3, metalness: 0.15 }),
    ];

    const cubes = [];
    RECTS.forEach(([x0, y0, x1, y1]) => {
      const nx = Math.max(1, Math.round(((x1 - x0) / U) * sub));
      const ny = Math.max(1, Math.round(((y1 - y0) / U) * sub));
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          for (let k = 0; k < sub; k++) {
            const tx = (x0 + ((i + 0.5) * (x1 - x0)) / nx - 34) * S;
            const ty = -(y0 + ((j + 0.5) * (y1 - y0)) / ny - 34) * S;
            const tz = 0.5 + (k - (sub - 1) / 2) * step;
            const r = Math.random();
            const m = new THREE.Mesh(geo, r < 0.72 ? mats[0] : r < 0.92 ? mats[1] : mats[2]);
            const s = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
              .normalize()
              .multiplyScalar(8 + Math.random() * 9);
            m.userData = {
              t: new THREE.Vector3(tx, ty, tz),
              s,
              rs: new THREE.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6),
              delay: Math.random() * 0.6,
              off: new THREE.Vector3(),
            };
            group.add(m);
            cubes.push(m);
          }
        }
      }
    });

    const discMat = new THREE.MeshStandardMaterial({
      color: 0x1170ea,
      roughness: 0.35,
      metalness: 0.2,
      transparent: true,
    });
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(34 * S, 34 * S, 0.4, 96), discMat);
    disc.rotation.x = Math.PI / 2;
    disc.position.z = -0.15;
    group.add(disc);

    const ringMat = new THREE.MeshBasicMaterial({ color: 0x1570ef, transparent: true, opacity: 0.3 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(34 * S + 0.7, 0.025, 12, 180), ringMat);
    group.add(ring);
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(34 * S + 1.9, 0.012, 8, 180),
      new THREE.MeshBasicMaterial({ color: 0x1570ef, transparent: true, opacity: 0.16 })
    );
    scene.add(ring2);

    const ray = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mp = new THREE.Vector3();
    const ndc = new THREE.Vector2();
    let nx = 0;
    let ny = 0;
    let inside = false;
    let rotX = 0;
    let rotY = 0;
    let visible = true;
    let burstAt = null;
    const cl = (v) => Math.max(-1, Math.min(1, v));

    const onMove = (e) => {
      const b = base.getBoundingClientRect();
      const c = host.getBoundingClientRect();
      nx = cl(((e.clientX - b.left) / b.width) * 2 - 1);
      ny = cl(-(((e.clientY - b.top) / b.height) * 2 - 1));
      inside = e.clientX > b.left && e.clientX < b.right && e.clientY > b.top && e.clientY < b.bottom;
      if (inside) {
        ndc.set(((e.clientX - c.left) / c.width) * 2 - 1, -(((e.clientY - c.top) / c.height) * 2 - 1));
        ray.setFromCamera(ndc, cam);
        ray.ray.intersectPlane(plane, mp);
        group.worldToLocal(mp);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const vio = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
    });
    vio.observe(host);

    const onClick = () => {
      burstAt = performance.now();
    };
    host.addEventListener('click', onClick);

    const t0 = performance.now();
    const tmp = new THREE.Vector3();
    const push = new THREE.Vector3();
    const ease = (x) => 1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 3);
    let raf;

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const el = (now - t0) / 1000;
      const hr = base.getBoundingClientRect();
      const explode = Math.max(0, Math.min(1, -hr.top / (hr.height * 1.2)));
      const bt = burstAt ? (now - burstAt) / 1000 : 9;

      cubes.forEach((m) => {
        const u = m.userData;
        const a = rm ? 1 : ease((el - 0.35 - u.delay) / 1.7);
        let wave = 0;
        if (!rm && el > 4) {
          const q = (((el - 4 + (u.t.x + 4) * 0.06) % 9) + 9) % 9;
          if (q < 1.4) wave = Math.sin((q / 1.4) * Math.PI) * 0.35;
        }
        let burst = 0;
        if (bt < 2.2) {
          const b = bt / 2.2;
          burst = Math.sin(Math.min(1, b + u.delay * 0.2) * Math.PI) * 0.9;
        }
        const mix = a * (1 - Math.max(explode * 0.85, wave, burst));
        tmp.copy(u.s).lerp(u.t, mix);
        m.rotation.set(u.rs.x * (1 - mix), u.rs.y * (1 - mix), u.rs.z * (1 - mix));
        push.set(0, 0, 0);
        if (inside && !rm) {
          const dd = tmp.distanceTo(mp);
          if (dd < 2.2) {
            push.copy(tmp).sub(mp).setZ(0).normalize().multiplyScalar((2.2 - dd) * 0.5);
            push.z = (2.2 - dd) * 0.9;
          }
        }
        u.off.lerp(push, 0.12);
        m.position.copy(tmp).add(u.off);
      });

      const ds = (rm ? 1 : ease(el / 1.1)) * (1 - explode * 0.7);
      disc.scale.set(Math.max(0.001, ds), 1, Math.max(0.001, ds));
      discMat.opacity = 1 - explode * 0.8;
      rotY += (nx * 0.45 - rotY) * 0.05;
      rotX += (-ny * 0.3 - rotX) * 0.05;
      group.rotation.y = rotY + (rm ? 0 : Math.sin(el * 0.5) * 0.12);
      group.rotation.x = rotX + (rm ? 0 : Math.cos(el * 0.4) * 0.05);
      ring.rotation.z = el * 0.1;
      ringMat.opacity = 0.3 * (1 - explode);
      ring2.rotation.x = 1.1 + Math.sin(el * 0.3) * 0.1;
      ring2.rotation.y = el * 0.15;
      renderer.render(scene, cam);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => {
      const w = host.clientWidth;
      const hh = host.clientHeight;
      if (!w || !hh) return;
      renderer.setSize(w, hh);
      cam.aspect = w / hh;
      cam.position.z = fitZ();
      cam.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      host.removeEventListener('click', onClick);
      vio.disconnect();
      renderer.dispose();
      geo.dispose();
      mats.forEach((m) => m.dispose());
      discMat.dispose();
      ringMat.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="absolute pointer-events-auto cursor-pointer"
      style={{
        inset: '-36% -40% -24% -40%',
        WebkitMaskImage:
          'radial-gradient(ellipse 50% 50% at 50% 48%, #000 58%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 48%, #000 58%, transparent 100%)',
      }}
    />
  );
};

export default HeroCube;
