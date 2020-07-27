import React from 'react';
import Fade from 'react-reveal/Fade';

import { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <Fade bottom>
        <div id="verv">
          <h2>Verv</h2>
          <p id="bedkom">
            <h4>Medlem, Bedriftskomitéen – Bedkom, Bergen — 03.2020 - d.d</h4>
            Bachelorgrad ved Institutt for Informatikk i Bergen. Studiet tok for
            seg både de generelle informatikkfagene som universitetet tilbyr, i
            tillegg til en spesialisering innenfor datasikkerhet.
          </p>
          <p id="tilde">
            <h4>Medlem, Tilde, Bergen — 01.2019 - d.d.</h4>
            Tilde er en arbeidsgruppe bestående av studenter underlagt
            fagutvalget echo, med fokus på å arrangere og gjennomføre sosiale
            arrangementer på Institutt for Informatikk.
          </p>
        </div>
      </Fade>
    );
  }
}

export default Education;
