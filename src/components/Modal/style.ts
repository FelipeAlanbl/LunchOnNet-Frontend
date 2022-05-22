import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Dialog = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    overflow: hidden;
    min-width: 800px;
    height: fit-content;

    .modal-title {
        background-image: linear-gradient(to right, purple, rebeccapurple);
        color: #fff;
        padding: 15px;
    }

    .modal-body {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .modal-footer {
        padding: 15px;
        display: flex;
        justify-content: flex-end;
        gap: 15px;

        button {
            border: none;
            background-color: #fff;
            height: 40px;
            width: 70px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background: rebeccapurple;
                color: #fff;
            }
        }

        .c-modal__buton-cancel {
            border: 1px solid purple;
            color: purple
        }

        .c-modal__buton-confirm {
            background-color: purple;
            color: #fff;
        }
    }
`;