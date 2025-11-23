
import React from 'react'
import Form from '../components/Form'
import Login from '../components/Login/Login';

function LoginPage() {
  return (
    <div><Login route="/api/token/"/></div>
  );
  // <Form route="/api/token/" method="login" />
}

export default LoginPage
