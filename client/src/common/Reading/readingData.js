export const readingData = {
	div1: {
		title: 'Reading',
		p1: 'Cognitive impairment refers to a broad range of disabilities, from people with intellectual disabilities, who may have the most-limited capabilities, to age-related issues regarding thinking and remembering. This range includes people with learning disabilities, such as dyslexia and attention deficit hyperactivity disorder (ADHD).',
		main: 'How Many People are Affected?',
		p2: 'Currently, as high as 5% of all Americans face cognitive impairments.',
		p3: 'An estimated 5.1 million Americans aged 65 years or older may currently have Alzheimer’s disease, the most well-known form of cognitive impairment.',
		p4: '	Understanding the degree of cognitive impairment and its causes is important in adequately allocating resources for research in accessibility improvements.',
		data: {
			labels: [
				"US Population Without Cognitive Impairment (Millions)",
				"US Population With Cognitive Impairment (Millions)",
			],

			datasets: [
				{
					label: "Cognitively Impaired in a Population of 328 People",
					borderColor: "black",
					backgroundColor: ["blue", "red"],
					data: [312, 16],
					borderWidth: "1",
				},
			],
		},
	},
	div2: {
		title: "Common Challenges",
		listChallenges: ['Understanding content', 'Remembering how to complete tasks', 'Confusion caused by inconsistent or non-traditional web page layouts', 'Keeping focus while completing a task', 'Different processing speed, requiring additional time']
	},
	div3: {
		title: 'How to Address These Problems?',
		p1: 'WCAG, Web Content Accessibility Guidelines, includes several guidelines to improve cognitive accessibility. They define 17 specific guidelines, of which six are especially relevant for cognitive accessibility.',
		guidelines: [
			{
				title: 'Adaptability',
				text: 'All information should be available in a form that can be perceived by all users. For example, the information could be spoken aloud via a narration tool. Thus you should ensure the content can be understood by the software.'
			},

			{
				title: 'Time',
				text: 'It is important to allow users the time they require to complete tasks. Guideline 2.2 states "provide users enough time to read and use content." People with cognitive disabilities may require more time to read content, or to perform functions such as filling out forms.'
			},

			{
				title: 'Navigation',
				text: 'Guideline 2.4 states to include clear and descriptive headings so users can easily find information and understand relationships between different content sections.'
			},

			{
				title: 'Readability',
				text: 'Guideline 3.1  states "make text content readable and understandable." Keep the writing style simple and easy to understand.'
			},

			{
				title: 'Predictability',
				text: 'Guideline 3.2 states to "make web pages appear and operate in predictable ways." Use consistency with the page layout.'
			},
			{
				title: 'Input Assistance',
				text: 'Guideline 3.3 states to "help users avoid and correct mistakes." If they do make a mistake, ensure the message allows them to easily fix the error.'
			},




		],
	},
	div4: {
		title: 'Practical Applications of Cognitive Accessibility',
		p1: 'We all enjoy online shopping. However, a person’s ability to use websites effectively declines by 0.8% every year over the age of 25, according to Nielsen Norman Group. Optimally designing for memory limitations will be especially important as the population ages. These techniques include:',
		techniques: [
			{
				title: 'User Authentication',
				text: 'Offer at least one alternative method that does not rely on a user to memorize character strings.'
			},

			{
				title: 'Don\’t hide important/frequent controls',
				text: 'Show both the text and icon labels for controls making it easier for users to remember their purpose.'
			},

			{
				title: 'Grouping Content',
				text: 'Remind site visitors where they are in a process.'
			},


		],
	},
	div5: {
		title: 'For more information, please visit the following websites:?',
		links: [
			{
				href: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Cognitive_accessibility',
				target: '_blank',
				rel: 'noopener noreferrer"',
				title: 'Mozilla Cognitive Accessibility',
			},
			{
				href: 'https://www.w3.org/WAI/cognitive/',
				target: '_blank',
				rel: 'noopener noreferrer"',
				title: 'W3 Cognitive Accessibility',
			},
			{
				href: 'https://www.w3.org/TR/coga-usable/',
				target: '_blank',
				rel: 'noopener noreferrer"',
				title: 'Making Content Accessible',
			}
		],
	},

}