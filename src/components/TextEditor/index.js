import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  IconsContainer,
  TextArea,
  BoldButton,
  ItalicButton,
  UnderLineButton,
  ListItem,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  onClickItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onClickUnderLine = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <BgContainer className="bg-container">
        <IconsContainer className="icons-container">
          <ListItem>
            <BoldButton
              isBold={isBold}
              data-testid="bold"
              onClick={this.onClickBold}
            >
              <VscBold size={25} />
            </BoldButton>
          </ListItem>
          <ListItem>
            <ItalicButton
              isItalic={isItalic}
              data-testid="italic"
              onClick={this.onClickItalic}
            >
              <GoItalic size={25} />
            </ItalicButton>
          </ListItem>
          <ListItem>
            <UnderLineButton
              isUnderline={isUnderline}
              data-testid="underline"
              onClick={this.onClickUnderLine}
            >
              <AiOutlineUnderline size={25} />
            </UnderLineButton>
          </ListItem>
        </IconsContainer>
        <TextArea
          isUnderline={isUnderline}
          isBold={isBold}
          isItalic={isItalic}
          cols="30"
          rows="10"
        />
      </BgContainer>
    )
  }
}

export default TextEditor
