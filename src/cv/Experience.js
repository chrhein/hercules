import React from 'react';
import Fade from 'react-reveal/Fade';

import { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <Fade bottom>
        <div id="erfaring">
          <h2>Erfaring</h2>
          <p id="gruppeleder inf102">
            <h4>
              Gruppeleder INF102, Universitetet i Bergen — 10.2019 - 12.2019
            </h4>
            Gruppeleder i kurset algoritmer, datastrukturer og programmering.
            Ledet gruppetimer i kurset og rettet obligatoriske innleveringer.
          </p>
          <p id="klasseleder">
            <h4>Klasseleder, Universitetet i Bergen — 08.2019</h4>
            Klasseleder for førsteårsstudentene på datasikkerhet. Var med å
            veilede, samt gi studentene en god og relevant start på
            studietilværelsen. Var gjennom et kurs i organisasjon og ledelse i
            forkant av dette.
          </p>
          <p id="åpen dag">
            <h4>
              <i>Åpen dag</i>-medhjelper, Universitetet i Bergen — 02.2018 -
              03.2018
            </h4>
            Hjalp ungdomsskoleelever å programmere roboter ved hjelp av enkel
            kode og iPad-er.
          </p>
          <p id="natvigs minde">
            <h4>
              Arrangementsmedarbeider, Natvigs Minde, Stavanger — 04.2013 -
              07.2020
            </h4>
            Bedriftskomitéen står for planlegging, markedsføring og organisering
            av ulike arrangementer for bedrifter.
          </p>
        </div>
      </Fade>
    );
  }
}

export default Education;
