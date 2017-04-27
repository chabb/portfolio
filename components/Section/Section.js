import React from 'react';

import style from './Section.css';

class Section extends React.Component {

  render() {
    return (
      <section className={style.root}>
        {this.props.children}
      </section>
    );
  }

}

export default Section;
