import React from 'react';
import { VelocityComponent } from 'velocity-react';
import Measure from 'react-measure';

import Logo from '../Logo';

import style from './Header.css';

class Header extends React.Component {

  state = {
    showContent: false,
    content: {
      dimensions: {
        width: -1,
        height: -1
      }
    }
  }

  // HACK: Setting private variable avoid issue with velocity-react complete
  // callback being called on render. Post issue here:
  // https://github.com/twitter-fabric/velocity-react
  _initialCompleteCallbackRun = false;
  showContent = () => {
    if (this._initialCompleteCallbackRun) {
      this.setState({showContent: true})
    } else {
      this._initialCompleteCallbackRun = true;
    }
  }

  generateBg() {
    let code = '<!doctype html><html class="no-js" lang=""> <head> <meta charset="utf-8"> <meta http-equiv="x-ua-compatible" content="ie=edge"> <title>React Static Boilerplate</title> <meta name="description" content=""> <meta name="viewport" content="width=device-width, initial-scale=1"> <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"> <style>*{box-sizing: border-box;}html, body, #container{height: 100%;}a,b,code,em,i,small,strong,sub,sup{line-height:0}html{font-family:var(--base-font-family);font-size:var(--base-font-size);line-height:var(--base-line-height);color:var(--base-color)}blockquote,h1,h2,h3,h4,h5,h6,ol,p,pre,table,ul{font-size:inherit;font-weight: normal;margin-top:0;margin-bottom:var(--base-margin-bottom)}ol ol,ol ul,ul ol,ul ul{margin-top:0;margin-bottom:0}.hr,hr{border:1px solid;margin:-1px 0}sub,sup{position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}</style> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,500italic,700,700italic"> <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"> <link rel="apple-touch-icon" href="apple-touch-icon.png"> </head> <body><script id="__bs_script__">//<![CDATA[ document.write("<script async src="/browser-sync/browser-sync-client.js?v=2.18.8"></script>".replace("HOST", location.hostname));//]]></script> <div class="gridlover-grid" style="display: block; position: absolute; left: 0px; right: 0px; pointer-events: none; user-select: none; top: 0px; height: 840px; background: linear-gradient(rgba(0, 119, 179, 0.2) 1px, transparent 1px) left top / 24px 24px;"></div><div id="container"></div><script src="/dist/main.js?3ecc437959933bdb2127"></script> </body></html>';

    return code + code + code + code + code;
  }

  render() {

    console.log(this.state);
    return (
      <header className={style.root} ref={node => (this.root = node)}>
        <p className={style.available}>&nbsp;
          <VelocityComponent
            animation={{ opacity: this.props.availableDate ? 1 : 0 }}
            duration={400}
          >
            <span>Available <datetime className={style.availableDate}>{this.props.availableDate}</datetime></span>
          </VelocityComponent>
        </p>
        <div className={style.bottomPanel}>
          <div className={style.center}>
            <div className={style.maxWidth}>
              <Logo status='relativeOpenInverted' />
              <VelocityComponent
                animation={{ height: this.props.content ? this.state.content.dimensions.height : 0 }}
                duration={400}
                complete={this.showContent}
                >
                  <div className={style.contentWrap}>
                    <Measure
                      onMeasure={(dimensions) => {
                        this.setState({content: {dimensions: dimensions}})
                      }}
                    >
                      <VelocityComponent
                        animation={{ opacity: this.state.showContent ? 1 : 0 }}
                        duration={400}
                      >
                        <div className={style.content}>
                          <ul className={style.menu}>
                            <li className={style.menuItem}><a href="#skills">
                              {/* TODO: Refactor SVG into CSS */}
                              <svg width="10px" height="15px" viewBox="5871 2098 29 45" version="1.1">
                                  <path d="M5899.99516,2120.01403 C5899.91766,2118.87632 5899.598,2117.75805 5898.93929,2116.84885 C5898.63416,2116.35293 5898.27574,2115.88131 5897.82046,2115.42428 L5882.38449,2100.17211 C5879.62858,2097.44451 5875.29856,2097.25489 5872.78483,2099.77828 C5870.25657,2102.27736 5870.44546,2106.54622 5873.20136,2109.29813 L5884.52043,2120.50509 L5873.20136,2131.71692 C5870.44546,2134.44938 5870.25657,2138.73283 5872.75093,2141.23677 C5875.27919,2143.74071 5879.58983,2143.55109 5882.34574,2140.83808 L5897.78656,2125.59077 C5898.237,2125.17264 5898.5615,2124.66213 5898.90054,2124.1662 C5899.55925,2123.2181 5899.91766,2122.13874 5899.95641,2120.96213 C5899.95641,2120.83085 5899.97578,2120.66068 5899.97578,2120.50509 C5900.01453,2120.31548 5899.99516,2120.1842 5899.99516,2120.01403" id="Fill-524" stroke="none" fill="#ffffff" fillRule="evenodd"></path>
                              </svg>
                              Skills</a></li>
                              <li className={style.menuItem}><a href="#experience">
                                {/* TODO: Refactor SVG into CSS */}
                                <svg width="10px" height="15px" viewBox="5871 2098 29 45" version="1.1">
                                    <path d="M5899.99516,2120.01403 C5899.91766,2118.87632 5899.598,2117.75805 5898.93929,2116.84885 C5898.63416,2116.35293 5898.27574,2115.88131 5897.82046,2115.42428 L5882.38449,2100.17211 C5879.62858,2097.44451 5875.29856,2097.25489 5872.78483,2099.77828 C5870.25657,2102.27736 5870.44546,2106.54622 5873.20136,2109.29813 L5884.52043,2120.50509 L5873.20136,2131.71692 C5870.44546,2134.44938 5870.25657,2138.73283 5872.75093,2141.23677 C5875.27919,2143.74071 5879.58983,2143.55109 5882.34574,2140.83808 L5897.78656,2125.59077 C5898.237,2125.17264 5898.5615,2124.66213 5898.90054,2124.1662 C5899.55925,2123.2181 5899.91766,2122.13874 5899.95641,2120.96213 C5899.95641,2120.83085 5899.97578,2120.66068 5899.97578,2120.50509 C5900.01453,2120.31548 5899.99516,2120.1842 5899.99516,2120.01403" id="Fill-524" stroke="none" fill="#ffffff" fillRule="evenodd"></path>
                                </svg>
                                Experience</a></li>
                          </ul>
                          <p>{this.props.content}</p>
                        </div>
                      </VelocityComponent>
                    </Measure>
                  </div>
              </VelocityComponent>
            </div>
          </div>
        </div>
        <div className={style.bg}>{this.generateBg()} {this.generateBg()} {this.generateBg()}</div>
      </header>
    );
  }
}

export default Header;
