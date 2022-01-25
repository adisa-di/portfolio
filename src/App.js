import './App.css';

import img from './assets/images/intro_img.png'
import { TypeWriter } from './components/Typewriter/Typewriter';

function App() {
  return (
    <div className='App'>
      <div className='container_1'>
        <div className='intro'>
          <TypeWriter/>
          <img src={img} alt='intro_img' className='intro_img'/>
        </div>
        <div>
        </div>
      </div>
      <div className='container_2'></div>
    </div>
  );
}

export default App;
