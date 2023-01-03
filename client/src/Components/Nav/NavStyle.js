import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 20px auto;
  border: solid 2px black;
  border-radius: 10px;
  padding: 10px;
  .active {
    background-color: black;
    color: white;
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
