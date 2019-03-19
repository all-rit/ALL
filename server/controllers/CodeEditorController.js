let Login = require('../models/login');
let SourceCode = require('../models/sourcecode');

exports.submitChanges = (req, res) => {
	let sessionToken = req.session.token;
	let correctMessage = req.body.correctMessage;
	let incorrectMessage = req.body.incorrectMessage;
	let correctBackgroundColor = req.body.correctBackgroundColor;
	let incorrectBackgroundColor = req.body.incorrectBackgroundColor;

	let login = Login.forge({
		SessionID: sessionToken
	})
		.orderBy('LoginID', 'DESC')
		.fetch();

	login
		.then((login) => {
			SourceCode.forge({
				LoginID: login.get('LoginID'),
				CorrectMessage: correctMessage,
				IncorrectMessage: incorrectMessage,
				CorrectBackgroundColor: correctBackgroundColor,
				CncorrectBackgroundColor: incorrectBackgroundColor
			})
				.save()
				.then(() => {
					res.json({
						success: true
					});
				})
				.catch((err) => {
					console.log(err);

					res.json({
						success: false
					});
				});
		})
		.catch((err) => {
			console.log(err);

			res.json({
				success: false
			});
		});
};
