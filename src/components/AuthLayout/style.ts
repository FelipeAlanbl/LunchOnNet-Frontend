import styled from "styled-components";

export const AuthLayoutContainer = styled.div`
    display: flex;
    height: 100vh;

    .c-auth-Layout__bg {
        background: purple ;
        color: #fff;
    }

    & > div {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const AuthForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`