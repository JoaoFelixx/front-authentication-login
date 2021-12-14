import React from "react";
import {
  Card,
  Form,
  Title,
  Label,
  Input,
  UserIcon,
  ClickHere,
  SubmitButton,
} from './style';
import { Link } from 'react-router-dom'

function FormLogin() {
  return (
    <Card>
      <UserIcon src="./img/user-login.png" alt="Users" />
      <Title>Login</Title>
      <br />
      <Form>
        <Label>Digite seu email</Label>
        <Input type="text" placeholder="Email" />
        <br /><br />
        <Label>DIgite sua senha</Label>
        <Input type="text" placeholder="Senha" />
        <br /><br />
        <SubmitButton>Enviar</SubmitButton>
      </Form>
      <br /><br />
      <ClickHere>Ainda não possui conta ? <Link to='/register'>Clique aqui</Link></ClickHere>
    </Card>
  )
}

export default FormLogin;