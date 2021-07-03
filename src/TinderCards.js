import React,{useEffect, useState} from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import axios from "./axios";
function TinderCards() {
    const [people, setPeople] = useState([
      {
          name:"Elon Musk",
          url:"https://images.pexels.com/photos/60132/pexels-photo-60132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      },
      {
        name:"jeff Bezos",
        url:"https://images.pexels.com/photos/60126/pexels-photo-60126.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    },
    {
      name:"Tom vru",
      url:"https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name:"bto linb",
    url:"https://images.pexels.com/photos/8474498/pexels-photo-8474498.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
},

    ]);
    // useEffect(() =>{
    //    async function fetchData() {
    //      const req = await axios.get("/tinder/cards");
    //      setPeople(req.data);
    //    }
    //    fetchData();
    // }, []);

      const swiped = (direction, nameToDelete) => {
          console.log("removing: " + nameToDelete);
          //setLastDirection(direction);
      };
      const outOfFrame = (name) => {
    console.log(name + "left the screen!");
      };
    return (
        <di className="tinderCards">
            <div className="tinderCards__cardContainer">
               {people.map((person)=>(
          <TinderCard
          className = "swipe"
          key={person.name}
          preventSwipe = {["up","down"]}
          onSwipe = {(dir)=> swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage: `url(${person.url}) ` }}
              className="card"
              >
                <h3>{person.name}</h3>
            </div>
          </TinderCard>
           ))}
            </div>
          
        </di>
    )
}

export default TinderCards
