import React from 'react';

import style from './Heading.css';

class Heading extends React.Component {

  render() {
    return (
      <h2 className={style.heading}>
        <span className={style.headingLabel}>{this.props.text} .</span>
      </h2>
    );
  }

}

export default Heading;
