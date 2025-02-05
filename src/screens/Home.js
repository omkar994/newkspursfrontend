import React from 'react';
import Navbar from '../components/Navbar.js';
import BarGrph from '../components/BarGrph.js';
import ChartGrph from '../components/ChartGrph.js';

export default function Home() {
  return (
    <>
    <div><Navbar/></div>
    <div><BarGrph/></div>
    <div><ChartGrph/></div>
    </>

  )
}
