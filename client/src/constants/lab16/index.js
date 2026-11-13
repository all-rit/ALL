const LAB_ID = 16;
const EXERCISE_PATH = "/Lab16/Exercise";

const EXERCISE_SELECTION_DEFAULT = "default selection";

const EXERCISE_STATES = {
  EXERCISE_SELECTION_DEFAULT,
};

const TEAMMATE_INFO = {
  0: "female_poc_teammate",
  1: "male_poc_teammate",
  2: "male_white_teammate",
  3: "female_white_teammate"
}

// create array of questions with labeled country flag images and answers for GuessTheFlag.js
    const FLAG_QUESTIONS = [
        {
            flag: '/src/assets/images/lab16/guess_the_flag_imgs/morocco.png',
            options: ["Vietnam", "Morocco", "Albania"],
            answer: "Morocco",
            fact: "This country is known for having the oldest active university in the world: University of al-Qarawiyyin, founded in 859 AD."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/brazil.png",
            options: ["Jamaica", "Rwanda", "Brazil"],
            answer: "Brazil",
            fact: "The Blue Sky Studio movie Rio, centered around two Blue Macaws, takes place in this country."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/united kingdom.png",
            options: ["Australia", "The United Kingdom", "New Zealand"],
            answer: "The United Kingdom",
            fact: "This country is made up of four distinct parts that are also referred to as countries, such as Scotland and England."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/canada.png",
            options: ["Canada", "Malta", "Peru"],
            answer: "Canada",
            fact: "This country is known for ice hockey and maple syrup."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/china.png",
            options: ["Taiwan", "Vietnam", "China"],
            answer: "China",
            fact: "This country is home to one of the famous New Seven Wonders of the World, known as the Great Wall."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/dominican republic.png",
            options: ["The Dominican Republic", "Haiti", "Panama"],
            answer: "The Dominican Republic",
            fact: "This country is the birthplace of dances like bachata and merengue."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/egypt.png",
            options: ["Yemen", "Egypt", "Iraq"],
            answer: "Egypt",
            fact: "This country is known for its ancient history."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/france.jpg",
            options: ["Romania", "Chad", "France"],
            answer: "France",
            fact: "The eiffel tower is located in this country."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/germany.png",
            options: ["Belgium", "Zimbabwe", "Germany"],
            answer: "Germany",
            fact: "This country is the birthplace of Oktoberfest."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/jamaica.png",
            options: ["Jamaica", "Dominica", "Guyana"],
            answer: "Jamaica",
            fact: "This country is the origin of reggae music and world-record sprinters like Usain Bolt"
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/japan.png",
            options: ["South Korea", "Japan", "Bangladesh"],
            answer: "Japan",
            fact: "Anime originated from this country."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/mexico.png",
            options: ["Italy", "Hungary", "Mexico"],
            answer: "Mexico",
            fact: "The Disney movie, Coco, cenetered around Dia de los Muertos, takes place in a fictional city of this country."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/nigeria.png",
            options: ["Ivory Coast", "Nigeria", "Ireland" ],
            answer: "Nigeria",
            fact: "This country is the origin of Afrobeats and international stars like WizKid and more."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/peru.png",
            options: ["Peru", "Austria", "Latvia"],
            answer: "Peru",
            fact: "Machu Picchu, one of the famous New Seven Wonders of the World, is located in this country."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/philippines.png",
            options: ["The Czech Republic", "Cuba", "The Philippines"],
            answer: "The Philippines",
            fact: "This country has the longest christmas in the world, with festivities starting in September until January."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/portugal.png",
            options: ["Moldova", "Portugal", "Andorra"],
            answer: "Portugal",
            fact: "The famous soccer player, Cristiano Ronaldo, is from this country."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/south africa.png",
            options: ["South Sudan", "South Africa", "Namibia"],
            answer: "South Africa",
            fact: "This country is known as the 'rainbow nation', for having 11 official languages, diverse cultures and more."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/india.png",
            options: ["Ivory Coast", "Tajikistan", "India"],
            answer: "India",
            fact: "This country has the highest population in the world."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/united states of america.jpg",
            options: ["Malaysia", "The United States of America", "Puerto Rico"],
            answer: "The United States of America",
            fact: "This country is home to the world's oldest and largest film industry: Hollywood."
        
        },
        {
            flag: "/src/assets/images/lab16/guess_the_flag_imgs/spain.png",
            options: ["Spain", "Montenegro", "North Macedonia"],
            answer: "Spain",
            fact: "This country is home to dominant global soccer clubs like Real Madrid and FC Barcelona"
        
        }
    ]

export { LAB_ID, EXERCISE_PATH, EXERCISE_STATES , TEAMMATE_INFO, FLAG_QUESTIONS};