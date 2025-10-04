// import React from 'react'

// import './sign-in-and-sign-up.styles.scss'

// import SignIn from '../../components/sign-in/sign-in.component'
// import SignUp from '../../components/sign-up/sign-up.component'

// const SignInAndSignUpPage = () => (
//     <div className='sign-in_sign-up'>
//         <SignIn />
//         <SignUp />
//     </div>
// )

// export default SignInAndSignUpPage;

import React, { useState, useEffect } from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 884);
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sign-in_sign-up">
      {isMobile ? (
        showSignUp ? (
          <SignUp switchToSignIn={() => setShowSignUp(false)} />
        ) : (
          <SignIn switchToSignUp={() => setShowSignUp(true)} />
        )
      ) : (
        <>
          <SignIn />
          <SignUp />
        </>
      )}
    </div>
  );
};

export default SignInAndSignUpPage;
