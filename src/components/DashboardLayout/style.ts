import styled from "styled-components";

export const DashboardContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-areas: "header header header"
                         "menu content content"
                         "menu content content";
    grid-template-rows: 80px 1fr 1fr;
    grid-template-columns: 250px 1fr 1fr;

    .content {
        grid-area: content;
        background-color: #EFF1F7;
        padding: 25px;
    }
`;