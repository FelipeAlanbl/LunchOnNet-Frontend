import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: header;
    padding-right: 30px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
    z-index: 10;

    .logo {
        flex-basis: 250px;
        display: flex;
        justify-content: center;
    }
`;

export const AuthUser = styled.div`
    position: relative;
    color: #000;
    
    .c-avatar {
        cursor: pointer;
        width: 60px;
        height: 60px;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .c-menu-user {
        position: absolute;
        bottom: -140%;
        right: 0;
        background-color: purple;
        width: 150px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
        display: none;
        height: fit-content;
        transition: all 0.3s;

        li {
            padding: 10px;
            border-bottom: 1px solid #ccc;
            display: flex;
            align-items: center;

            a, span {
                color: #fff;
                cursor: pointer;
            }
        }

        &.show {
            display: block;
        }
    }
`;