import React, { FC, memo } from 'react';
import { useLoginForm } from './utils';

export const LoginComponent: FC = () => {
  const { handleFormSubmit, register, token } = useLoginForm();

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" ref={register} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" ref={register} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {!!token && <p>{token}</p>}
    </div>
  );
};

const Login = memo(LoginComponent);
Login.displayName = 'Login';
export default Login;
