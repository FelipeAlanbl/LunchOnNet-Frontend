import React from 'react'
import { FormWrapper, FormInputWrapper, LoginButton} from '../Login/style'

function DefinePassword() {
  return (
    <FormWrapper>
        <h2>Definir nova senha</h2>
        <form action="">
            <div>
                <FormInputWrapper>
                    <label htmlFor="">Digite nova senha</label>
                    <input type="password"/>
                </FormInputWrapper>
                <FormInputWrapper>
                    <label htmlFor="">Confirme nova senha</label>
                    <input type="password"/>
                </FormInputWrapper>
                <LoginButton>Definir</LoginButton>
            </div>
        </form>

    </FormWrapper>
  )
}

export default DefinePassword