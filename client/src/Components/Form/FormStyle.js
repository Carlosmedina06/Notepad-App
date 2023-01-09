import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 5rem auto;
  padding: 20px 50px;
  background-color: ${({ theme }) => theme.bgContainer};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  label {
    font-weight: bold;
  }
`

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
export const Input = styled.input`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgInput};
  box-shadow: ${({ theme }) => theme.boxShadowInput};
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  max-width: 190px;
  transition: 0.4s;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowInputHover};
  }
  &:focus {
    box-shadow: 0 0 0 0.15vw skyblue;
  }
`

export const TextArea = styled.textarea`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgInput};
  box-shadow: ${({ theme }) => theme.boxShadowInput};
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  max-width: 190px;
  resize: none;
  transition: 0.4s;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowInputHover};
  }
  &:focus {
    box-shadow: 0 0 0 0.15vw skyblue;
  }
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #00a3fe;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #fff;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
    transition: 0.4s;
    background-color: #20232e;
  }
`
