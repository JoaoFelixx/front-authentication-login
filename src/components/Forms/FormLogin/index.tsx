import React, { useState, useEffect, useMemo } from "react";
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
  SaveInput,
} from '../style';

type FormValues = {
  email: string;
  password: string;
};

interface ErrorInterface {
  hasError: boolean;
  error: FormValues;
  background: object;
}

export default function FormLogin() {

  const defaultError = useMemo<ErrorInterface>(() => {
    return {
      hasError: false,
      error: {
        email: '',
        password: ''
      },
      background: {
        color: 'rgb(255,000,000)'
      }
    }
  }, [])

  const [errors, setErrors] = useState(defaultError)
  const { register, handleSubmit } = useForm<FormValues>();


  const validData = (data: FormValues): ErrorInterface => {

    const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)

    if (!regexEmail.test(data.email)) return {
      ...defaultError,
      hasError: true,
      error: { email: 'Email inválido', password: '' }
    }

    if (data.password.length < 4) return {
      ...defaultError,
      hasError: true,
      error: { email: '', password: 'Senha deve conter no minimo 4 digitos' }
    }

    return defaultError
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      const message = validData(data);
      
      setErrors(message)

      if (message.hasError) return 


      console.log('OK')

    } catch (err) {
      console.debug('Register', err)
    }
  };

  useEffect(() => {
    if (errors.hasError === false)
      return setErrors(defaultError);

    return
  }, [errors, defaultError])

  return (
    <Card>
      <Title>Entrar </Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup >
          <Input
            id="my-email"
            {...register("email")}
            aria-describedby="my-helper-text"
            type="email"
            placeholder="Informe seu e-mail" />
          <FormHelperText id="email" style={errors?.background}>{errors?.error?.email}</FormHelperText> <br />

          <Input
            id="my-password"
            {...register("password")}
            aria-describedby="my-helper-text"
            type="password"
            placeholder="Digite sua senha" />
          <FormHelperText id="password" style={errors?.background}>{errors?.error?.password}</FormHelperText> <br />

          <SaveInput value="Entrar" type="submit" /><br />

          <div>
            <ClickHere>Já possui conta ? <Link to='/login'>Clique aqui</Link></ClickHere>
          </div>
        </FormGroup>
      </form>
    </Card>
  )
}