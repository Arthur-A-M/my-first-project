'use client';

import React from 'react';

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <div style={{fontSize: '4rem', fontWeight: 'bold'}}>
        <h1 style={{marginBottom: '1rem'}}>{count}</h1>
        <button style={{padding: '1rem 2rem', fontSize: '2rem', borderRadius: '0.5rem'}} onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
}
