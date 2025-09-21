
import './App.css'
import A from './Components/A'
import D from './Components/D'
import MessageProvider, { MessageContext } from './store/MessageContext'

function App() {
  return (
    <>

      <MessageProvider>
        <A />
        <D />
      </MessageProvider>

      {/* <D /> */}
    </>
  )
}

export default App