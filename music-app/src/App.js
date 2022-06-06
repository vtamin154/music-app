import { useState } from 'react';
import './App.css';
// import Login from './components/Login';
import Home from './pages/Home';
// import AudioList from './components/AudioList';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import SearchInput from './components/SearchInput';
// import Tabs from './components/Tabs';
function App() {
  // const [list, setList] = useState(false);

  // const onBackButtonPress = () => {
  //   setList(false);
  // };
  // const code = new URLSearchParams(window.location.search).get('code');
  return (
    
    <div className="App m-20">
      <Home/>
    </div>
  );
}

export default App;
