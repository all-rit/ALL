export const GAME_PLAYING = 'GAME_PLAYING';
export const GAME_IDLE = 'GAME_IDLE';
export const LAB_ID = 5;
export const DyslexiaAccessibleKnowledgeCheck={
    Question: "What is one of the symptoms of dyslexia?",
    Options:{
        "Text becoming blury" : 0,
        "Increased concentration" : 0,
        "Difficulty remembering information" : 1,
        "Heightened awareness of surroundings" : 0
    }

}
export const DementiaInaccessibleKnowledgeCheck={
    Question: "What is a symptom of a person with Dementia?",
    Options:{
        "Having trouble breathing": 0,
        "Having an enlarged vescular membrane": 0,
        "Stuttering while speaking": 0,
        "Having trouble working within time limit": 1,
    }

}

export const DementiaAccessibleKnowledgeCheck={
    Question: "What is one way to optimize content for those with Dementia?",
    Options:{
        "Use small and clear icons": 0,
        "Use acronyms": 0,
        "Use 38 size font": 0,
        "Rapid and direct feedback": 1,
    }
}
export const NotificationAccessibleKnowledgeCheck={
    Question: "Which words were jumbled?",
    Options:{
        "Meeting": 0,
        "At": 0,
        "12pm": 0,
        "None": 1,
    }
}
export const NotificationInaccessibleKnowledgeCheck={
    Question: "Which words were jumbled?",
    Options:{
        "Started, Should": 0,
        "Their, Order": 1,
        "Started, Order": 0,
        "None": 0,
    }
}

export const AccessibleMessage="Meeting at 12pm!";
export const InaccessibleMessage="There older should be started";

export const minFont = 16;
export const maxFont = 24;
export const minFontNotif = 20;
export const maxFontNotif = 24;
export const defaultFont = 20;
export const time = 25;
export const timePerWord = 400;
