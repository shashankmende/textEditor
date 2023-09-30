import TextEditor from './components/TextEditor'

import {
  GlobalStyle,
  BgContainer,
  MiddleContainer,
  StaticContainer,
  Heading,
  Image,
} from './styledComponents'

const App = () => (
  <>
    <GlobalStyle />
    <BgContainer>
      <MiddleContainer>
        <StaticContainer>
          <Heading>Text Editor</Heading>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
            className="image"
          />
        </StaticContainer>
        <TextEditor />
      </MiddleContainer>
    </BgContainer>
  </>
)

export default App
