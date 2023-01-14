import styled from 'styled-components'

export const Container = styled.article`
  margin: 5rem auto;
  padding: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`
export const CardNote = styled.div`
  display: flex;
  margin: 0 auto;
  min-width: 80%;
  max-width: 80%;
  min-height: 100px;
  max-height: max-content;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bgContainer};
  justify-content: space-between;
`
export const Content = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  text-align: start;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
  margin: 0 10px 0px 0;
`
export const Button = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  cursor: pointer;
`
export const NotNote = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  user-select: none;
`
