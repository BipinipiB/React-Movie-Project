import React, { useState } from 'react';
import '../css/Login.css';
import { LoginUser } from '../services/api';
import { Navigate, useNavigate } from 'react-router-dom'; //

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
        setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

  const handleSubmit = async (e) => {
    
        e.preventDefault();

        if (!formData.email || !formData.password) {
        setError('Please enter both email and password.');
        return;
        }
        setError('');

        console.log('Login user:', formData);

        const result = await LoginUser(formData);

        //login successful??
        if(result.code === 200) 
        {
           
            //store token and username after successful login
            localStorage.setItem('token', result.token);
            localStorage.setItem('email',result.email);
            //setAuthChanged(prev => !prev);
            alert('Login successful!');
            navigate('/home');
        }else 
        {
            setError(result.message || 'Login failed.');
        }
    };   

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;