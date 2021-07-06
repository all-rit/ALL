import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2'

class ScoreComparison extends Component {

  constructor(props) {
    super(props)
    this.state={
      scoreData: null,
      retrievedData: false
    }
  }

  render() {

    const handleData = (data) => {
      let defaultTotal = 0;
      let defaultAmount = 0;
      let exerciseModeTotal = 0;
      let exerciseModeAmount = 0;
      data.scoreHistory.forEach((element) => {
        if (element.modename === "main") {
          defaultTotal += element.score;
          defaultAmount ++;
        } else if (element.modename === this.props.mode.toLowerCase()) {
          exerciseModeTotal += element.score;
          exerciseModeAmount ++;
        }
      });
      defaultTotal = defaultTotal/defaultAmount;
      exerciseModeTotal = exerciseModeTotal/exerciseModeAmount;
      if (!isNaN(exerciseModeTotal)) {
        this.setState({scoreData:[this.props.score, exerciseModeTotal, defaultTotal]})
      } else {
        this.setState({scoreData:[this.props.score, defaultTotal, defaultTotal]})
      }
    }

    const data = {
      labels: ['Your Last Score', `${this.props.mode} Mode Average`, 'Default Mode Average'],
      datasets: [{
        label: 'Average Scores For Exercise Modes',
        borderColor: 'black',
        backgroundColor: ['red', 'blue', 'green'],
        data: this.state.scoreData,
      }]
    }

    const options = {
      maintainAspectRatio: false,
      scales : {
        xAxes : [{
          ticks: {
            display: false
          }
        }]
      }
    }

    const fetchData = () => {
      fetch(process.env.API_URL + '/scoreComparison', {
        method: 'GET',
	credentials: 'include',
      })
      .then(res => res.json())
      .then(data => handleData(data))
      .catch(err => console.log(err))
      this.setState({retrievedData:true})
    }

    if (!this.state.retrievedData) {
      fetchData();
    }

    return (
      <div className='chart'>
        <Bar
          data={data}
          options={options}
          height={100}
          width={300}
        />
      </div>
    );
  }
}

export default ScoreComparison;
