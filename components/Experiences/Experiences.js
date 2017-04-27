import React from 'react';
import ScrollableAnchor from '@daveobriencouk/react-scrollable-anchor';

import Heading from '../Heading';
import Section from '../Section';

import ExperienceList from '../ExperienceList';

class Experiences extends React.Component {

  render() {
    return (
      <Section>
        <ScrollableAnchor id={'experience'}>
          <Heading text="Experience" />
        </ScrollableAnchor>
        <ExperienceList experiences={this.props.experiences} cvLink={this.props.cvLink} />
      </Section>
    );
  }
}

export default Experiences;
