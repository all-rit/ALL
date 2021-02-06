import React, { Component } from 'react';

import First from '../pages/First';
import Second from '../pages/Second';
import Third from '../pages/Third';
import Fourth from '../pages/Fourth';

class Playthrough extends Component {
	render() {
		const { plays, results, visible } = this.props;

		if (!visible) return null;

		switch (plays) {
			case 0:
				return <First />;
			case 1:
				return <Second />;
			case 2:
				return <Third />;
			case 3:
				console.log(results);
				return <Fourth results={results} />;
			default:
				// if there were multiple "repair rounds", we will loop through those scores
				// and pass in the repair round with the maximum score
				let max_score_idx = 2;
				if (results.length > 3){
					for (let i=3; i<results.length; i++){
						if (results[i].score > results[max_score_idx].score){
							max_score_idx = i;
						}
					}
				}
				let final_results = [];
				final_results.push(results[0]);
				final_results.push(results[1]);
				//for the third score, pass in the round with the max score
				final_results.push(results[max_score_idx]);
				return <Fourth results={final_results} />;
		}
	}
}

export default Playthrough;
