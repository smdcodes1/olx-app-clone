
import React from 'react'
import Form from '../components/Form'
import Signup from '../components/Signup/Signup';

function SignupPage() {
  return (
    <div><Signup route="/api/user/register/" /></div>
  );
  // <Form route="/api/user/register/" method="register" />
}

export default SignupPage
