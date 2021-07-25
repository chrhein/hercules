import React from 'react';
import ResumeItem from '../../components/ResumeItem';

const Experience = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1 className="resumeTitle">Experience</h1>
    </div>

    <div className="nine columns main-col">
      <ResumeItem
        header="Summer Intern"
        location="Bekk"
        startDate="June 2021"
        endDate="July 2021"
        info="Summer Intern at Bekk in Oslo. Worked with further development at 
        Entur's Tavla, a website that allows the users to create a personal transport 
        information board which collects public transport data from most public 
        transport companies in Norway and presents this information in a user-friendly 
        way."
      />

      <ResumeItem
        header="Student Mentor"
        location="University of Bergen"
        startDate="August 2020"
        endDate="June 2021"
        info="Student Mentor for the first-year Computer Security students. Helped
            the students become academically and socially integrated with their
            studies and in the study environment, and made the transition from
            upper secondary school to the university easier."
      />

      <ResumeItem
        header="Event Staff"
        location="Natvigs Minde"
        startDate="April 2013"
        endDate="July 2020"
        info="Helped arrange everything from weddings to confirmations and
            teambuildings."
      />

      <ResumeItem
        header="Teacher Assistant"
        location="University of Bergen"
        startDate="October 2019"
        endDate="December 2019"
        info='Guided students in the subject "INF102 - Algorithms, Data
            Structures and, Programming" by helping them program in Java
            and correct their mandatory assignments.'
      />

      <ResumeItem
        header="Class Leader"
        location="University of Bergen"
        startDate="August 2018"
        endDate="August 2018"
        info="Class Leader for the first-year Computer Security students. Gave the
            students a good and relevant start to their studies."
      />

      <ResumeItem
        header="Student Representative"
        location="University of Bergen"
        startDate="February 2018"
        endDate="March 2018"
        info='I taught students from secondary schools visiting the university to
            program robots using simple code blocks and tablets during the
            "Åpen dag 2018" events.'
      />
    </div>
  </div>
);

export default Experience;
