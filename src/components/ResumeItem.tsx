import React from 'react';

const ResumeItem = ({
  header,
  location,
  startDate,
  endDate,
  info,
}: Props): JSX.Element => {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3 className="resumeHeader">{header}</h3>
        <p className="info">
          {location}
          <span className="bullet">&bull;</span>
          <em className="date">
            {startDate === endDate ? startDate : `${startDate} - ${endDate}`}
          </em>
        </p>
        <p className="resumeParagraph">{info}</p>
      </div>
    </div>
  );
};

interface Props {
  header: string;
  location: string;
  startDate: string;
  endDate: string;
  info: string;
}

export default ResumeItem;
