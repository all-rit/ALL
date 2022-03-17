export const readingData = {
    "piechart":
       {"header":"Approximate Deaf and Hard of Hearing Population in the United States",
       "caption":[""],
       "data":{
          "labels": [
                "Deaf (ASL is primary language) [millions]",
                "Oral Deaf [millions]",
                "Profound hearing loss [millions]",
                "Severe hearing loss [millions]",
                "Moderate hearing loss [millions]",
                "Mild hearing loss [millions]"
             ],
          "datasets": [
                   {
                   "label": "Approxiate Deaf and Hard of Hearing Population in the United States",
                   "borderColor": "black",
                   "backgroundColor": ["#d73027", "#fc8d59", "#fee090", "#e0f3f8", "#91bfdb", "#4575b4"],
                   "data": [1.08, 1.08, 3.6, 8.64, 10.8, 10.8],
                   "borderWidth": "1"
                   }
             ]
          }
    },
	"description":{
		"header":"Case Study",
		"content":""
	},
	"body":[
		{
			"header":"Accessibility Standards",
			"type":"",
			"content":["In order to establish accessibility standards throughout government-run technology applications, allowing for anyone with or without a disability to interact with fundamental government websites, kiosks, and mobile applications, Section 508 of the Rehabilitation Act was established in 1998. This section outlines all of the necessary components of web infrastructure to keep its promise to ensure applications are accessible to all. Section 508.C & D is fundamental to this project, as it outlines the necessity for applications to use alternative approaches to make audio cues more accessible to meet the WCAG AAA standards. This relates directly to this web application, as its main focus is to outline and teach the necessity of creating accessible software to ensure individuals with hearing loss can properly identify prominent information in student’s web applications moving forward."]
		},
		{
			"header":"Validators",
			"type":"",
			"content":["Existing validators, such as AChecker, can help to ensure this standard is met. Validators analyze a webpage by inputting a URL and ensure that the page follows the WCAG's Perceivable accessibility principle. If software is not accessible to people with hearing loss, this can be in violation of the American with Disabilities Act (ADA) and the individual could sue the company for their inaccessible software."]
		},
		{
			"header":"NAD vs Netflix Lawsuit",
			"type":"",
			"content":["In 2011, the National Association of the Deaf (NAD) filed a lawsuit against Netflix due to the lack of closed captioning in their streaming videos, which is considered as a violation of the ADA. More than half of all Americans use Netflix. Thus it must be made accessible to Deaf and Hard of Hearing viewers. Netflix argues that the ADA only specified that \"places of public accommodation\" must be accessible to people with disabilities and its business cannot be considered a \"place of public accommodation\" since it is not a physical place. Hence, Netflix is not subject to the ADA. NAD argued that the Internet is not exempt from the ADA, and Netflix is considered a shared or public activity, which makes the ADA applicable. The judge ruled in favor of the NAD's argument. Thus, Netflix had to add subtitles for their streaming videos (shown in Figure 1) to make their website accessible for Deaf and Hard of Hearing users."]
		},
		{
			"header":"",
			"type":"image",
			"content":{
				"image":"/netflix_subtitles.jpg",
				"alt":"Netflix's implemented subtitles settings",
				"sub_caption":"Figure 1",
				"caption":"Netflix's Implemented Captions"
			}
		},
        {
			"header":"Professional Responsibility",
			"type":"",
			"content":["As software developers, we have a professional responsibility to uphold the Association for Computing Machinery (ACM) code of ethics, the Convention on the Rights of Persons with Disabilities (CRPD), and our own personal morals. We as individuals must ensure that we contribute to society and to human well-being, acknowledging that all people are stakeholders in computing (ACM 1.1) and that we are fair and take action not to discriminate (ACM 1.4). On top of this, we must take into account the protection and promotion of the human rights of persons with disabilities in all policies and programmes, including our web development (CRPD Article 4.C). In order to ensure we are compliant with all of these professional responsibilities, as well as ensure we as individuals are upholding our own morals, alternative approaches to audio cues must be considered in everything we create for the web, as without it, we are not treating individuals with a hearing loss as a stakeholder in computing, we are discriminating against their use of our applications, and we are not protecting the rights of these individuals to be able to access the internet the same as everyone else. Section 508.C is vital to the continued success of web applications on the internet."]
		}
	],
	"footer":{
		"links":[
			{
				"name":"Hearing Loss Association of America",
				"link":"www.nchearingloss.org"
			}
		]
	}
}