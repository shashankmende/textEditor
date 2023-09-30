import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


`

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #25263c;
  padding: 15px;
  height: 100vh;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 70%;
  background-color: #1b1c22;
  padding: 20px;

  border-radius: 15px;
`

export const StaticContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: white;
`

export const Image = styled.img`
  width: 60%;
`
