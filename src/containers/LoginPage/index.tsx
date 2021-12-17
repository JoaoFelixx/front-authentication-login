import React from 'react'
import { 
  Title,
  FormLogin,
  CardForm 
} from '../../components';

function LoginPage() {

  return (
    <CardForm>
      <Title> Login </Title>
      <FormLogin />
    </CardForm>
  )
}

export default LoginPage;