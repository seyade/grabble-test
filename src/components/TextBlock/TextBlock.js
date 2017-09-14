import React, { Component } from 'react';
import './TextBlock.scss';

class TextBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="text-block">
        <header className="text-block__header">
          <h2>Text</h2>
        </header>
        <div className="text-block__content">
          <p className="text-block__text">
            Lorem ispum this is a test for Grabble in React and Redux.
          </p>
        </div>
      </section>
    );
  }
};

export default TextBlock;
