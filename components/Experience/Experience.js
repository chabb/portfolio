import React from 'react';
import classNames from 'classnames';

import moment from 'moment';

import style from './Experience.css';

class Experience extends React.Component {

  state = {
    isDescriptionHidden: true
  }

  handleContentClick = () => {
    const descriptionHidden = !this.state.isDescriptionHidden;
    this.setState({
      isDescriptionHidden: descriptionHidden
    });
  }

  handleTextButtonFocus = () => {
    this.setState({
      isFocused: true
    });
  }

  handleTextButtonBlur = () => {
    this.setState({
      isFocused: false
    });
  }

  circleButtonClasses() {
    return classNames(style.showDescriptionCircleButton,
      { [style.isContract]: this.props.isContract },
      { [style.isFocused]: this.state.isFocused }
    );
  }

  descriptionClass() {
    return this.state.isDescriptionHidden ? style.descriptionHidden : style.description;
  }

  render() {
    const startDate = moment(this.props.startDate).format('MMM YYYY');
    const endDate = moment(this.props.endDate).format('MMM YYYY');
    const buttonText = this.state.isDescriptionHidden ? 'Show Description' : 'Hide Description';

    return (
      <li className={style.experience}>
        <div className={style.dates}>
          <datetime className={style.startDate}>{startDate}</datetime>
          <datetime className={style.endDate}>{endDate}</datetime>
        </div>
        <div className={style.content}>
          <button className={this.circleButtonClasses()} onClick={this.handleContentClick} tabIndex={-1}>
            <span className={style.showDescriptionCircleButtonText}>{buttonText}</span>
          </button>
          <h1 className={style.position}>{this.props.position}</h1>
          <h2 className={style.company}>{this.props.company}</h2>
          <button className={style.showDescriptionTextButton} onClick={this.handleContentClick} onFocus={this.handleTextButtonFocus} onBlur={this.handleTextButtonBlur}>{buttonText}</button>
          <div className={this.descriptionClass()}>
            <p>{this.props.description}</p>
            {this.props.cvLink &&
              <div>
                <a href={this.props.cvLink} target="_blank">For more, download my CV...</a>
              </div>
            }

            {this.props.projectLink &&
              <div>
                <a href={this.props.projectLink} target="_blank">Take a look at the project...</a>
              </div>
            }
          </div>
        </div>
      </li>
    );
  }
}

Experience.defaultProps = {
  isContract: false,
  endDate: moment().format('MMM YYYY')
};

export default Experience;
