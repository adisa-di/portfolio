import './App.css';

import img from './assets/images/intro_img.png'
import { Header, Title, Normal } from './components/Text';
import { TypeWriter } from './components/Typewriter/Typewriter';

function App() {
  return (
    <div className='App'>
      <div className='container_1'>
        <div className='intro'>
          <TypeWriter text="Hi there, I'm Adisa"/>
          <img src={img} alt='intro_img' className='intro_img'/>
        </div>
        <div>
          {/* <div>Hello</div> */}
          <Header text="ADISA NARULA"/>
          <Title text="Full-Stack Engineer"/>
          <div className="paragraph">
            <Normal text="Thanks for stopping by. Here's some quick info about me:  I'm a Full-Stack Engineer with experiences working in React + Redux, Typescript, and Javascript, among other technologies. 
                          Some of my favorite things in life include my Boston Terrier, hiking, and making pizza. If you would like to know more, feel free to browse around and reach out."
            />
          </div>
        
          {/* <div>Full Stack Engineer</div>
          <div>Hello! Welcome to my portfolio. Feel free to browse around and reach out if you have any questions! </div>
          <div>Social Icon</div>
          <div>See work button</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
