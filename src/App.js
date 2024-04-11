import './App.css';
import NavigationBar from './screens/navigationBar/NavigationBar';
import Particles from './Particles';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Particles />
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
