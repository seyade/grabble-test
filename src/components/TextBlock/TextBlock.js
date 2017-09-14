import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TextBlock.scss';

class TextBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="text-block">
        <header className="text-block__header">
          <h2 className="text-block__header-title">Text</h2>
        </header>
        <div className="text-block__content">
          <p className="text-block__text">
            <Link to="/edit/text">No text Added</Link>
          </p>
        </div>
      </section>
    );
  }
};

export default TextBlock;
