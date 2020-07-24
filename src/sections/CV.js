import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import markdownRenderer from '../components/MarkdownRenderer';

import { Fragment, Component } from 'react';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondaryLight"
      height={['50vh', '10vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 20%;
  }
`;

class CV extends Component {
  render() {
    return (
      <Section.Container id="CV" Background={Background}>
        <Section.Header name="CV" icon="🙋‍♂️" label="person" />
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
          <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
            <Fade bottom>
              <div id="utdanning">
                <h2>Utdanning</h2>
                <p id="bachelor">
                  <h4>
                    Bachelorgrad i datasikkerhet, Universitetet i Bergen —
                    08.2017 - 06.2020
                  </h4>
                  Bachelorgrad ved Institutt for Informatikk i Bergen. Studiet
                  tok for seg både de generelle informatikkfagene som
                  universitetet tilbyr, i tillegg til en spesialisering innenfor
                  datasikkerhet.
                </p>
                <p id="forsvaret">
                  <h4>Luftforsvaret, Ørland flystasjon — 07.2016 - 07.2017</h4>
                  Arbeidet med å overvåke flystasjonen fra et kommandosenter. I
                  tillegg til dette var jeg hovedtillitsvalgt for basetroppen på
                  Ørland, og fungerte som bindeleddet mellom soldater og befal.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <br />
              <div id="erfaring">
                <h2>Erfaring</h2>
                <p id="gruppeleder inf102">
                  <h4>
                    Gruppeleder INF102, Universitetet i Bergen — 10.2019 -
                    12.2019
                  </h4>
                  Gruppeleder i kurset algoritmer, datastrukturer og
                  programmering. Ledet gruppetimer i kurset og rettet
                  obligatoriske innleveringer.
                </p>
                <p id="klasseleder">
                  <h4>Klasseleder, Universitetet i Bergen — 08.2019</h4>
                  Klasseleder for førsteårsstudentene på datasikkerhet. Var med
                  å veilede, samt gi studentene en god og relevant start på
                  studietilværelsen. Var gjennom et kurs i organisasjon og
                  ledelse i forkant av dette.
                </p>
                <p id="åpen dag">
                  <h4>
                    <i>Åpen dag</i>-medhjelper, Universitetet i Bergen — 02.2018
                    - 03.2018
                  </h4>
                  Hjalp ungdomsskoleelever å programmere roboter ved hjelp av
                  enkel kode og iPad-er.
                </p>
                <p id="natvigs minde">
                  <h4>
                    Arrangementsmedarbeider, Natvigs Minde, Stavanger — 04.2013
                    - 07.2020
                  </h4>
                  Bedriftskomitéen står for planlegging, markedsføring og
                  organisering av ulike arrangementer for bedrifter.
                </p>
              </div>
            </Fade>
            <Fade bottom>
              <br />
              <div id="verv">
                <h2>Verv</h2>
                <p id="bedkom">
                  <h4>
                    Medlem, Bedriftskomitéen – Bedkom, Bergen — 03.2020 - d.d
                  </h4>
                  Bachelorgrad ved Institutt for Informatikk i Bergen. Studiet
                  tok for seg både de generelle informatikkfagene som
                  universitetet tilbyr, i tillegg til en spesialisering innenfor
                  datasikkerhet.
                </p>
                <p id="tilde">
                  <h4>Medlem, Tilde, Bergen — 01.2019 - d.d.</h4>
                  Tilde er en arbeidsgruppe bestående av studenter underlagt
                  fagutvalget echo, med fokus på å arrangere og gjennomføre
                  sosiale arrangementer på Institutt for Informatikk.
                </p>
              </div>
              <br />
            </Fade>
          </Box>
          <Box
            width={[1, 1, 2 / 6]}
            style={{ maxWidth: '300px', margin: 'auto' }}
          >
            <Fade right></Fade>
          </Box>
        </Flex>
      </Section.Container>
    );
  }
}

export default CV;
