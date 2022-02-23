import React, { useEffect, useState } from 'react'
import { Pie } from "react-chartjs-2";
import LabService from '../../services/LabService';
import UserLabService from '../../services/UserLabService';
import useScroll from '../../use-hooks/useScroll';
import Spinner from '../Spinner/Spinner';
import { readingData } from './readingData';



const Reading = ({ user, labID }) => {
	// const [readingData, setReadingData] = useState(null);

	useScroll()
	// useEffect(() => {
	// 	if (user?.firstname !== null && user !== null) {
	// 		UserLabService.user_complete_about(user.userid, labID);
	// 	}
	// 	UserLabService.complete_about(labID);
	// 	LabService.getLabReading(labID).then((data) => {
	// 		setReadingData(data)
	// 	})
	// }, [user, labID]);



	if (!readingData) {
		return (
			<div className="landingpage__row">
				<Spinner />
			</div>
		)
	}

	return (
		<div className="study">
			<>
				<h3>{readingData?.div1?.title}</h3>
				<p>
					{readingData?.div1?.p1}
				</p>
				<h3>{readingData?.div1?.main}</h3>
				<div className="flex">
					<Pie data={readingData?.div1?.data} height={100} />
				</div>
				<p className="center">
					{readingData?.div1?.p2}
				</p>
				<p className="center">
					{readingData?.div1?.p3}

				</p>
				<p>
					{readingData?.div1?.p4}

				</p>
			</>

			<>
				<h3>{readingData?.div2?.title}</h3>
				<ul className="study__list">
					{readingData?.div1?.challenges?.map(lab => (
						<li>{lab?.listChallenges}</li>
					))}
				</ul>
			</>

			<>
				<h3>{readingData?.div3?.title}</h3>
				<p>{readingData?.div3?.p1}

					<div className="non-bullet-list">
						{readingData?.div3?.guidelines?.map(lab => (
							<>
								<h5>
									{lab?.title}
								</h5>
								<div>{lab?.text}</div>
							</>
						))}
					</div>
				</p>
			</>

			<>
				<h3>{readingData?.div4?.title}</h3>
				<p>
					{readingData?.div4?.p1}
					<div className="non-bullet-list">
						{readingData?.div4?.techniques?.map(lab => (
							<>
								<h5>
									{lab?.title}
								</h5>
								<div>{lab?.text}</div>
							</>
						))}
					</div>
				</p>
			</>

			<>
				<h4>{readingData?.div5?.title}</h4>
				<div className="flex">
					{readingData?.div5?.links?.map(lab => (
						<>
							<a
								href={lab?.href}
								target={lab?.blank}
								rel={lab?.rel}
							>
								{lab?.title}
							</a>
						</>
					))}
				</div>
			</>
		</div>
	);
}

export default Reading