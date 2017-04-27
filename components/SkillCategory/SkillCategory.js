import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { includes, max } from 'lodash';

import SkillsList from '../SkillsList';

import style from './SkillCategory.css'

class SkillCategory extends React.Component {

  state = {
    collapsed: true
  };

  itemClass() {
    return this.state.collapsed ? style.itemCollapsed : style.item;
  }

  handleKeyPress = (e) => {
    // If enter or space is pressed
    if (e.charCode === 13 || e.charCode === 32 ) {
      e.preventDefault();
      this.handleClick();
    }
  }

  handleClick = (e) => {
    this.setState({
      collapsed: ! this.state.collapsed
    });
  }

  getCategoryFinish( skills ) {
    let ret;
    const years = [];

    for (var i = 0; i < skills.length; i++) {
      var skill = this.props.skills[i];

      if ( skill.hasOwnProperty('finish') ) {
        years.push(skill.finish);
      } else {
        years.length = 0;
        ret = this.props.endYear;
        break;
      }
    }

    if (years.length > 0) {
      ret = max(years);
    }

    return ret;
  }

  barStyle() {
    const barMargin = 10;

    const yearDiff = this.props.endYear - this.props.startYear;

    const categoryFinish = this.getCategoryFinish( this.props.skills );
    const categoryStart = this.props.start ? this.props.start : _.minBy(this.props.skills, 'start').start;

    const categoryYearDiff = categoryFinish - categoryStart;
    const percentage = categoryYearDiff / yearDiff * 100;

    const rightOffset = ( this.props.endYear !== categoryFinish ) ? ( this.props.endYear - categoryFinish ) / yearDiff * 100 : 0;

    return {
      width: 'calc(' + percentage + '% + ' + barMargin * 2 + 'px)',
      marginRight: 'calc(' + rightOffset + '% + ' + barMargin * -1 + 'px)'
    }
  }

  render() {
    const props = {
      startYear: this.props.startYear,
      endYear: this.props.endYear
    }

    return (
      <li className={this.itemClass()}>
        <div className={style.bar} onClick={this.handleClick} onKeyPress={this.handleKeyPress} style={this.barStyle()} role="button" tabIndex="0">
          <h3 className={style.label}>{this.props.name}</h3>
          <span className={style.icon}>
            <svg width="10px" height="15px" viewBox="5871 2098 29 45" version="1.1">
                <path d="M5899.99516,2120.01403 C5899.91766,2118.87632 5899.598,2117.75805 5898.93929,2116.84885 C5898.63416,2116.35293 5898.27574,2115.88131 5897.82046,2115.42428 L5882.38449,2100.17211 C5879.62858,2097.44451 5875.29856,2097.25489 5872.78483,2099.77828 C5870.25657,2102.27736 5870.44546,2106.54622 5873.20136,2109.29813 L5884.52043,2120.50509 L5873.20136,2131.71692 C5870.44546,2134.44938 5870.25657,2138.73283 5872.75093,2141.23677 C5875.27919,2143.74071 5879.58983,2143.55109 5882.34574,2140.83808 L5897.78656,2125.59077 C5898.237,2125.17264 5898.5615,2124.66213 5898.90054,2124.1662 C5899.55925,2123.2181 5899.91766,2122.13874 5899.95641,2120.96213 C5899.95641,2120.83085 5899.97578,2120.66068 5899.97578,2120.50509 C5900.01453,2120.31548 5899.99516,2120.1842 5899.99516,2120.01403" id="Fill-524" stroke="none" fill="#ffffff" fillRule="evenodd"></path>
            </svg>
          </span>
        </div>
        {
          this.state.collapsed
            ? null
            : <SkillsList skills={this.props.skills} {...props} />
        }
      </li>
    );
  }
}

export default SkillCategory;
