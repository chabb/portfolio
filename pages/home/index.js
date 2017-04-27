import React, { PropTypes } from 'react';
import axios from 'axios';

import Layout from '../../components/Layout';

import Skills from '../../components/Skills';
import Experiences from '../../components/Experiences';
import SignOff from '../../components/SignOff';

import style from './styles.css';

class HomePage extends React.Component {

  state = {
    skills: [],
    experiences: [],
    isLoaded: false,
  }

  componentDidMount() {
    document.title = "Francois Chabbey : Frontend Developer";

    axios.get('./db.json')
      .then((res) => { 
        console.log(res.data);
        this.setState({
          intro: res.data.intro,
          availableDate: res.data.availableDate,
          cvLink: res.data.cvLink,
          skills: res.data.skills,
          experiences: res.data.experiences,
          description: res.data.description,
          isLoaded: true,
        })
      })
      .catch(error => console.error(error));
  }

  render() {
    const header = {
      large: true,
      availableDate: this.state.availableDate,
      content: this.state.intro,
    }

    return (
      <Layout
        header={header}
        isLoaded={this.state.isLoaded}
      >
        <Skills skills={this.state.skills} />
        <Experiences experiences={this.state.experiences} cvLink={this.state.cvLink} />
        <SignOff description={this.state.description} />
      </Layout>
    );
  }
}

export default HomePage;
