import React from 'react';
import Fade from 'react-reveal/Fade';

import { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <Fade bottom>
        <div id="utdanning">
          <h2>Utdanning</h2>
          <p id="bachelor">
            <h4>
              Bachelorgrad i datasikkerhet, Universitetet i Bergen — 08.2017 -
              06.2020
            </h4>
            Bachelorgrad ved Institutt for Informatikk i Bergen. Studiet tok for
            seg både de generelle informatikkfagene som universitetet tilbyr, i
            tillegg til en spesialisering innenfor datasikkerhet.
          </p>
          <p id="forsvaret">
            <h4>Luftforsvaret, Ørland flystasjon — 07.2016 - 07.2017</h4>
            Operatør i lokalt alarmmottak. I tillegg til dette var jeg
            hovedtillitsvalgt for basetroppen på Ørland, og fungerte som
            bindeleddet mellom soldater og befal.
          </p>
        </div>
      </Fade>
    );
  }
}

export default Education;
