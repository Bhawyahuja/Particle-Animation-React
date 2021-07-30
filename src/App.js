import ParcticleBackground from './ParticleBackground';

import './App.css';

function App() {
  return (
    <div className="App">
      <ParcticleBackground/>
      <TitleCSS /> 
    </div>
  );
  function TitleCSS() {
    return(
      <div id= "text_div" >
        <div className= "center_all" >
          <h1 className="title_text" >WELCOME!</h1>
        </div>
        <p className="hover_text" >Hover mouse to enjoy particle effect</p>
      </div>
    )
  }
}

export default App;
