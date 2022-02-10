import './App.css';

import { SiGmail } from 'react-icons/si';
import { Card } from './components/Card/Card';
import { Icon } from './components/Icon/Icon';
import img from './assets/images/intro_img.png';
import { Spacer } from './components/Spacer/Spacer';
import { Resume } from './components/Resume/Resume';
import { Header, Title, Normal } from './components/Text';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { TypeWriter } from './components/Typewriter/Typewriter';

// icons
import icon_skills from './assets/images/card-icon-skills.png';
import icon_educ from './assets/images/card-icon-education.png';
import icon_projs from './assets/images/card-icon-projects.png';


function App() {
  return (
    <div className='App'>
      <div className='section_1'>
        <div className='intro'>
          <TypeWriter text="Hi there, I'm Adisa"/>
          <img src={img} alt='intro_img' className='intro_img'/>
        </div>
        <div className='info'> 
          <Header text="ADISA NARULA"/>
          <Title text="Full-Stack Engineer"/>
          <div className="paragraph">
            <Normal text="Thanks for stopping by. Here's some quick info about me:  I'm a Full-Stack Engineer with experiences working in React + Redux, Typescript, and Javascript, among other technologies. 
                          Feel free browse around and reach out!"/>
          </div>
          <Spacer spacing="30px"/>
          <Icon link="https://github.com/adisa-di">
            <FaGithubAlt/>
          </Icon>
          <Icon link="https://www.linkedin.com/in/adisanarula/">
            <FaLinkedinIn/>
          </Icon>
          <Icon link="mailto:adisan19@gmail.com">
            <SiGmail/>
          </Icon>
          <Spacer spacing="30px"/>
          {/* <Button text="SEE MY WORK"/> */}
        </div>
      </div>
      <div className='section_2'>
        <Resume/>
        <div className='info_cards'>
          <Card title="Skills" icon={icon_skills}/>
          <Card title="Projects" icon={icon_educ}/>
          <Card title="Education" icon={icon_projs}/>
        </div>
      </div>
    </div>
  );
}

export default App;
