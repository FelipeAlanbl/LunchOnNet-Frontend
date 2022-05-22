import styled from "styled-components";

export const TypeUserWrapper = styled.div`
  display: flex;
  gap: 5px;

  label {
    width: 50%;
    border: 1px solid purple;
    height: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: purple;
    cursor: pointer;
  }

  input[type="radio"] {
      display: none;
  }

  input[type="radio"]:checked + label {
    background-color: purple;
    color: #fff;
  }
`;
