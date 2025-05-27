import React, { useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../firebase/firebaseConfig';
import { EmailAuthProvider, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import AgeGate from '../components/AgeGate';

export default function Login() {
  const [allowed, setAllowed] = useState(false);

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  if (!allowed) {
    return <AgeGate onPass={() => setAllowed(true)} />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-primary">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4 text-primary">Bienvenido a EnseMatch</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </div>
  );
}