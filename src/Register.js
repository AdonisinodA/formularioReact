import React, { useState } from "react";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

export function Register() {
  
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [celular, setCelular] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirm, setSenhaConfirm] = useState('')

  function phoneMask(v) {
    v = v.replace(/\D/g, "") //Remove tudo o que não é dígito
    v = v.replace(/^(\d\d)(\d)/g, "($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/-/g, "") //Remove o hífen
    if (v.length < 14) {
      v = v.replace(/(\d{4})(\d)/, "$1-$2") //Coloca hífen entre o quarto e o quinto dígitos
    } else {
      v = v.replace(/(\d{5})(\d)/, "$1-$2") //Coloca hífen entre o quinto e o sexto dígitos
    }
    return v
  }

  return (
    <div className="container vh-100 d-flex">
      <div className="vw-25 m-auto">
        <h1 className="text-black text-center"> Cadastro </h1>
        <Form>
          <Form.Group className="mb-3">
          <Form.Control
              type="text"
              placeholder="Nome"
              className="mt-2 mb-2"
              value={nome}
              onChange={(e)=>{setNome(e.target.value)}}
              maxLength="120"
              required
            />
            <Form.Control
              type="email"
              placeholder="E-mail"
              className="mt-2 mb-2"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              maxLength="120"
              required
            />
             <Form.Control
              type="text"
              placeholder="Celular"
              className="mt-2 mb-2"
              value={celular}
              onChange={(e)=>{setCelular(phoneMask(e.target.value))}}
              maxLength="15"
            />
            <Form.Control
              type="password"
              placeholder="Senha"
              className="mb-2"
              value={senha}
              onChange={(e)=>{setSenha(e.target.value)}}
              maxLength="6"
              required
            />
            <Form.Control
              type="password"
              placeholder="Confirme a senha"
              className="mb-2"
              value={senhaConfirm}
              onChange={(e)=>{setSenhaConfirm(e.target.value)}}
              maxLength="6"
              required
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
           <Button  variant="primary" type="submit" className="v-100">
              Cadastrar
            </Button>
           
          </Form.Group>
          
        </Form>
      </div>
    </div>
  )
}


export default Register