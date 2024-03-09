import React from 'react';
import collegeTeams from './CollegeBasketballTeams.json';
import './App.css';
//Two interfaces that fit the JSON Data (List of teams and their fields)
interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface BballTeams {
  teams: Team[];
}
//Create a variable for the JSON data
const collegeBasketballTeams: BballTeams = collegeTeams;
//#1 Heading function that introduces the user to the site
function Header() {
  return (
    <div>
      <h1>NCAA Basketball Team List</h1>
      <h3>
        Welcome to a NCAA basketball Fan website. Below is a list of all the
        teams with their team name, mascot, and location.
      </h3>
    </div>
  );
}
//A team “card” that contains the following information about each school
function Card(props: Team) {
  const oneTeam = props;
  //Some nice styling to each individual card
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Box shadow
    flexBasis: '30%', // Each card takes up 30% of the container width
    minWidth: '200px', // Minimum width of each card
    maxWidth: '800px', // Maximum width of each card
    justifyContent: 'center',
  };

  return (
    <div style={cardStyle}>
      <h3>{oneTeam.school}</h3>
      <h3>Mascot: {oneTeam.name}</h3>
      <h3>
        Location: {oneTeam.city}, {oneTeam.state}
      </h3>
    </div>
  );
}
//A list of team cards that shows all the teams on the list. Using mapping
function TeamList() {
  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Three columns with equal width
    gap: '20px', // Gap between cards
    maxWidth: '1200px', // Maximum width of the container
    margin: '0 auto', // Center the container horizontally
  };

  return (
    <div style={cardContainerStyle}>
      {collegeBasketballTeams.teams.map((singleTeam, index) => (
        <div key={index}>
          <Card {...singleTeam} />
        </div>
      ))}
    </div>
  );
}
//Main app function
function App() {
  return (
    <>
      <Header />
      <TeamList />
    </>
  );
}

export default App;
