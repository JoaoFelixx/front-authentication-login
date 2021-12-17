import React from 'react'
import { 
  FormRegister,
  CardForm,
  Title
} from '../../components';

function RegisterPage() {
  return (
    <div>
      <CardForm>
        <Title>Registre-se</Title>
        <FormRegister />
      </CardForm>
    </div>
  )
}

export default RegisterPage;