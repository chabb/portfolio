import React from 'react';

import style from './Loader.css';

class Loader extends React.Component {

  render() {
    return (
      <div className={style.loader}>
        <div className={style.loaderRect1}></div>
        <div className={style.loaderRect2}></div>
        <div className={style.loaderRect3}></div>
        <div className={style.loaderRect4}></div>
        <div className={style.loaderRect5}></div>
      </div>
    );
  }

}

export default Loader;
