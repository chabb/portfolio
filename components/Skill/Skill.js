import React from 'react';
import Measure from 'react-measure';

import style from './Skill.css';

class Skill extends React.Component {

  state = {
    bar: {
      dimensions: {
        width: -1,
        height: -1
      }
    },
    label: {
      dimensions: {
        width: -1,
        height: -1
      }
    }
  }

  itemClass() {
    return this.state.label.dimensions.width > this.state.bar.dimensions.width ? style.itemLabelOutside : style.item;
  }

  barStyle() {
    const barMargin = 10;

    const yearDiff = this.props.endYear - this.props.startYear;

    const itemFinish = this.props.finish ? this.props.finish : this.props.endYear;
    const itemStart = this.props.start;

    const itemYearDiff = itemFinish - itemStart;
    const percentage = itemYearDiff / yearDiff * 100;

    const rightOffset = ( this.props.endYear !== itemFinish ) ? ( this.props.endYear - itemFinish ) / yearDiff * 100 : 0;

    return {
      width: 'calc(' + percentage + '% + ' + barMargin * 2 + 'px)',
      marginRight: 'calc(' + rightOffset + '% + ' + barMargin * -1 + 'px)',
    }
  }

  render() {
    const notes = this.props.notes ? this.props.notes.join(', ') : null;

    const barStyle = this.barStyle();
    const { marginRight } = barStyle;

    return (
      <li className={this.itemClass()}>
        <Measure
          includeMargin={false}
          onMeasure={(dimensions) => {
            this.setState({bar: {dimensions: dimensions}})
          }}
        >
          <div className={style.bar} style={barStyle}>
            <Measure
              onMeasure={(dimensions) => {
                this.setState({label: {dimensions: dimensions}})
              }}
            >
              <h3 className={style.label}>
                {this.props.name}
              </h3>
            </Measure>
          </div>
        </Measure>
        {
          notes
            ? <small className={style.notes} style={{marginRight: marginRight}}>({notes})</small>
            : null
        }
      </li>
    );
  }

}

export default Skill;
