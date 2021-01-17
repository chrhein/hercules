import React from 'react';

const VolunteerExperience = () => (
  <div className="row volunteer">
    <div className="three columns header-col">
      <h1 className="resumeTitle">
        <span>Volunteer Experience</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3 className="resumeHeader">Developer</h3>
          <p className="info">
            echo karriere
            <span className="bullet">&bull;</span>
            <em className="date">September 2020 - Present</em>
          </p>

          <p className="resumeParagraph">
            echo karriere is the student organization behind the career day for IT students in Bergen. Develops a
            full-stack solution for handling the career day, as well as the website for echo karriere.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3 className="resumeHeader">Student Deputy Member</h3>
          <p className="info">
            Institute Council at the Department of Informatics
            <span className="bullet">&bull;</span>
            <em className="date">August 2020 - Present</em>
          </p>

          <p className="resumeParagraph">
            The Institute Council has the opportunity to influence the subjects and study programs in the department.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3 className="resumeHeader">Member</h3>
          <p className="info">
            Bedkom
            <span className="bullet">&bull;</span>
            <em className="date">March 2020 - Present</em>
          </p>

          <p className="resumeParagraph">
            Bedkom is a sub-group of the student association echo and offers assistance with planning, marketing, and
            organizing various corporate events for the students.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3 className="resumeHeader">Student Representative</h3>
          <p className="info">
            @informatikk_uib on Instagram
            <span className="bullet">&bull;</span>
            <em className="date">November 2019 - Present</em>
          </p>

          <p className="resumeParagraph">
            Posting photos to show present and future students what it is like to be a student. Our Instagram account
            can be found 
            {' '}
            <a href="https://www.instagram.com/informatikk_uib/">here</a>
            .
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3 className="resumeHeader">Member</h3>
          <p className="info">
            echo Tilde
            <span className="bullet">&bull;</span>
            <em className="date">January 2019 - Present</em>
          </p>

          <p className="resumeParagraph">
            echo Tilde is a sub-group of the student association echo and is responsible for events for the students at the
            Institute of Informatics. My job is to plan and conduct events and achieve our goal to strengthen the social
            environment among the students.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3 className="resumeHeader">Elected Representative</h3>
          <p className="info">
            Basetroppen Ørland Air Station
            <span className="bullet">&bull;</span>
            <em className="date">October 2016 - July 2017</em>
          </p>

          <p className="resumeParagraph">
            I was the elected representative for my troop and served as a link between the soldiers and officers.
          </p>
        </div>
      </div>

    </div>
  </div>
);

export default VolunteerExperience;