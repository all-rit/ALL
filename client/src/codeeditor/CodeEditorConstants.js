export const UPDATE_CODE = 'UPDATE_CODE';
export const RESET_CODE = 'RESET_CODE';
export const UPDATE_CODE_EDITOR_STATUS = 'UPDATE_CODE_EDITOR_STATUS';

// Default Values
export const CODE_BLOCK1 =
`import React, { Component } from 'react';

class HintBox extends Component {
  render() {
    let { hint, isExtended } = this.props;
    let content = "?";

    // Check if hint is empty`;
export const CODE_BLOCK2 =
`    // Update the variable 'content' to "Available Hint here!"`;
export const CODE_BLOCK3 =
`    // Otherwise, update the variable 'content' to "No Available Hint yet..."
    } else {`;
export const CODE_BLOCK4 =
`    }
    
    return (
      <div>
        {isExtended ? (hint ? hint : "No hint") : content}
      </div>
    );
  }
}

export default HintBox;`;

export const CODE_BLOCK_ANSWER1 = `    if () {`;
export const CODE_BLOCK_ANSWER2 = `        content = '';`;
export const CODE_BLOCK_ANSWER3 = `        content = '';`;
