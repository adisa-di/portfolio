import './App.css';

import { SiGmail } from 'react-icons/si';
import { Card } from './components/Card/Card';
import { Icon } from './components/Icon/Icon';
import img from './assets/images/intro_img.png';
import { Spacer } from './components/Spacer/Spacer';
import { Resume } from './components/Resume/Resume';
import { Title, Normal } from './components/Text';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import { SiReact, SiJavascript, SiTypescript, SiScala, SiPython, SiAmazonaws } from 'react-icons/si';
import { TypeWriter } from './components/Typewriter/Typewriter';

// icons
import icon_skills from './assets/images/card-icon-skills.png';
import icon_educ from './assets/images/card-icon-education.png';
import icon_projs from './assets/images/card-icon-projects.png';
import { ProgressBar } from './components/ProgressBar/ProgressBar';


function App() {
  return (
    <div className='App'>
      <div className='section_1'>
        <div className='intro'>
          <TypeWriter text="Hi there, I'm Adisa"/>
          <img src={img} alt='intro_img' className='intro_img'/>
        </div>
        <div className='info'> 
          <Title text="Full-Stack Engineer"/>
          <div className="paragraph">
            <Normal text="Thanks for stopping by. Here's some quick info about me:  I'm a Full-Stack Engineer with experiences working in React + Redux, Typescript, and Javascript, among other technologies. 
                          Feel free to browse around and reach out!"/>
          </div>
          <Spacer spacing="30px"/>
          <Icon link="https://github.com/adisa-di">
            <FaGithubAlt/>
          </Icon>
          <Icon link="https://www.linkedin.com/in/adisanarula/">
            <FaLinkedinIn/>
          </Icon>
          <Icon link="mailto:adisanarula19@gmail.com">
            <SiGmail/>
          </Icon>
          <Spacer spacing="30px"/>
          {/* <Button text="SEE MY WORK"/> */}
        </div>
      </div>
      <div className='section_2'>
        <Resume/>
        <div className='info_cards'>
          <Card
            height="150px"
            title="Skills"
            icon={icon_skills}
            description="Take a look at the skills I've learned over the last few years">
              <div className='skill_container'>
                <div className='skill_icon'>
                  <SiReact/>
                </div>
                <ProgressBar progress={4}/>
              </div>
              <div className='skill_container'>
                <div className='skill_icon'>
                  <SiJavascript/>
                </div>
                <ProgressBar progress={4}/>
              </div>
              <div className='skill_container'>
                <div className='skill_icon'>
                  <SiTypescript/>
                </div>
                <ProgressBar progress={3}/>
              </div>
              <div className='skill_container'>
                <div className='skill_icon'>
                  <SiScala/>
                </div>
                <ProgressBar progress={2}/>
              </div>
              <div className='skill_container'>
                <div className='skill_icon'>
                  <SiPython/>
                </div>
                <ProgressBar progress={3}/>
              </div>
              <div className='skill_container'>
                <div className='skill_icon'>
                  <SiAmazonaws/>
                </div>
                <ProgressBar progress={2}/>
              </div>
            </Card>
          <Card
            title="Projects"
            icon={icon_projs}
            description="">
            <span>
              Check out some of the projects I've worked on on my <a href='https://github.com/adisa-di' target="_blank" rel="noreferrer">Github</a> profile
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
