import styled from "styled-components";

export const MenuContainer = styled.nav`
    grid-area: menu;
    background-color: purple;

    ul {
        margin-top: 30px;
    }

    li {
        height: 40px;
        
        svg {
            margin-right: 10px;
        }
    }

    a {
        color: #fff;
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 30px;
    }

    a:hover {
        background-color: rebeccapurple;
    }
`;