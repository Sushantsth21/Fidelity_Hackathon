import React from 'react';
import FinCalc from '../components/FinCalc';
import CompoundInt from '../components/CompoundInt';
 
export default function Dashboard() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'top', minHeight: '100vh', padding: '20px' }}>
      <div style={{ width: '50%' }}>
        <FinCalc />
      </div>
      <div style={{ width: '50%' }}>
        <CompoundInt />
      </div>
    </div>
  );
}
 