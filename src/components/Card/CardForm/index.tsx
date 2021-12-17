import styled from 'styled-components';

export const CardForm = styled.div`
  position: relative;
  top: 150px;
  width: 500px;
  background: #C0D1B8;
  margin-left: auto;
  margin-right: auto;
  padding: 12px;
  border: 5px solid;
  border-image: linear-gradient(270deg, #12FA8C, #019AFA 100%) 1;

  @media (max-width: 750px) {
    width: 96%;
    padding: 0px;
  }
`;