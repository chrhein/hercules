import React from 'react';
import { TextLink } from '../../components/LinkAnimated';
import ResumeItem from '../../components/ResumeItem';

const VolunteerExperience = () => (
  <div className="row volunteer">
    <div className="three columns header-col">
      <h1 className="resumeTitle">Volunteer Experience</h1>
    </div>

    <div className="nine columns main-col">
      <ResumeItem
        header="Developer"
        location="echo karriere"
        startDate="September 2020"
        endDate="Present"
        info="echo karriere is the student organization behind the career day for
            IT students in Bergen. Develops a full-stack solution for handling
            the career day, as well as the website for echo karriere."
      />

      <ResumeItem
        header="Member"
        location="Bedkom"
        startDate="March 2020"
        endDate="Present"
        info="Bedkom is a sub-group of the student association echo and offers
            assistance with planning, marketing, and organizing various
            corporate events for the students."
      />

      <ResumeItem
        header="Student Representative"
        location="@informatikk_uib on Instagram"
        startDate="November 2019"
        endDate="Present"
        info="Posting photos to show present and future students what it is like
            to be a student."
      />

      <ResumeItem
        header="Member"
        location="echo Tilde"
        startDate="January 2019"
        endDate="Present"
        info="echo Tilde is a sub-group of the student association echo and is
            responsible for events for the students at the Institute of
            Informatics. My job is to plan and conduct events and achieve our
            goal to strengthen the social environment among the students."
      />

      <ResumeItem
        header="Student Deputy Member"
        location="Institute Council at the Department of Informatics"
        startDate="August 2020"
        endDate="June 2021"
        info="The Institute Council has the opportunity to influence the subjects
            and study programs in the department."
      />

      <ResumeItem
        header="Member"
        location="Elected Representative"
        startDate="October 2016"
        endDate="July 2017"
        info="I was the elected representative for my troop and served as a link
            between the soldiers and officers."
      />
    </div>
  </div>
);

export default VolunteerExperience;
