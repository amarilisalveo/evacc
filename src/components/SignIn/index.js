import React from 'react';

const SignIn = () => (
  <div>
      <form onSubmit>
        <input
          name="email"
         
        
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
         
      
          type="password"
          placeholder="Password"
        />
        <button >
          Sign In
        </button>

      </form>
    <h1>SignIn</h1>
  </div>
);


export default SignIn;