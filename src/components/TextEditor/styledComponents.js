import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  border-radius: 8px;
  width: 50%;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1px solid #f1f5f9;
  padding: 10px;
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: ${props=> {
      if (props.isBold ){
          '#faff00':'#f1f5f9'
      }
      else if(props.isItalic){
        '#faff00':'#f1f5f9'
      }
      else if(props.isunderline){
          '#faff00':'#f1f5f9'
      }
  }};

`

export const TextArea = styled.textarea`
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isunderline ? 'underline' : 'none')};
`
