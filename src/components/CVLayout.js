import React from 'react';

import CV from 'react-cv';
import styled from 'styled-components';

const StyledCV = styled(CV)`

  && {
    margin-bottom: 10px;
    background: red;
  }
`;


export default function UpdatedCV() {
  return (
    <StyledCV
      personalData={{
        name: 'John Doe',
        title: 'Senior Software Developer',
        image: 'https://bulma.io/images/placeholders/128x128.png',
        contacts: [
          { type: 'email', value: 'john@example.com' },
          { type: 'phone', value: '+00 (123) 456 78 90' },
          { type: 'location', value: 'New York' },
          { type: 'website', value: 'example.com' },
          { type: 'linkedin', value: 'linkedin.com/in/notexists' },
          { type: 'github', value: 'github.com/404' },
        ],
      }}
      sections={[{
        type: 'text',
        title: 'Career Profile',
        content: 'When I was child, I always want to be a developer.',
        icon: 'usertie',
      }]}
      branding={false} // or false to hide it.
    />
  );
}







