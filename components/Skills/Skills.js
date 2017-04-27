import React from 'react';
import ScrollableAnchor from '@daveobriencouk/react-scrollable-anchor';
import Measure from 'react-measure';
import Waypoint from 'react-waypoint';

import Heading from '../Heading';
import Section from '../Section';

import Years from '../Years';
import YearsGrid from '../YearsGrid';
import SkillCategoriesList from '../SkillCategoriesList';


class Skills extends React.Component {

  state = {
    collapsed: this.getSkillCategoryNames(),
    isYearsFixed: false,
    listDimensions: {
      height: -1,
      width: -1
    },
    yearsDimensions: {
      height: -1,
      width: -1
    }
  };

  constructor(props) {
    super(props);
  }

  getSkillCategoryNames() {
    return this.props.skills.map(function(skill) {
      return skill.name;
    })
  }

  yearsTopWaypointHandler = (props) => {
    if ( ! props.event) {
      return false;
    }
    if ( props.currentPosition === 'inside' ) {
      this.setState({
        isYearsFixed: false
      });
    } else if ( props.currentPosition === 'above' ) {
      this.setState({
        isYearsFixed: true
      });
    }
  }

  yearsBottomWaypointHandler = (props) => {
    if ( ! props.event) {
      return false;
    }
    if ( props.currentPosition === 'inside' ) {
      this.setState({
        isYearsFaded: false
      });
    } else if ( props.currentPosition === 'above' ) {
      this.setState({
        isYearsFaded: true
      });
    }
  }

  getYears() {
    return {
      startYear: 2010,
      endYear: 2017
    }
  }

  render() {
    const { height: listHeight } = this.state.listDimensions;
    const { height: yearsHeight } = this.state.yearsDimensions;
    const yearsBottomWaypointOffset = (listHeight - yearsHeight) * -1;

    return (
      <Section>
        <ScrollableAnchor id={'skills'} offset={-204}>
          <Heading text="Skills" />
        </ScrollableAnchor>
        <Waypoint
          onPositionChange={this.yearsTopWaypointHandler}
          topOffset="0"
        />
        <Measure
          onMeasure={(dimensions) => {
            this.setState({yearsDimensions: dimensions})
          }}
        >
          <Years
            {... this.getYears()}
            isFixed={this.state.isYearsFixed}
            isFaded={this.state.isYearsFaded}
          />
        </Measure>
        <YearsGrid
          {... this.getYears()}
          height={listHeight}
        />
        <Waypoint
          onPositionChange={this.yearsBottomWaypointHandler}
          topOffset={yearsBottomWaypointOffset}
        />
        <Measure
          onMeasure={(dimensions) => {
            this.setState({listDimensions: dimensions})
          }}
        >
          <SkillCategoriesList
            {... this.getYears()}
            skillCategories={this.props.skills}
            collapsed={this.state.collapsed}
          />
        </Measure>
      </Section>
    );
  }
}

export default Skills;
