import styled from 'styled-components';


export const Card = styled.div`
  position: relative;
  top: 150px;
  width: 500px;
  background: #C0D1B8;
  margin-left: auto;
  margin-right: auto;
  padding: 6px;
  border: 5px solid;
  border-image: linear-gradient(270deg, #12FA8C, #019AFA 100%) 1;

  @media (max-width: 750px) {
    width: 96%;
    padding: 0px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6px;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 18px;
`;

export const UserIcon = styled.img`
  width: 120px;
  border-radius: 100%;
  float: right;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  height: 30px;
  width: 99%;
`;

export const ClickHere = styled.p`
  color: #000000;
  float: right;
`;

export const SaveInput = styled.input`
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  border: none;
  background: #019AFA;
  color: #fff;
`;