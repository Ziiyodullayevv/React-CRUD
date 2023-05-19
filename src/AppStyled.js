import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  width: 90%;
`;

export const Table = styled.table`
  width:100%;
  text-align: center;
  box-sizing: content-box;
`;

export const Td = styled.td`
  padding: 1rem;
`;

export const Tr = styled.tr`
  :hover {
    background-color: #3333;
    transition: all .2s ease;
  }
`;

export const Button = styled.button`
  border: transparent;
  background-color: transparent;
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.color};
  border-radius: 5px;
  border: 1px solid ${props => props.color};
  :hover {
    color: purple;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  font-size: 1rem;
  border-radius: 5px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding:0 0 20px 0;
`;
