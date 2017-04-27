/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import style from './Typography.css';

class Typography extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div>
        <h1 className={style.headline}>This is a headline</h1>
        <h2 className={style.subtitle}>This is a subtitle [USED]</h2>
        <h3 className={style.byline}>This is a byline [USED]</h3>
        <h4 className={style.anotherLine}>This is another line</h4>
        <p>All the styles above are composed from the shared typography css. The class names <code>headline</code>, <code>subtitle</code> and <code>byline</code> are specific to this component only, and compose styles from the shared typography css.</p>
        <blockquote className={style.blockquote}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus quaerat expedita, ad esse sequi iusto eos similique nihil exercitationem. Vel tenetur saepe rem laborum suscipit a beatae doloremque totam.</p>
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus quaerat expedita, ad esse sequi iusto eos similique nihil exercitationem. Vel tenetur saepe rem laborum suscipit a beatae doloremque totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus quaerat expedita, ad esse sequi iusto eos similique nihil exercitationem. Vel tenetur saepe rem laborum suscipit a beatae doloremque totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus quaerat expedita, ad esse sequi iusto eos similique nihil exercitationem. Vel tenetur saepe rem laborum suscipit a beatae doloremque totam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus quaerat expedita, ad esse sequi iusto eos similique nihil exercitationem. Vel tenetur saepe rem laborum suscipit a beatae doloremque totam.</p>
        <ul>
          <li>This is a list item</li>
          <li>So is this.</li>
        </ul>
        <ol>
          <li>This is a list item</li>
          <li>So is this.</li>
        </ol>
      </div>
    );
  }
}

export default Typography;
