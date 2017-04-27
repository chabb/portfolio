import React from 'react';
import { VelocityComponent } from 'velocity-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { configureAnchors } from '@daveobriencouk/react-scrollable-anchor';

import Header from '../../components/Header';
import Loader from '../../components/Loader';

import '../../core/styles/global.css';

import style from './Layout.css';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    configureAnchors({
      offset: -24,
      a11y: true,
    });
  }

  render() {
    return (
      <div className={style.root} ref={node => (this.root = node)}>
        <Header {...this.props.header} isLoaded={this.props.isLoaded} />
        <VelocityComponent
          animation={{ opacity: this.props.isLoaded ? 0 : 1 }}
          duration={400}
        >
          <Loader />
        </VelocityComponent>
        <VelocityComponent
          animation={{ opacity: this.props.isLoaded ? 1 : 0 }}
          duration={400}
          delay={400}
        >
          <div className={style.content}>
            <div className={style.contentPad}>
              {this.props.children}
            </div>
          </div>
        </VelocityComponent>
      </div>
    );
  }
}

export default Layout;
