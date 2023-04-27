import styled from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #5e5cff;
  }
`;

export const Textarea = styled.textarea`
  font-size: 16pt;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #5e5cff;
  }
`;

export const Button = styled.button`
  font-size: 16pt;
  padding: 8px;
  background-color: #ff78b4;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #4a4ac3;
  }

  &:active {
    background-color: #2e2e9c;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 20px auto;
  padding: 24px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
