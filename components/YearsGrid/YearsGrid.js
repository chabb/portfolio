import React from 'react';
import classNames from 'classnames';
import { range } from 'lodash';

import style from './YearsGrid.css';

class YearsGrid extends React.Component {

  render() {
    const years = range(this.props.startYear, this.props.endYear + 1).map((year, i) => (
      <span key={year} className={style.gridLine}></span>
    ));

    return (
      <div className={style.grid} style={{height: this.props.height}}>
        {years}
      </div>
    );
  }
}

YearsGrid.defaultProps = {
  startYear: 2000,
  endYear: 2010,
};

export default YearsGrid;
