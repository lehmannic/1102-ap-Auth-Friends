import React, { useState } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const attemptLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post('/api/login', credentials)
      .then((res) => {
        setTimeout(() => {
          setIsLoading(false);
          setError('');
          localStorage.setItem('token', res.data.payload);
          props.history.push('/protected');
        }, 300);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setError('Invalid Credentials');
      });
    setCredentials({});
  };

  return (
    <div className='container'>
      <h3 style={{ color: 'red' }}>{error}</h3>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <form onSubmit={attemptLogin}>
          <input
            type='text'
            name='username'
            placeholder='user name'
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      )}
    </div>
  );
};

export default Login;
