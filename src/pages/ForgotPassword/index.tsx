import { Link } from 'react-router-dom'
import { FormWrapper, FormInputWrapper, LoginButton} from '../Login/style'


function ForgotPassword() {
  return (
    <FormWrapper>
      <h2>Recuperar Senha</h2>
      <form action="">
        <FormInputWrapper>
          <label htmlFor="">email</label>
          <input type="email" name="" id="" />
        </FormInputWrapper>
        <LoginButton>Enviar</LoginButton>
      </form>
        <Link to="/auth">Voltar</Link>
    </FormWrapper>

  )
}

export default ForgotPassword