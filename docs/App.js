require('./code/docs.css');
require('./code/style.css');

import React, { Component } from 'react';
import StyleGuideItem from 'react-style-guide';
import 'react-style-guide/react-style-guide.css';

import Button from '../components/Button';

export class App extends Component {
  render() {
    return (
      <div>
        <div className="docs-header">
          <h1>Component Library</h1>
        </div>
        <div id="content">
          <StyleGuideItem
            title="Button"
            description="A reusable button"
          >
            <Button>Default</Button>
            <Button type="postive">Positive</Button>
            <Button type="negative">Negative</Button>
            <Button type="neutral">Neutral</Button>
          </StyleGuideItem>
        </div>
      </div>
    );
  }
}

