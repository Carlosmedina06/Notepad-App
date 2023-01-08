import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-weight: bold;
  margin: 20px auto;
  border-radius: 10px;
  padding: 20px;
  background-color: #20232e;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  color: #fff;
  svg {
    width: 30px;
    height: 30px;
  }
  .active {
    border: solid 2px #00a3fe;
    color: #fff;
    border-radius: 10px;
    padding: 5px;
  }
`
export const NavItem = styled.div`
  margin: 0 20px;
`
export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  user-select: none;
`
