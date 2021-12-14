import React,{ useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import { 
  Input,
  FormGroup, 
  FormHelperText,
} from '@mui/material';
import {
  Card,
  Title,
  ClickHere,
  CardContent,
  SaveInput,
} from '../style';

type FormValues = {
  email: string;
  password: string;
};

interface ErrorInterface {
  errors: string;
  hasError: boolean;
}

export default function FormRegister() {
  const defaultError = {
    error: '',
    background: {
      color: 'rgb(255,000,000)'
    }
  }
  const [errors, setErrors] = useState(defaultError)

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => { 
    try {
      const { email, password } = data;

      const {  } = validData(data)

    } catch (err) {
      console.debug('Register', err)
    }
  };

  const validData = (data: FormValues): ErrorInterface => {
    console.log(data)

    return false
  }

  useEffect(() => {

  },[])

  return (
    <Card>
      <CardContent>
        <Title>Cadastrar </Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup >
            <Input 
              id="my-email" 
              {...register("email")} 
              aria-describedby="my-helper-text" 
              type="email" 
              placeholder="Informe seu e-mail" />
            <FormHelperText id="email" style={errors?.background}>{errors?.error}</FormHelperText> <br />
            
            <Input 
              id="my-password"
              {...register("password")}            
              aria-describedby="my-helper-text" 
              type="password" 
              placeholder="Digite sua senha" />
            <FormHelperText id="password" style={errors?.background}>{errors?.error}</FormHelperText> <br />

            <SaveInput value="Cadastrar" type="submit" /><br />
            
            <div>
              <ClickHere>Já possui conta ? <Link to='/login'>Clique aqui</Link></ClickHere>
            </div>
          </FormGroup>
        </form>
      </CardContent>  
    </Card>
  )
}