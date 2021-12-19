import React, { useState, useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import {
  Input,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import {
  ClickHere,
  SaveInput,
} from '../style';

import { api } from '../../../services'

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

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const message = validData(data);

    setErrors(message)

    if (message.hasError) return

    api.post('/auth', data)
      .then((response: AxiosResponse) => {
        if (response.status === 204) return toast.warn("Email não registrado")

        if (response.status !== 201) return toast.error("Ocorreu um erro, tente novamente mais tarde");

        const { token } = response.data;

        localStorage.setItem('TOKEN', token);
        window.location.assign('../')

      })
      .catch((err) => toast.error('Email e/ou senha incorretos'))
  };

  useEffect(() => {
    if (errors.hasError === false) return setErrors(defaultError);

  }, [errors, defaultError])

  return (
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
          <ClickHere>Não possui conta ? <Link to='/register'>Clique aqui</Link></ClickHere>
        </div>
      </FormGroup>
    </form>
  )
}