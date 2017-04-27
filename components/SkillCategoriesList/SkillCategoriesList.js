import React from 'react';

import SkillCategory from '../SkillCategory';

import style from './SkillCategoriesList.css';

class SkillCategoriesList extends React.Component {

  render() {
    const props = {
      collapsed: this.props.collapsed,
      startYear: this.props.startYear,
      endYear: this.props.endYear
    }

    return (
      <ul className={style.items}>
        {
          this.props.skillCategories.map(function(skillCategory) {
            return <SkillCategory key={skillCategory.name} {...skillCategory} {...props} />
          })
         }
      </ul>
    );
  }
}

export default SkillCategoriesList;
