import React, { Suspense } from 'react';
import Bottles from './components/Bottles/Bottles';

const bottlePromise = fetch('/assets/bottles.json').then(res => res.json())

const App = () => {
  return (
    <>

    <Suspense fallback={"Bottles are loading....."}>
      <Bottles bottlePromise={bottlePromise} />
    </Suspense>
    
    
    
    </>
  );
};

export default App;