export const readingData = {
	"piechart":
		{"header":"How Many People are Affected?",
		"caption":["Currently, as high as 5% of all Americans face cognitive impairments.","An estimated 5.1 million Americans aged 65 years or older may currently have Alzheimer’s disease, the most well-known form of cognitive impairment.","Understanding the degree of cognitive impairment and its causes is important in adequately allocating resources for research in accessibility improvements."],
		"data":{
			"labels": [
					"US Population Without Cognitive Impairment (Millions)",
					"US Population With Cognitive Impairment (Millions)"
				],
			"datasets": [
						{
						"label": "Cognitively Impaired in a Population of 328 People",
						"borderColor": "black",
						"backgroundColor": ["blue", "red"],
						"data": [312, 16],
						"borderWidth": "1"
						}
				]
			}
	},
	"description":{
		"header":"What is a Cognitive Impairment?",
		"content":"Cognitive impairment refers to a broad range of disabilities, from people with intellectual disabilities, who may have the most-limited capabilities, to age-related issues regarding thinking and remembering. This range includes people with learning disabilities, such as dyslexia and attention deficit hyperactivity disorder (ADHD)."
	},
	"body":[
		{
			"header":"Common Challenges",
			"type":"study__list",
			"content":["Understanding content","Remembering how to complete tasks","Confusion caused by inconsistent or non-traditional web page layouts","Keeping focus while completing a task","Different processing speed, requiring additional time"]
		},
		{
			"header":"How to Address These Problems?",
			"type":"non-bullet-list",
			"content":[
				{
					"header":"",
					"content":"WCAG, Web Content Accessibility Guidelines, includes several guidelines to improve cognitive accessibility. They define 17 specific guidelines, of which six are especially relevant for cognitive accessibility."
				},
				{
					"header":"Adaptability",
					"content":"All information should be available in a form that can be perceived by all users. For example, the information could be spoken aloud via a narration tool. Thus you should ensure the content can be understood by the software."
				},
				{
					"header":"Time",
					"content":"It is important to allow users the time they require to complete tasks. Guideline 2.2 states 'provide users enough time to read and use content.' People with cognitive disabilities may require more time to read content, or to perform functions such as filling out forms."
				},
				{
					"header":"Navigation",
					"content":"Guideline 2.4 states to include clear and descriptive headings so users can easily find information and understand relationships between different content sections."
				},
				{
					"header":"Readability",
					"content":"Guideline 3.1 states 'make text content readable and understandable.' Keep the writing style simple and easy to understand."
				},
				{
					"header":"Predictability",
					"content":"Guideline 3.2 states to 'make web pages appear and operate in predictable ways.' Use consistency with the page layout."
				},
				{
					"header":"Input Assistance",
					"content":"Guideline 3.3 states to 'help users avoid and correct mistakes.' If they do make a mistake, ensure the message allows them to easily fix the error."
				}
			]
		},
		{
			"header":"Practical Applications of Cognitive Accessibility",
			"type":"non-bullet-list",
			"content":[
				{
					"header":"",
					"content":"We all enjoy online shopping. However, a person’s ability to use websites effectively declines by 0.8% every year over the age of 25, according to Nielsen Norman Group. Optimally designing for memory limitations will be especially important as the population ages. These techniques include:"
				},
				{
					"header":"User Authentication",
					"content":"Offer at least one alternative method that does not rely on a user to memorize character strings."
				},
				{
					"header":"Don’t hide important/frequent controls",
					"content":"Show both the text and icon labels for controls making it easier for users to remember their purpose."
				},
				{
					"header":"Grouping Content",
					"content":"Group similar items semantically and visually with a suggested maximum group size of five. This makes decision the process easier when choosing between similar items."
				},
				{
					"header":"Path Markers",
					"content":"Remind site visitors where they are in a process."
				}
			]
		}
	],
	"footer":{
		"links":[
			{
				"name":"Mozilla Cognitive Accessibility",
				"link":"https://developer.mozilla.org/en-US/docs/Web/Accessibility/Cognitive_accessibility"
			},
			{
				"name":"W3 Cognitive Accessibility",
				"link":"https://www.w3.org/WAI/cognitive/"
			},
			{
				"name":"Making Content Accessible",
				"link":"https://www.w3.org/TR/coga-usable/"
			}
		]
	}
}