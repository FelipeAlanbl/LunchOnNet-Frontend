import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    div {
        flex: 1;
        border-radius: 15px;
        height: 150px;
        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3);
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        p {
            text-align: right;
            color: #fff;
        }
        
        .card-title{
            font-size: 24px;   
        }

        .card-content {
            font-size: 50px;
        }

        svg {
            position: absolute;
            top: 15px;
            left: 15px;
            color: #fff;
            font-size: 60px;
        }
    }
`;