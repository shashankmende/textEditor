import './App.css'
import TextEditor from './components/TextEditor'

// Replace your code here
const App = () => (
    <div className='bg-container'>
        <div className='middle-container'>
            <div className='static-container'>
                <h1 className='heading'>Text Editor</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/text-editor-img.png' alt='text editor'
                    className='image'
                />

            </div>
            <TextEditor/>

            </div>
        </div>
    </div>
)

export default App
