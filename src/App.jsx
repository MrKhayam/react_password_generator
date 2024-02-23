import React, { useCallback, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passwordGenerator = useCallback(()=>{},[length,isNumberAllowed,isCharacterAllowed,setPassword]);
  return (
    <div className='w-full h-screen bg-zinc-900'>
      
    </div>
  );
}

export default App;
