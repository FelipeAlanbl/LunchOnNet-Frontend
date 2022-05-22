import styled from "styled-components";

export const TableModel = styled.table`
    width: 100%;
    border-collapse: collapse;

    thead tr {
        height: 30px;
        font-size: 18px;
        background-color: purple;
        text-align: left;
        color: #fff;
    }

    thead tr th {
        padding: 15px;
    }
    
    tbody tr:nth-child(odd){
        background-color: #eee;
    }

    tbody tr td {
        padding: 10px 15px;
    }

    .actions {
        display: flex;
    }
`;