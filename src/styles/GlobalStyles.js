import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-display: swap;
    overflow-x: hidden;
    width: 100vw;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryText};
    height: 100%;
    z-index: -5;
  }

  .macbook {
    transition-property: fill;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
  }

  .macbook:hover {
    fill: ${({ theme }) => theme.colors.inverted};
    stroke: ${({ theme }) => theme.colors.primary};
  }

  .sectionTitle {
    color: ${({ theme }) => theme.colors.header};
    font-weight: bold;
    // text-transform: uppercase;
    font-size: 45px;
    text-align: center;
    padding-bottom: 24px;

  }

  .resumeTitle {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-weight: 200;
    // text-transform: uppercase;
    font-size: 34px;
    text-align: left;
  }

  .resumeHeader {
    color: ${({ theme }) => theme.colors.primaryText};
    margin-top: 28px;
  }

  .resumeParagraph {
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: large;
    line-height: 2em;
  }

  .info {
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  
  

  a {
    text-decoration: none;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0px;
    color: ${({ theme }) => theme.colors.secondary};
    transition: 0.4s;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      width: 0;
      bottom: -2px;
      background: ${({ theme }) => theme.colors.secondaryLight};
      color: ${({ theme }) => theme.colors.secondaryLight};
      height: 0px;
      transition-property: width;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }


    &:focus:after,
    &:hover:after {
      left: 0;
      right: auto;
      width: 100%;
    }
  }

  h1 {
    font-size: 38px;
    line-height: 42px;
    margin-bottom: 12px;
    letter-spacing: -1px;
  }

  h2 {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 6px;
  }

  h3 {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 6px;
  }

  h5 {
    font-size: 18px;
    line-height: 30px;
  }

  h6 {
    font-size: 14px;
    line-height: 30px;
  }

  p {
    margin: 0 0 30px 0;
  }

  p img {
    margin: 0;
  }

  p.lead {
    font: 19px/36px 'opensans-light', sans-serif;
    margin-bottom: 18px;
  }

  /* for 'em' and 'strong' tags, font-size and line-height should be same with
  the body tag due to rendering problems in some browsers */

  em {
    font: 15px/30px 'opensans-italic', sans-serif;
  }

  strong, b {
    font: 15px/30px 'opensans-bold', sans-serif;
  }

  small {
    font-size: 11px;
    line-height: inherit;
  }

  /* Fix for odd Mozilla border & padding issues */

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .row {
    width: 96%;
    max-width: 1020px;
    margin: 0 auto;
  }

  /* fixed width for IE8 */

  .ie .row {
    width: 1000px;
  }

  .narrow .row {
    max-width: 980px;
  }

  .row .row {
    width: auto;
    max-width: none;
    margin: 0 -20px;
  }

  /* row clearing */

  .row:before,
  .row:after {
    content: " ";
    display: table;
  }

  .row:after {
    clear: both;
  }

  .column, .columns {
    position: relative;
    padding: 0 20px;
    min-height: 1px;
    float: left;
  }

  .column.centered, .columns.centered {
    float: none;
    margin: 0 auto;
  }

  /* removed gutters */

  .row.collapsed > .column,
  .row.collapsed > .columns,
  .column.collapsed, .columns.collapsed {
    padding: 0;
  }

  [class*="column"] + [class*="column"]:last-child {
    float: right;
  }

  [class*="column"] + [class*="column"].end {
    float: right;
  }

  /* column widths */

  .row .one {
    width: 8.33333%;
  }

  .row .two {
    width: 16.66667%;
  }

  .row .three {
    width: 25%;
  }

  .row .four {
    width: 33.33333%;
  }

  .row .five {
    width: 41.66667%;
  }

  .row .six {
    width: 50%;
  }

  .row .seven {
    width: 58.33333%;
  }

  .row .eight {
    width: 66.66667%;
  }

  .row .nine {
    width: 75%;
  }

  .row .ten {
    width: 83.33333%;
  }

  .row .eleven {
    width: 91.66667%;
  }

  .row .twelve {
    width: 100%;
  }

  /* Offsets */

  .row .offset-1 {
    margin-left: 8.33333%;
  }

  .row .offset-2 {
    margin-left: 16.66667%;
  }

  .row .offset-3 {
    margin-left: 25%;
  }

  .row .offset-4 {
    margin-left: 33.33333%;
  }

  .row .offset-5 {
    margin-left: 41.66667%;
  }

  .row .offset-6 {
    margin-left: 50%;
  }

  .row .offset-7 {
    margin-left: 58.33333%;
  }

  .row .offset-8 {
    margin-left: 66.66667%;
  }

  .row .offset-9 {
    margin-left: 75%;
  }

  .row .offset-10 {
    margin-left: 83.33333%;
  }

  .row .offset-11 {
    margin-left: 91.66667%;
  }

  /* Push/Pull */

  .row .push-1 {
    left: 8.33333%;
  }

  .row .pull-1 {
    right: 8.33333%;
  }

  .row .push-2 {
    left: 16.66667%;
  }

  .row .pull-2 {
    right: 16.66667%;
  }

  .row .push-3 {
    left: 25%;
  }

  .row .pull-3 {
    right: 25%;
  }

  .row .push-4 {
    left: 33.33333%;
  }

  .row .pull-4 {
    right: 33.33333%;
  }

  .row .push-5 {
    left: 41.66667%;
  }

  .row .pull-5 {
    right: 41.66667%;
  }

  .row .push-6 {
    left: 50%;
  }

  .row .pull-6 {
    right: 50%;
  }

  .row .push-7 {
    left: 58.33333%;
  }

  .row .pull-7 {
    right: 58.33333%;
  }

  .row .push-8 {
    left: 66.66667%;
  }

  .row .pull-8 {
    right: 66.66667%;
  }

  .row .push-9 {
    left: 75%;
  }

  .row .pull-9 {
    right: 75%;
  }

  .row .push-10 {
    left: 83.33333%;
  }

  .row .pull-10 {
    right: 83.33333%;
  }

  .row .push-11 {
    left: 91.66667%;
  }

  .row .pull-11 {
    right: 91.66667%;
  }

  /* block grids
  --------------------------------------------------------------------- */

  .bgrid-sixths [class*="column"] {
    width: 16.66667%;
  }

  .bgrid-quarters [class*="column"] {
    width: 25%;
  }

  .bgrid-thirds [class*="column"] {
    width: 33.33333%;
  }

  .bgrid-halves [class*="column"] {
    width: 50%;
  }

  [class*="bgrid"] [class*="column"] + [class*="column"]:last-child {
    float: left;
  }

  /* Left clearing for block grid columns - columns that changes width in
  different screen sizes. Allows columns with different heights to align
  properly.
  --------------------------------------------------------------------- */

  .first {
    clear: left;
  }

  /* first column in default screen */

  .s-first {
    clear: none;
  }

  /* first column in smaller screens */

  /* smaller screens
  --------------------------------------------------------------- */
  @media only screen and (max-width: 900px) {

    /* block grids on small screens */
    .s-bgrid-sixths [class*="column"] {
      width: 16.66667%;
    }

    .s-bgrid-quarters [class*="column"] {
      width: 25%;
    }

    .s-bgrid-thirds [class*="column"] {
      width: 33.33333%;
    }

    .s-bgrid-halves [class*="column"] {
      width: 50%;
    }

    /* block grids left clearing */
    .first {
      clear: none;
    }

    .s-first {
      clear: left;
    }

  }

  /* mobile wide/smaller tablets
  --------------------------------------------------------------- */
  @media only screen and (max-width: 767px) {

    .row {
      width: 460px;
      margin: 0 auto;
      padding: 0;
    }

    .column, .columns {
      width: auto !important;
      float: none;
      margin-left: 0;
      margin-right: 0;
      padding: 0 20px;
    }

    .row .row {
      width: auto;
      max-width: none;
      margin: 0 -30px;
    }

    [class*="column"] + [class*="column"]:last-child {
      float: none;
    }

    [class*="bgrid"] [class*="column"] + [class*="column"]:last-child {
      float: none;
    }

    /* Offsets */
    .row .offset-1 {
      margin-left: 0%;
    }

    .row .offset-2 {
      margin-left: 0%;
    }

    .row .offset-3 {
      margin-left: 0%;
    }

    .row .offset-4 {
      margin-left: 0%;
    }

    .row .offset-5 {
      margin-left: 0%;
    }

    .row .offset-6 {
      margin-left: 0%;
    }

    .row .offset-7 {
      margin-left: 0%;
    }

    .row .offset-8 {
      margin-left: 0%;
    }

    .row .offset-9 {
      margin-left: 0%;
    }

    .row .offset-10 {
      margin-left: 0%;
    }

    .row .offset-11 {
      margin-left: 0%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .resumeTitle {
      margin-left: -12px;
    }
  }

  /* mobile narrow
  --------------------------------------------------------------- */
  @media only screen and (max-width: 400px) {

    .resumeTitle {
    font-size: 32px;
    margin-left: -12px;
  }
  .resumeParagraph {
    line-height: 1.5em;
    padding-bottom: 1.5em;
  }
  
  p {
    margin: 0;
  }

  .resumeHeader {
    margin-top: 40px;
  }

    .row {
      width: auto;
    }
    
    .bullet {
      visibility: hidden;
    }

    .date {
      display: block;
      color: ${({ theme }) => theme.colors.primary};
    }

  }

  /* larger screens
  --------------------------------------------------------------- */
  @media screen and (min-width: 1200px) {

    .wide .row {
      max-width: 1180px;
    }

  }

  /* ------------------------------------------------------------------ */
  /* d. Resume Section
  /* ------------------------------------------------------------------ */

  .bullet {
    margin-left: 8px;
    margin-right: 8px;
  }

  .education {
    margin-top: 30px;
  }

  .education,
  .work {
    margin-bottom: 48px;
    padding-bottom: 24px;
  }

  .volunteer {
    margin-bottom: 100px;
  }

  /*----------------------------------------------*/
  /*\tSkill Bars
  /*----------------------------------------------*/

  .bars {
    width: 95%;
    float: left;
    padding: 0;
    text-align: left;
  }

  .bars .skills {
    margin-top: 36px;
    margin-bottom: 100px;
    list-style: none;
  }

  .bars li {
    position: relative;
    margin-bottom: 60px;
    background: #ccc;
    height: 42px;
    border-radius: 3px;
  }

  .bars li em {
    font: 15px "opensans-bold", sans-serif;
    color: #313131;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
    position: relative;
    top: -36px;
  }

  .bar-expand {
    position: absolute;
    left: 0;
    top: 0;

    margin: 0;
    padding-right: 24px;
    background: #313131;
    display: inline-block;
    height: 42px;
    line-height: 42px;
    border-radius: 3px 0 0 3px;
  }

  .photoshop {
    width: 80%;
    -moz-animation: photoshop 2s ease;
    -webkit-animation: photoshop 2s ease;
  }

  .illustrator {
    width: 55%;
    -moz-animation: illustrator 2s ease;
    -webkit-animation: illustrator 2s ease;
  }

  .wordpress {
    width: 50%;
    -moz-animation: wordpress 2s ease;
    -webkit-animation: wordpress 2s ease;
  }

  .css {
    width: 90%;
    -moz-animation: css 2s ease;
    -webkit-animation: css 2s ease;
  }

  .html5 {
    width: 80%;
    -moz-animation: html5 2s ease;
    -webkit-animation: html5 2s ease;
  }

  .jquery {
    width: 50%;
    -moz-animation: jquery 2s ease;
    -webkit-animation: jquery 2s ease;
  }

  @-moz-keyframes photoshop {
    0% {
      width: 0px;
    }
    100% {
      width: 60%;
    }
  }

  @-moz-keyframes illustrator {
    0% {
      width: 0px;
    }
    100% {
      width: 55%;
    }
  }

  @-moz-keyframes wordpress {
    0% {
      width: 0px;
    }
    100% {
      width: 50%;
    }
  }

  @-moz-keyframes css {
    0% {
      width: 0px;
    }
    100% {
      width: 90%;
    }
  }

  @-moz-keyframes html5 {
    0% {
      width: 0px;
    }
    100% {
      width: 80%;
    }
  }

  @-moz-keyframes jquery {
    0% {
      width: 0px;
    }
    100% {
      width: 50%;
    }
  }

  @-webkit-keyframes photoshop {
    0% {
      width: 0px;
    }
    100% {
      width: 60%;
    }
  }

  @-webkit-keyframes illustrator {
    0% {
      width: 0px;
    }
    100% {
      width: 55%;
    }
  }

  @-webkit-keyframes wordpress {
    0% {
      width: 0px;
    }
    100% {
      width: 50%;
    }
  }

  @-webkit-keyframes css {
    0% {
      width: 0px;
    }
    100% {
      width: 90%;
    }
  }

  @-webkit-keyframes html5 {
    0% {
      width: 0px;
    }
    100% {
      width: 80%;
    }
  }

  @-webkit-keyframes jquery {
    0% {
      width: 0px;
    }
    100% {
      width: 50%;
    }
  }


  /* screenwidth less than 1024px
  --------------------------------------------------------------------- */
  @media only screen and (max-width: 1024px) {

    /* header styles
   ------------------------------------------------------------------ */
    header .banner-text h1 {
      font: 80px/1.1em 'opensans-bold', sans-serif;
      letter-spacing: -1px;
      margin: 0 auto 12px auto;
    }

  }

  /* screenwidth less than 900px
  --------------------------------------------------------------------- */
  @media only screen and (max-width: 900px) {

    /* Resume Section
    ------------------------------------------------------------------- */
    #resume h1 {
      font: 16px/24px
    }

    #resume .main-col {
      padding-right: 5%;
    }

  }
`;

export default GlobalStyles;
