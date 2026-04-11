const { Op } = require("sequelize");
const db = require("../database");
const { GoogleGenAI } = require("@google/genai");
const { Storage } = require("@google-cloud/storage");

//Starting Google Cloud storage using credentials. Chech that env variable is set to avoid server from crashing

const credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
let storage = null;
const bucket_name = "imagine_26";
if (credentials){
  storage = new Storage({
  keyFilename: credentials,
  });

}else{
  console.log("Env variable not set for Google Cloud Credentials")
}




const submitStudy = async (data) => {
  const { userID, study, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.study = study;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          study: study,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const newID = async (data) => {
  const { userID, year } = data;
  const imagine = `Imagine${year}`;

  try {
    await db[imagine].create({
      userid: userID,
    });
    return true;
  } catch (error) {
    console.error(error);
  }
};

const preSurvey = async (data) => {
  const { userID, preSurvey, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      let section = null;
      if (year == 23) {
        section = await determineGroup(preSurvey, year);
      } else if (year == 25) {
        section = await determineSection2025();
      } else if (year == 26) {
        section = await determineSection2026();
      } else {
        console.log("invalid year");
      }
      const user = await getUserByID({ userID, year });
      console.warn(section, user);
      if (user) {
        user.preSurvey = preSurvey;
        user.section = section;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          preSurvey: preSurvey,
          section: section,
        });
      }
      return section;
    }
  } catch (error) {
    console.error(error);
  }
};

const postSurvey = async (data) => {
  const { userID, postSurvey, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.postSurvey = postSurvey;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          postSurvey: postSurvey,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const getUsers = async () => {
  const users = await db.Imagine23.findAll({
    attributes: ["id", "userid", "preSurvey"],
    where: {
      preSurvey: {
        [Op.not]: null,
      },
    },
  });
  return users;
};

const getUserByID = async (data) => {
  const { userID, year } = data;
  const imagine = `Imagine${year}`;
  try {
    const user = await db[imagine].findOne({
      where: {
        userid: userID,
      },
    });
    return user;
  } catch (error) {
    console.error("Could not get user by ID: ", error);
  }
};

const getGroup = async (data) => {
  const { userID, year } = data;
  const imagine = `Imagine${year}`;
  console.log(userID);
  console.log(year);
  try {
    const user = await db[imagine].findOne({
      where: {
        userid: userID,
      },
    });
    return user.section;
  } catch (error) {
    console.error("Could not get group by user ID: ", error);
  }
};

const getTeammate = async (data) => {
  const userID = data;
  const imagine = `Imagine25`;
  try {
    const user = await db[imagine].findOne({
      where: {
        userid: userID,
      },
    });
    const avatar = user.teammateAvatar;
    console.log("avatar======" + avatar);
    return avatar.id;
  } catch (error) {
    console.error("Could not get group by user ID: ", error);
  }
};

const readMoreCount = async (data) => {
  const { userID, readMoreCount, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.readMoreCount = readMoreCount;
        user.save();
      } else {
        db[imagine].create({
          userid: userID,
          readMoreCount: readMoreCount,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const readMoreTimeElapsed = async (data) => {
  const { userID, readMoreTimeElapsed, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.readMoreTimeElapsed = readMoreTimeElapsed;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          readMoreTimeElapsed: readMoreTimeElapsed,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const readingSectionPagePosition = async (data) => {
  const { userID, year } = data;
  const imagine = `Imagine${year}`;
  const readingSectionPagePosition = data.readingSectionPagePosition;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.readingSectionPagePosition = readingSectionPagePosition;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          readingSectionPagePosition: readingSectionPagePosition,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const getSection = async (sectionName, year) => {
  const imagine = `Imagine${year}`;
  try {
    const output = {};
    const responses = await db[imagine].findAll({
      where: {
        section: {
          [Op.eq]: sectionName,
        },
      },
      raw: true,
    });

    if (!responses) {
      return {};
    }
    responses.forEach((response) => {
      const survey = response.preSurvey;
      const userResponse = survey.map((question, index) => {
        // leaves in maintainability for adding in demo field
        if (index === 0 || index === 1 || index === 5) {
          return question.answer;
        }
      });
      const userResponses = userResponse.flat().toString().replace(/,/g, "");
      output[userResponses] = (output[userResponses] || 0) + 1;
    });
    return output;
  } catch (error) {
    console.error(error);
  }
};

const determineGroup = async (preSurvey, year) => {
  // retrieve all existing groupings
  const experiential = await getSection("experiential", year);
  const discomfortCountPOC = await getSection("discomfortCountPOC", year);
  const discomfortCountNonPOC = await getSection("discomfortCountNonPOC", year);
  const control = await getSection("control", year);
  // repeats the same flattening for the user.
  const userResponse = preSurvey
    .map((question, index) => {
      if (index === 0 || index === 1 || index === 5) {
        return question.answer;
      }
    })
    .toString()
    .replace(/,/g, "");

  let minValue = Infinity;
  let lowestPool = "";
  const dataset = [
    ["experiential", experiential],
    ["discomfortCountPOC", discomfortCountPOC],
    ["discomfortCountNonPOC", discomfortCountNonPOC],
    ["control", control],
  ];
  // Iterate over each hashmap to find the lowest value
  for (const [pool, hashmap] of dataset) {
    // if user response is in the hashmap
    // Ex: [(userResponse, count) ('232', 3)]
    // then bubble sort on count
    if (userResponse in hashmap) {
      // Compare the value with the current minimum value
      if (hashmap[userResponse] < minValue) {
        minValue = hashmap[userResponse];
        lowestPool = pool;
      }
    } else {
      // else the lowest count for this pool is 0
      minValue = 0;
      lowestPool = pool;
    }
  }
  // get users answers
  return lowestPool;
};

const postUserAvatar = async (data) => {
  const { userID, avatar, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.avatar = avatar;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          avatar: avatar,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const postTeammateAvatar = async (data) => {
  const { userID, teammateAvatar, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.teammateAvatar = teammateAvatar;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          teammateAvatar: teammateAvatar,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const postOpponentAvatar = async (data) => {
  const { userID, opponentAvatar, year } = data;
  const imagine = `Imagine${year}`;
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.opponentAvatar = opponentAvatar;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          opponentAvatar: opponentAvatar,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const determineSection2025 = async () => {
  const options = ["experiential", "expression", "control"];
  const randIndex = Math.floor(Math.random() * options.length);
  console.log("Assigned group:", section); 
  
  return options[randIndex];
};

const determineSection2026 = async ()=>{
  const options = ["experiential", "expression", "control"];
  const imagine = "Imagine26";

  const sectionCounts = []
  for (const option of options){
    const count = await db[imagine].count({
      where: {section:option},
    })
    sectionCounts.push({name:option,count:count})
  }

  sectionCounts.sort((a, b) => a.count - b.count);
  return sectionCounts[0].name;
}


const postImagepath = async (imagine,userID,imagepath) =>{
  try {
    if (userID) {
      const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.deepfakeImagePath = imagepath;
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          deepfakeImagePath: imagepath,
        });
      }
      return true;
    }
  } catch (error) {
    console.error(error);
  }
};

const deepFakeGenerator = async (imagine, userID, base64String, imagePath) => {
  if(!storage){
    console.log("env variable not set for google cloud")
    return false
  }
  
  const bucket = storage.bucket(bucket_name);
  const file = bucket.file(imagePath);
  
  if (!process.env.GEMINI_API_KEY){
    console.log("env variable is not set")
    return false
  }
  
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const textPrompt = "Generate an image of the person in this photo frowning, wearing a propeller hat and holding a sign that says: I don't want popcorn. The sign has to be visible in the image"
  const prompt = [
    { text: textPrompt },
    {
      inlineData: {
        mimeType: "image/png",
        data: base64String,
      },
    },
  ];
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-image",
    contents: prompt,
  });
  try {
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");
        await file.save(buffer, {
          contentType: "image/png",
        });
        const response = await postImagepath(imagine, userID, imagePath);
        if (response) {
          console.log("Saved deepfake successfuly in google cloud");
          return true;
        }
        console.log(false);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const handleImageUploads = async (data) => {
  const userID = data.body.userId;
  const imagine = `Imagine${data.body.year}`;
  const imagePath = "deepfakes" + "/" + userID + ".png";
  const image = data.file;
  deepFakeGenerator(
    imagine,
    userID,
    image.buffer.toString("base64"),
    imagePath,
  );
  return true;
};

const getImagePath = async (data) => {
  const { userID, year, pictureType } = data;
  const imagine = `Imagine${year}`;
  let imagePath = "";

  try {
    const user = await db[imagine].findOne({
      where: {
        userid: userID,
      },
    });
    console.log(user);

    if (pictureType == "deepfake") {
      imagePath = user.deepfakeImagePath;
    }

    // These options will allow temporary read access to the file
    const options = {
      version: "v4",
      action: "read",
      expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    };

    //Get a v4 signed URL for reading the file
    const [url] = await storage
      .bucket(bucket_name)
      .file(imagePath)
      .getSignedUrl(options);

    return url;
  } catch (error) {
    console.error("Could not get image path by user ID: ", error);
  }
};

const postChatReply = async (data) =>{
  const {userID,reply} = data
  console.log(reply)
  const imagine = 'Imagine26'
  try {
    const user = await db[imagine].findOne({
        where: {
          userid: userID,
        },
      });
      if (user !== null) {
        user.chatReply = reply
        console.log("user reply storage")
        console.log(user.chatReply)
        user.save();
      } else {
        await db[imagine].create({
          userid: userID,
          chatReply: reply,
        });
      }
      return true;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  submitStudy,
  newID,
  preSurvey,
  postSurvey,
  getUsers,
  getUserByID,
  readMoreCount,
  readingSectionPagePosition,
  readMoreTimeElapsed,
  postUserAvatar,
  postTeammateAvatar,
  postOpponentAvatar,
  getGroup,
  getTeammate,
  deepFakeGenerator,
  getImagePath,
  handleImageUploads,
  postChatReply,

};
