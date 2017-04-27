import React from 'react';
import renderHTML from 'react-render-html';

import Heading from '../Heading';
import Section from '../Section';
import Footer from '../Footer';

class SignOff extends React.Component {

  render() {
    return (
      <Section>
        <Heading text="About Me" />
        {this.props.description &&
          renderHTML(this.props.description)
        }
        <Footer />
      </Section>
    );
  }

}

export default SignOff;
