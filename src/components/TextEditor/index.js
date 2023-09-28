import {Component} from 'react'
import './index.css'
import {VscBold} from 'react-icons/vs'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {BgContainer, IconsContainer, TextArea} from './styledComponents'

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

  onClickItalic = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <BgContainer className="bg-container">
        <IconsContainer className="icons-container">
          <Button isBold={isBold} data-testid="bold" onClick={this.onClickBold}>
            <VscBold size={25} />
          </Button>
          <Button isItalic={isItalic} data-testid="bold">
            <GoItalic size={25} />
          </Button>
          <Button isUnderline={isUnderline} data-testid="bold">
            <AiOutlineUnderline size={25} />
          </Button>
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
