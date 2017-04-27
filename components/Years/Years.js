/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import classNames from 'classnames';
import Measure from 'react-measure';
import { range } from 'lodash';

import style from './Years.css';

class Years extends React.Component {

  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  }

  yearsClasses() {
    return classNames(style.years,
      { [style.fixed]: this.props.isFixed },
      { [style.faded]: this.props.isFaded }
    );
  }

  render() {
    const { width, height } = this.state.dimensions;

    const years = range(this.props.startYear, this.props.endYear + 1).map((year, i) => (
      <span key={year} className={style.year}>
        <span className={style.label}>{year}</span>
      </span>
    ));

    return (
      <div className={style.root} style={{height: height}}>
        <Measure
          onMeasure={(dimensions) => {
            this.setState({dimensions})
          }}
        >
          <div className={this.yearsClasses()}>
            {years}
          </div>
        </Measure>
      </div>
    );
  }

}

Years.defaultProps = {
  isFixed: false,
  isFaded: false,
  startYear: 2000,
  endYear: 2010,
};

export default Years;
