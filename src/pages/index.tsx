import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { initializeCanvas } from '../scripts/engine/canvas/canvas';

export default function Home() {
  useEffect(() => {
    initializeCanvas();
  });

  return (
    <Layout title="Home">
      <canvas id="canvas" />
    </Layout>
  );
}
