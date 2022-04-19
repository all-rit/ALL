    // const fetch = require('isomorphic-fetch');

    // async function fetchData(url) {
    //   try {
    //     const response = await fetch(url, { mode: 'no-cors' });
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   } catch (error) {
    //     console.error('Unable to fetch data:', error);
    //   }
    // }

    // function fetchNames(nameType) {
    //   return fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
    // }

    // function pickRandom(list) {
    //   return list[Math.floor(Math.random() * list.length)];
    // }

    // async function generateName(gender) {
    //   try {
    //     const response = await Promise.all([
    //       fetchNames(gender || pickRandom(['male', 'female'])),
    //       fetchNames('surnames')
    //     ]);

    //     const [firstNames, lastNames] = response;

    //     const firstName = pickRandom(firstNames.data);
    //     const lastName = pickRandom(lastNames.data);

    //     return `${firstName} ${lastName}`;
    //   } catch(error) {
    //     console.error('Unable to generate name:', error);
    //   }
    // }

function generateName(){
  return "name";
}




const createAvatarData = (avatarNumber) =>{
    console.log(fetch("https://api.namefake.com"))
      
    //Biases
    const hats= ["Hat", "WinterHat1", "WinterHat2",  "WinterHat3"]
    const glasses= ["Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"]
    const shirtColor = ["Blue01","Blue02", "Blue03","PastelBlue"];
    const hairColor = ["SilverGray","Red","Blue","PastelPink"]

    const bias =["hats","glasses","shirtColor","hairColor"]

    const TopType = ["NoHair", "ShortHairShaggyMullet", "Hijab", "Turban", "LongHairBob", 
                    "LongHairBigHair", "LongHairCurly", "LongHairCurvy", "LongHairFro", 
                    "LongHairFroBand", "LongHairNotTooLong", "LongHairMiaWallace", 
                    "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", 
                    "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", 
                    "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", 
                    "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"]
                    
    const noBaldTopType = ["ShortHairShaggyMullet", "Hijab", "Turban", "LongHairBob", 
                          "LongHairBigHair", "LongHairCurly", "LongHairCurvy", "LongHairFro", 
                          "LongHairFroBand", "LongHairNotTooLong", "LongHairMiaWallace", 
                          "LongHairStraightStrand", "ShortHairDreads01", "ShortHairDreads02", 
                          "ShortHairFrizzle", "ShortHairShaggyMullet", "ShortHairShortCurly", 
                          "ShortHairShortFlat", "ShortHairShortRound", "ShortHairShortWaved", 
                          "ShortHairSides", "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"]
    const ClothesColor = ["Black",  "Gray01", "Gray02", "Heather","PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"]
    const HairColors = ["Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark"]
    const FacialHairs = ["Blank","Blank","Blank","Blank","Blank","Blank","Blank","Blank","Blank","Blank","Blank", "BeardMedium", "BeardLight", "BeardMajestic", "MoustacheFancy", "MoustacheMagnum"]
    const Clothes = ["BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"]
    const noBlazerClothes = ["CollarSweater", "GraphicShirt", "Hoodie", "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"]
    const Eyes = ["Default", "Happy", "Wink"]
    const Eyebrow = ["Default", "DefaultNatural", "FlatNatural", "UpDown", "UpDownNatural"]
    const Mouth = ["Default", "Serious", "Smile", "Twinkle"]
    const Skin = ["Tanned", "Brown", "DarkBrown", "Black", "Pale", "Light"]

    let avatarData =[];
    for (let i = 0; i < avatarNumber; i++) {
        let biasType = bias[Math.floor(Math.random()*bias.length)]
        switch(biasType){
            case "hats":
                avatarData.push(
                  {
                        "id": i+1,
                        "name": generateName(),
                        "avatarAttributes":{
                            "topType": hats[Math.floor(Math.random()*hats.length)],
                            "accessoriesType": "Blank",
                            "hairColor": HairColors[Math.floor(Math.random()*HairColors.length)],
                            "facialHairType": FacialHairs[Math.floor(Math.random()*FacialHairs.length)],
                            "clotheType": Clothes[Math.floor(Math.random()*Clothes.length)],
                            "clotheColor": ClothesColor[Math.floor(Math.random()*ClothesColor.length)],
                            "eyeType": Eyes[Math.floor(Math.random()*Eyes.length)],
                            "eyebrowType": Eyebrow[Math.floor(Math.random()*Eyebrow.length)],
                            "mouthType": Mouth[Math.floor(Math.random()*Mouth.length)],
                            "skinColor": Skin[Math.floor(Math.random()*Skin.length)],
                        },
                        "bias":"Avatar is wearing a hat"
                  }
                )
                break;
            case "glasses":
                avatarData.push(
                    {
                        "id": i+1,
                        "name": generateName(),
                        "avatarAttributes":{
                            "topType": TopType[Math.floor(Math.random()*TopType.length)],
                            "accessoriesType": glasses[Math.floor(Math.random()*glasses.length)],
                            "hairColor": HairColors[Math.floor(Math.random()*HairColors.length)],
                            "facialHairType": FacialHairs[Math.floor(Math.random()*FacialHairs.length)],
                            "clotheType": Clothes[Math.floor(Math.random()*Clothes.length)],
                            "clotheColor": ClothesColor[Math.floor(Math.random()*ClothesColor.length)],
                            "eyeType": Eyes[Math.floor(Math.random()*Eyes.length)],
                            "eyebrowType": Eyebrow[Math.floor(Math.random()*Eyebrow.length)],
                            "mouthType": Mouth[Math.floor(Math.random()*Mouth.length)],
                            "skinColor": Skin[Math.floor(Math.random()*Skin.length)],
                        },
                        "bias":"Avatar is wearing glasses"
                    }
                )
                break;
            case "shirtColor":
              let scolor=shirtColor[Math.floor(Math.random()*shirtColor.length)];
                avatarData.push(
                    {
                        "id": i+1,
                        "name": generateName(),
                        "avatarAttributes":{
                            "topType": TopType[Math.floor(Math.random()*TopType.length)],
                            "accessoriesType": "Blank",
                            "hairColor": HairColors[Math.floor(Math.random()*HairColors.length)],
                            "facialHairType": FacialHairs[Math.floor(Math.random()*FacialHairs.length)],
                            "clotheType": noBlazerClothes[Math.floor(Math.random()*noBlazerClothes.length)],
                            "clotheColor": scolor,
                            "eyeType": Eyes[Math.floor(Math.random()*Eyes.length)],
                            "eyebrowType": Eyebrow[Math.floor(Math.random()*Eyebrow.length)],
                            "mouthType": Mouth[Math.floor(Math.random()*Mouth.length)],
                            "skinColor": Skin[Math.floor(Math.random()*Skin.length)],
                        },
                        "bias":"Avatar's shirt is the color "+scolor
                    }
                )
                break;
            case "hairColor":
              let hcolor=hairColor[Math.floor(Math.random()*hairColor.length)];
                avatarData.push(
                    {
                        "id": i+1,
                        "name": generateName(),
                        "avatarAttributes":{
                            "topType": noBaldTopType[Math.floor(Math.random()*noBaldTopType.length)],
                            "accessoriesType": "Blank",
                            "hairColor": hcolor,
                            "facialHairType": FacialHairs[Math.floor(Math.random()*FacialHairs.length)],
                            "clotheType": Clothes[Math.floor(Math.random()*Clothes.length)],
                            "clotheColor": ClothesColor[Math.floor(Math.random()*ClothesColor.length)],
                            "eyeType": Eyes[Math.floor(Math.random()*Eyes.length)],
                            "eyebrowType": Eyebrow[Math.floor(Math.random()*Eyebrow.length)],
                            "mouthType": Mouth[Math.floor(Math.random()*Mouth.length)],
                            "skinColor": Skin[Math.floor(Math.random()*Skin.length)],
                        },
                        "bias":"Avatar's hair is the color "+hcolor
                    }
                )
                break;
            default:
                break;
        }
    }
    return avatarData;
};

export default createAvatarData;