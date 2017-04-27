import React from 'react';
import history from '../../core/history';

import style from './styles.css';

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object,
  };

  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ?
      'Page Not Found' : 'Error';
  }

  goBack = event => {
    event.preventDefault();
    history.goBack();
  };

  render() {
    if (this.props.error) console.error(this.props.error); // eslint-disable-line no-console

    const [code, title] = this.props.error && this.props.error.status === 404 ?
      ['404', 'Page not found'] :
      ['Error', 'Oups, something went wrong'];

    return (
      <div className={style.container}>
        <main className={style.content}>
          <h1 className={style.code}>{code}</h1>
          <p className={style.title}>{title}</p>
          {code === '404' &&
            <p className={style.text}>
              The page you're looking for does not exist or an another error occurred.
            </p>
          }
          <p className={style.text}>
            <a href="/" onClick={this.goBack}>Go back</a>, or head over to the&nbsp;
            home page to choose a new direction.
          </p>
        </main>
      </div>
    );
  }

}

export default ErrorPage;
