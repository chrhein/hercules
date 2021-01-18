import React from 'react';
import Fade from 'react-reveal/Fade';

const Education = () => (
  <Fade>

    <div className="row education">
      <div className="three columns header-col">
        <h1 className="resumeTitle">
          <span>Education</span>
        </h1>
      </div>

      <div className="nine columns main-col">
        <div className="row item">
          <div className="twelve columns">
            <h3 className="resumeHeader">Master&apos;s Degree in Informatics specializing in Visualization</h3>
            <p className="info">
              University of Bergen
              <span className="bullet">&bull;</span>
              <em className="date">August 2020 - Present</em>
            </p>

            <p className="resumeParagraph">
              A Master&apos;s Degree that results in great knowledge and advanced skills in visualization, computer
              graphics, and interactive techniques, as well as good skills in related programming.
            </p>
          </div>
        </div>

        <div className="row item">
          <div className="twelve columns">
            <h3 className="resumeHeader">Bachelor&apos;s Degree in Computer Security</h3>
            <p className="info">
              University of Bergen
              <span className="bullet">&bull;</span>
              <em className="date">August 2017 - June 2020</em>
            </p>

            <p className="resumeParagraph">
              The Bachelor&apos;s Degree included both the general Computer Science subjects offered by the University
              of
              Bergen, as well as a specialization in Computer Security.
            </p>
          </div>
        </div>
        <div className="row item">
          <div className="twelve columns">
            <h3 className="resumeHeader">Initial Compulsory Military Service</h3>
            <p className="info">
              Royal Norwegian Air Force
              <span className="bullet">&bull;</span>
              <em className="date">July 2016 - July 2017</em>
            </p>

            <p className="resumeParagraph">
              Worked as an operator in an alarm central at Ørland Air Station, in shifts of 12 hours a day, 14 days in a
              row.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Fade>

);

export default Education;