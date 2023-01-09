import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.text};
  margin: 50px 40px 0 40px;
`

export const Footerheader = styled.div`
  color: ${({ theme }) => theme.text};
  letter-spacing: 2.5px;
  text-align: center;
  margin-top: 20px;
`

export const FooterContent = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 10px;
  svg {
    color: ${({ theme }) => theme.text};
    height: 50px;
  }
  p {
    letter-spacing: 2.5px;
    text-decoration: underline;
    font-size: 12px;
    color: ${({ theme }) => theme.text};
  }
`
