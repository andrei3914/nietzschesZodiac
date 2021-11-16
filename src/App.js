import Welcome from './components/Welcome/Welcome';
import Carduri from './components/Carduri/Carduri';
import citate from './components/Misc/citateNietzsche';
import Final from './components/Final/Final';
import './App.css';

function App() {
  const afisCitat = () => {  
       document.getElementById("afisare").innerHTML = citate[Math.floor(Math.random()* citate.length)];
  }

  const cireasaDePeTort = () => {
    document.getElementById("cireasa").innerHTML = "Nietzsche prostuț ești!";
  }

  return (
    <div className="App">
     <Welcome />
     <Carduri afisCitat={afisCitat}/>
     <Final cireasaDePeTort={cireasaDePeTort}/>
    </div>
  );
}

export default App;
