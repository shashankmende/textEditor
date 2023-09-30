import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *:focus {
        outline:none;
    }

`

export const BgContainer = styled.div`
  background-color: #25262c;
  border-radius: 8px;
  width: 50%;

  display: flex;
  flex-direction: column;
  height: 90%;
`

export const IconsContainer = styled.ul`
  display: flex;
  flex-direction: row;

  padding: 10px;
  border-bottom: 1px solid #cbd5e1;
`
export const ListItem = styled.li`
  list-style-type: none;
`

export const BoldButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isBold ? '#faff00' : '#f1f5f9')};
`

export const ItalicButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isItalic ? '#faff00' : '#f1f5f9')};
`

export const UnderLineButton = styled.button`
  border: none;
  background-color: transparent;

  color: ${props => (props.isUnderline ? '#faff00' : '#f1f5f9')};
`

export const TextArea = styled.textarea`
  font-size: 20px;
  padding: 10px;
  background-color: transparent;
  border: none;
  height: 100%;
  color: white;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
`
