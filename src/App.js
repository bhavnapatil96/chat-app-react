import './index.css';
import Header from './components/header.js'
import Footer from './components/footer'
import MessageBubble from './components/messageBubble'

function App() {
  return (
    <div className="App h-full">
      <div className="h-full flex flex-col">
        <Header/>
        <MessageBubble/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
