import React from "react";
import { Link } from 'react-router-dom';
import { 
  Input,
  Button,
  FormGroup, 
  FormHelperText,
} from '@mui/material';
import {
  Card,
  Title,
  ClickHere,
  CardContent,
} from '../style';


export default function FormLogin() {
  return (
    <Card>
      <CardContent>
        <Title>Entre </Title>
        <FormGroup>

          <Input id="my-email" aria-describedby="my-helper-text" type="email" placeholder="Informe seu e-mail" required/>
          <FormHelperText id="my-helper-text" ></FormHelperText> <br />
          
          <Input id="my-password" aria-describedby="my-helper-text" type="password" placeholder="Digite sua senha" required/>
          <FormHelperText id="password"></FormHelperText> <br />

          <Button color="success" type="submit" style={{ background: '#019AFA', color: '#fff' }}> Entrar </Button> <br />
          
          <div>
            <ClickHere>Ainda não possui conta ? <Link to='/register'>Clique aqui</Link></ClickHere>
          </div>
        </FormGroup>
      </CardContent>  
    </Card>
  )
}