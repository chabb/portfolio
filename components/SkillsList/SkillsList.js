import React from 'react';

import Skill from '../Skill';

import style from './SkillsList.css';

class SkillsList extends React.Component {

  render() {
    const props = {
      startYear: this.props.startYear,
      endYear: this.props.endYear
    }

    const skills = this.props.skills.map((skill, i) => (
      <Skill key={skill.name} {...skill} {...props} />
    ));

    return (
      <ul className={style.items}>
        {skills}
      </ul>
    );
  }
}

export default SkillsList;
