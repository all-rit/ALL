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
			"type":"",
			"content":["WCAG, Web Content Accessibility Guidelines, includes several guidelines to improve cognitive accessibility. They define 17 specific guidelines, of which six are especially relevant for cognitive accessibility."]
		},
		{
			"header":"",
			"type":"non-bullet-list",
			"content":[
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
				},

			]
		}
	],
	"footer":{
		//"header":"For more information, please visit the following websites:",
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
			},
		]
	}
}