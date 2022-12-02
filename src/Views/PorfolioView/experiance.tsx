import { Label, Line, WorkWrapper, WorkInfoWrapper, WorkTitle, Company, Description } from './index.styled';
import React from 'react';

const exp = [
  {
    date: 'Ongoing',
    title: 'SOFTWARE ENGENEER',
    company: 'Devision Ltd.',
    description: ` Based in Sofia, Bulgaria. Devision provides custom software and product development services using automated delivery and testing
    processes, and an agile approach.`
  },
  {
    date: 'Apr 2022',
    title: 'FRONT-END DEVELOPER',
    company: 'DCSL GuideSmiths',
    description: `DCSL GuideSmiths is a multi-award winning bespoke software development company. DCSL GuideSmiths delivers large scale digital
    transformation, team augmentation, delivery of discrete Agile projects and world class bespoke software using complementary tech including,
    but not limited to, Microsoft .NET, Power BI, React and Node.js. The company’s capabilities also include DevOps proficiency and deployment
    on Azure and AWS. Accredited with Microsoft Gold Partner status, as well as ISO 9001 & ISO 27001, the firm’s highly competitive services are
    leveraged through an optimal blend of international delivery centres either UK-based or nearshore, all operating under DCSL Guidesmiths’
    best practice methodology and with a partnership approach, to generate consistent and superior quality products and services.`
  },
  {
    date: 'July 2021',
    title: 'SOFTWARE DEVELOPER',
    company: 'SportStream Ltd.',
    description: `Soon incoming online sports broadcasting company, Sport Stream will be filming, streaming and packaging highlights for amateur and semiprofessional sports teams and clubs.
    `
  },
  {
    date: 'May 2021',
    title: 'WEB DEVELOPMENT INTERNSHIP',
    company: 'Cartlands Group/ London Magical Tours (LMT)',
    description: 'Three-month internship focused on front and back end web development, coding and editing websites and blogs.'
  }

];

const Experiance: React.FC = () => {
  return (
    <>
      {exp.map(x =>
        <WorkWrapper key={x.company}>
          <Label>{x.date}</Label>
          <WorkWrapper>
            <Line/>
            <WorkInfoWrapper>
              <WorkTitle>{x.title}</WorkTitle>
              <Company>{x.company}</Company>
              <Description>
                {x.description}
              </Description>
            </WorkInfoWrapper>
          </WorkWrapper>
        </WorkWrapper>
      )}
    </>
  );
};

export default Experiance;
