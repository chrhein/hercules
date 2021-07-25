import React from 'react';
import ResumeItem from '../../components/ResumeItem';

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1 className="resumeTitle">Education</h1>
    </div>

    <div className="nine columns main-col">
      <ResumeItem
        header="Master's Degree in Informatics specializing in Visualization"
        location="University of Bergen"
        startDate="August 2020"
        endDate="Present"
        info="A Master's Degree that results in great knowledge and advanced
            skills in visualization, computer graphics, and interactive
            techniques, as well as good skills in related programming."
      />

      <ResumeItem
        header="Bachelor's Degree in Computer Security"
        location="University of Bergen"
        startDate="August 2017"
        endDate="June 2020"
        info="The Bachelor's Degree included both the general Computer
            Science subjects offered by the University of Bergen, as well as a
            specialization in Computer Security."
      />

      <ResumeItem
        header="Initial Compulsory Military Service"
        location="Royal Norwegian Air Force"
        startDate="July 2016"
        endDate="July 2017"
        info="Worked as an operator in an alarm central at Ørland Air Station, in
            shifts of 12 hours a day, 14 days in a row."
      />
    </div>
  </div>
);

export default Education;
