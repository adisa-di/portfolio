import React from 'react';
import { Item } from '../ Item/Item';
import './Resume.css';

const Resume = () => {
  return (
    <div className='resume'>
      {/* <div className='experiences_title'>Experiences</div> */}
      <div>
        <Item experience="Courier Health"
              note="Freelance"
              date="Oct 2020 - May 2021"
              contents={[
                "Devliered Courier Health’s MVP Patient Therapy Engagemnt System written in React, TypeScript and AWS Amplify.",
                "Implemented pixel-perfect user interfaces from bare bone wireframes for Courier Health’s core features including the Case Manager dashboard, patients’ profile page, and the resource library manager.",
                "Strategically involved in the design and implementation process of the product by consulting on best UX practices during initial design phases."
              ]}
              />
        <Item experience="Sunshine Permaculture"
              note="Volunteer"
              date="Sept 2020 - Dec 2021"
              contents={[
                "Assisted in establishing an organic farm in Chiang Mai, Thailand, with the aim of creating a resilient and sustainable food system for local communities."
              ]}
              />
        <Item experience="ActionIQ"
              note="New York City"
              date="Oct 2018 - Mar 2020"
              contents={[
                "Led a data visualization project to create complex React components that hooked into live data streams from ideation to implementation and delivery.", 
                "Assumed the role of Agile Scrum Master and worked closely with the Product and UX team to identify, prioritize, and groom upcoming features and JIRA tickets.", 
                "Implemented third party API integrations and authentication libraries in Scala for clients to target advertising campaigns to large groups of users via channels such as Twitter and Snapchat.", 
                "Improved runtime of Luigi tasks by improving Redshift queries, which resulted in decreasing the execution time of the process from approximately two hours to fifteen minutes.", 
                "Enhanced the complex ActionIQ interface by adding the ability for users to easily edit previously constructed marketing campaigns.", 
                "Collaborated across multiple teams to create a new Full Stack feature which provided clients insights into the enormous amounts of data being processed in the ActionIQ platform on a daily basis. "
              ]}
              />
        <Item experience="Blackrock"
              note="New York City"
              date="Aug 2017 - Oct 2018"
              contents={[
                "Developed a next generation portfolio modeling and risk analytics tool written in AngularJS that allowed users to have a more holistic insight into their portfolio holdings.",
                "Implemented a project which enabled super-users to create global analytic templates that become accessible in all client environments which greatly enhanced the client’s overall experience on the platform.", 
                "Enhanced BlackRock’s Query Language, in ANTLR and Java which reduced the redundancy in the database and increased ease of compliance rule integration and creation in the platform."
                ]} 
              />
      </div>
    </div>
  );
}

export { Resume };