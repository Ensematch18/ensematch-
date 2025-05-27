import React, { useState } from 'react';

export default function AgeGate({ onPass }) {
  const [dob, setDob] = useState('');
  const handleCheck = () => {
    const birth = new Date(dob);
    const diff = Date.now() - birth.getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    if (age >= 18) onPass();
    else alert('Debes ser mayor de 18 años para usar EnseMatch.');
  };
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl mb-2">Confirma tu edad</h2>
      <input
        type="date"
        value={dob}
        onChange={e => setDob(e.target.value)}
        className="p-2 mb-2 text-black"
      />
      <button
        onClick={handleCheck}
        className="px-4 py-2 bg-accent rounded">Verificar</button>
    </div>
  );
}