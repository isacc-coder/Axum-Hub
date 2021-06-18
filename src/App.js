
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    //BEM class naming converstions
    <div className="App">
      <Header/>
      <TinderCards/>    
       <SwipeButtons/>
     {/* {Header} */}
     {/* Tinder card */}
     {/* swipeButtons */}
    </div>
  );
}

export default App;
