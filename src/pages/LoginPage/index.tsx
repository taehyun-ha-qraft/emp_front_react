import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInternalRouter } from '@pages/routing';
import classnames from 'classnames';
import loginCss from './loginPageCss';
import logo2 from '@asset/logo2.png';
import Login_Background from '@asset/Login_Background.png';

const DATABASE = [
  {
    username: 'user3',
    password: 'pass3',
  },
  {
    username: 'user1',
    password: 'pass1',
  },
  {
    username: 'user2',
    password: 'pass2',
  },
  {
    username: 'joker',
    password: 'joker',
  },
];

const ERROR_MESSAGES: { [s: string]: string } = {
  username: 'invalid username',
  password: 'invalid password',
};
const LoginPage = () => {
  const router = useInternalRouter();
  const [errorMessages, setErrorMessages] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<string>();

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    if (!errorStatus) {
      setErrorMessages('');
      return;
    }
    setErrorMessages(ERROR_MESSAGES[errorStatus]);
  }, [errorStatus]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    const userData = DATABASE.find((user) => user.username === username);
    // console.log(userData);
    if (userData) {
      if (userData.password !== password) {
        setErrorStatus('password');
      } else {
        if (errorStatus) setErrorStatus(undefined);

        localStorage.setItem('token', username as string);
        router.push('/emp');
      }
    } else {
      setErrorStatus('username');
    }
  };

  return (
    <div css={loginCss.container}>
      <img css={loginCss.background} src={Login_Background} alt="login_background" />
      <div css={loginCss.box}>
        <p css={loginCss.title}>QRAFT AI Asset Management System</p>
        <p css={loginCss.subtitle}>Transforming Investing with AI</p>
        <form css={loginCss.inputForm} onSubmit={handleSubmit}>
          {errorMessages && <p className="error-message">{errorMessages}</p>}
          <input
            className={classnames({ invalid: errorStatus === 'username' })}
            type="text"
            placeholder="ID"
            name="username"
            required
          />
          <input
            className={classnames({ invalid: errorStatus === 'password' })}
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button>Continue</button>
        </form>
        <p css={loginCss.contact}>
          Need help? <Link to="/contact">Contact us</Link>
        </p>
      </div>

      <div css={loginCss.footer}>
        <img className="logo" src={logo2} alt="QRAFT_LOGO" />
      </div>
    </div>
  );
};

export default LoginPage;
