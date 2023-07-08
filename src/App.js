import './App.css';
import Cardclass from './compunents/Cardclass';
import Card from './compunents/Cardfunc';
import reactlogo from"./images/download.png"
import nextlogo from"./images/React-icon.svg.png"
function App() {
  return (
    <div className="App">
     <Card text1="React" text2="Card component 1" text3="these data passed from my parent" logo={reactlogo} />
     <Card text1="React" text2="Card component 1" text3="these data passed from my parent"logo={nextlogo} />
     <hr/>
     <Cardclass  text1="Next" text2="Card component 2" text3="these data passed from my parent" logo={reactlogo}/>
     <Cardclass  text1="Next" text2="Card component 2" text3="these data passed from my parent" logo={nextlogo}/>
    </div>
  );
}

export default App;
