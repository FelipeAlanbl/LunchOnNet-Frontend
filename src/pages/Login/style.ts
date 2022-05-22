import styled from 'styled-components'

export const FormWrapper = styled.div`
    height: 70%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 30px;
        font-size: 44px;
    }

    form {
        width: 80%;
    }

    .c-form-wrapper__input-wrapper{
        a {
            text-align: right;
        }
    }

    a {
        color: #333333;
        font-size: 14px;
    }
`;

export const ErrorField = styled.div`
    border: 2px solid red;
    background: rgba(255,0,0,0.2);
    width: 80%;
    height: 35px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 200;
`;

export const ButtonSetPasswordVisible = styled.span`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 20px;
    font-size: 20px;
    color: #333;
`

export const FormInputWrapper = styled.div`
    height: 50px;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
    width: 100%;

    label {
        font-size: 10px;
        font-weight: 300;
        color: #333;
        text-transform: uppercase;
    }

    input {
        border: none;
        margin: 5px 0;
    }
`;


export const LoginButton = styled.button`
    background-color: purple;
    border: none;
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 15px;
    margin: 30px 0;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 10px;

    &:hover {
        opacity: 0.8;
    }
`