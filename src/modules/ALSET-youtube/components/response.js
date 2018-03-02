import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Question from './question';

const customClass = {
  container: {
    textAlign: 'left',
  },
};
class Response extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { questions, onSubmit } = this.props;
    const questionsPanel = questions.map(question => {
      return <Question key={question.id} question={question} onSubmit={onSubmit} />;
    });
    return (
      <div style={customClass.container}>
        { questionsPanel }
      </div>
    );
  }
}

Response.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default Response;
