import styled from "styled-components";

export const ContentWrapper = styled.div`
    background-color: #fff;
    border-radius: 15px;
    height: 100%;
    padding: 25px;
    position: relative;

    h2 {
        margin-bottom: 50px;
    }

    .c-content__new-item{
        position: absolute;
        right: 25px;
        top: 25px;
        height: 50px;
        width: 100px;
        border-radius: 15px;
        border: none;
        background-color: purple;
        color: #fff;
        cursor: pointer;

        &:hover{
            background-color: rebeccapurple;
        }
    }


`;