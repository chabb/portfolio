import React from 'react';
import Experience from '../Experience';

import style from './ExperienceList.css';

class ExperienceList extends React.Component {

  render() {
    const cvLink = this.props.cvLink;

    return (
      <ul className={style.experiences}>
        {
          this.props.experiences.map(function(experience) {
            return <Experience key={experience.startDate} {...experience} cvLink={cvLink} />
          })
        }
      </ul>
    );
  }
}

export default ExperienceList;
