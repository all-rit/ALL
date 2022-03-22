import React, { Component } from 'react';

class Collapsible extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div id="accordion">

        <div class="card">
          <div class="card-header">
            <a class="card-link" data-bs-toggle="collapse" href="#collapseOne">
              Round 1
            </a>
          </div>
          <div id="collapseOne" class="collapse" data-parent="#accordion">
            <div class="card-body">
              Lorem ipsum..
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseTwo">
              Round 2
            </a>
          </div>
          <div id="collapseTwo" class="collapse" data-parent="#accordion">
            <div class="card-body">
              Lorem ipsum..
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <a class="collapsed card-link" data-bs-toggle="collapse" href="#collapseThree">
              Round 3
            </a>
          </div>
          <div id="collapseThree" class="collapse" data-parent="#accordion">
            <div class="card-body">
              Lorem ipsum..
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collapsible;