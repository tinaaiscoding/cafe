import React, { useState } from 'react';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

const AuthPage = ({ setUser }) => {
  const [signUp, setSignUp] = useState(true);

  const handleToggleSignUp = () => {
    setSignUp(!signUp)
  }

  return (
    <div>
      <h1>Auth</h1>
      {signUp ? (
        <>
          <button onClick={handleToggleSignUp}>Log In</button>
          <SignUpForm setUser={setUser} />
        </>
      ) : (
        <>
          <button onClick={handleToggleSignUp}>Sign Up</button>
          <LoginForm setUser={setUser} />
        </>
      )}
    </div>
  );
};

export default AuthPage;
