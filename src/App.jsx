import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState();
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharacterAllowed) str += "<>/?;:{}[]!@#$%^&*()";
    for (let i = 0; i <= length; i++) {
      let rndm = Math.floor(Math.random() * str.length);
      pass += str.charAt(rndm);
      setPassword(pass);
    }
  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  useEffect(()=>{passwordGenerator()},[length,isNumberAllowed,isCharacterAllowed]);

  const [copy, setCopy] = useState('Copy');

  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password);
    setCopy(()=> 'Copied');
  }

  useEffect(()=>{
    setCopy(()=> 'Copy')
  },[password])
  

  return (
    <div className="w-full h-screen flex justify-center items-center bg-zinc-900">
      <div className="w-2/4 bg-slate-500 flex flex-col justify-center items-center rounded-lg p-5">
        <h1 className="text-white text-2xl mb-4 font-semibold">
          Password Generator
        </h1>
        <div className="w-2/3 bg-slate-800 h-10 flex rounded-md">
          <input
            className="outline-none text-xl h-full w-3/4 rounded-s-md"
            type="text"
            readOnly
            value={password}
          />
          <button className="hover:bg-blue-800 transition-all w-1/4 bg-blue-600 text-white font-medium text-xl rounded-e-md" onClick={copyToClipBoard}>
            {copy}
          </button>
        </div>
        <div className="w-4/5 py-4 flex gap-2">
        <input min={4} onChange={(e) => setLength(e.target.value)} max={25} value={length} className="cursor-pointer" type="range" id="rnge" /><label htmlFor="rnge">Length {length}</label>
        <div className="flex justify-center items-center">
          <input type="checkbox" defaultChecked = {isNumberAllowed} onChange={()=> setIsNumberAllowed((prev) => !prev)}  id="numAll" /><label htmlFor="numAll">Include Numbers</label>
        </div>
        <div className="flex justify-center items-center">
          <input type="checkbox" defaultChecked= {isCharacterAllowed} onChange={()=> setIsCharacterAllowed((prev) => { return !prev})}  id="charAll" /><label htmlFor="charAll">Include Characters</label>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
