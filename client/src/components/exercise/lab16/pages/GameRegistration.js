import { navigate } from "@reach/router"
import React, {useState,useContext} from "react"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import ExerciseStateContext from "../Lab16Context";
import { ADJECTIVES, NOUNS } from "src/constants/lab16";

const GameRegistration = () => {

  const {setTeamName} = useContext(ExerciseStateContext);
  
    const handleContinue = () => {
        navigate("/Lab16/Exercise/MeetTeammate");
        const teamName = adjective + noun
        setTeamName(teamName)
     };
  
      
      let [noun, setNoun] = useState(NOUNS[0].name);
      let [adjective, setAdjective] = useState(ADJECTIVES[0].name);

      let handleNounChange = (e) => {setNoun(e.target.value);};

      let handleAdjectiveChange = (e) => {setAdjective(e.target.value);};

      const [nounDropdownOpen, setNounDropdownOpen] = useState(false);
      const [adjDropdownOpen, setAdjDropdownOpen] = useState(false);
      
      const nounToggle = () => setNounDropdownOpen((prevState) => !prevState);
      const adjToggle = () => setAdjDropdownOpen((prevState) => !prevState);

    return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 25, fontFamily: 'Poppins, sans-serif'}}>
        {/* display selected team name in top right corner */}
        <p style={{marginLeft: 'auto', padding: 5}}>Team: <b>{adjective + noun}</b></p>
        <h1 style={{ fontSize: 40, paddingBottom: 8, fontWeight: 'bold', color: 'black'}}>
            Welcome to the ALL Guess the Flag Tournament!
        </h1>
        <h2 style={{ fontSize: 18, padding: 16, color: 'black'}}>
          Choose a name for your team.
        </h2>
        
        {/* dropdowns within a container */}
          <h3 style={{  
            fontSize: 40, 
            fontWeight: 'bold', 
            border: '3px dashed',
            borderRadius: 6,
            borderColor: '#FACE35',
            padding: 20,
            color: '#0144D5' }}>
            {adjective}{noun}
          </h3>

          {/* for loop that brings every array item to its designated dropdown menu as a dropdown item */}
          <div style={{ display: 'flex', gap: 45, padding: '24px 0'}}>
            {/* adjective dropdown */}
            <Dropdown isOpen={adjDropdownOpen} toggle={adjToggle} direction="down">
              <DropdownToggle caret style={{ backgroundColor: '#dbe4ff', borderColor: '#dbe4ff', color: '#1622a5', fontFamily: 'Poppins, sans-serif', width: '160px', minWidth: '160px', maxWidth: '160px' }}>
                {adjective}
              </DropdownToggle>
              <DropdownMenu style={{maxHeight: "100px", overflowY: "auto"}}>
                {ADJECTIVES.map((item) => (
                  <DropdownItem key={item.id} value={item.name} onClick={handleAdjectiveChange}>
                    {item.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* noun dropdown */}
            <Dropdown isOpen={nounDropdownOpen} toggle={nounToggle} direction="down">
              <DropdownToggle caret style={{ backgroundColor: '#dbe4ff', borderColor: '#dbe4ff', color: '#1622a5', fontFamily: 'Poppins, sans-serif', width: '160px', minWidth: '160px', maxWidth: '160px' }}>
                {noun}
              </DropdownToggle>
              <DropdownMenu style={{maxHeight: "100px", overflowY: "auto"}}>
                {NOUNS.map((item) => (
                <DropdownItem key={item.id} value={item.name} onClick={handleNounChange}>
                  {item.name}
                </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
      </div>
      <button
            style={{
              color: 'white',
              backgroundColor: '#0144D5',
              border: 'none',
              borderRadius: 6,
              padding: '12px 28px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 70
            }}
            onClick={handleContinue}
            key="start"
          >
            Register team name
        </button>
    </>
    );
}

export default GameRegistration;