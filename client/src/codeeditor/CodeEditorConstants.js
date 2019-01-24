export const UPDATE_CODE = 'UPDATE_CODE';
export const RESET_CODE = 'RESET_CODE';
export const UPDATE_CODE_EDITOR_STATUS = 'UPDATE_CODE_EDITOR_STATUS';

// Default Values
export const CODE_BLOCK =
`import React, { Component } from 'react';

class HintBox extends Component {
  render() {
    let { hint, isExtended } = this.props;
    let content = "?";

    // Check if hint is empty
    
    // Update the variable 'content' to "Available Hint here!"
    
    // Otherwise, update the variable 'content' to "No Available Hint yet..."
    
    
    
    
    return (
      <div>
        {isExtended ? (hint ? hint : "No hint") : content}
      </div>
    );
  }
}

export default HintBox;`;
