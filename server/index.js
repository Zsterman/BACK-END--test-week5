const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A faithful friend is a strong defense.",
					 "A friend is a present you give yourself.",
           "A friend asks only for your time not your money.",
           "A light heart carries you through all the hard times.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortunes = fortunes[randomIndex];

  res.status(200).send(randomFortunes);
  
});


app.get("/api/strategy", (req, res) => {
  const strategies = ["Don't stress one thing more than another",
            "Discover the recipes you are using and abandon them",
					 "Emphasize the flaws",
           "Feed the recording back out of the medium",
           "Go outside. Shut the door.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * strategies.length);
  let randomStrategies = strategies[randomIndex];

  res.status(200).send(randomStrategies);
  
});


app.get("/api/flavors", (req, res) => {
  const flavors = ["Chocolate",
            "Vanilla",
					 "Strawberry",
           "Mint",
           "YOU DONT GET ANY ICE CREAM TODAY",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * flavors.length);
  let randomFlavors = flavors[randomIndex];

  res.status(200).send(randomFlavors);
  
});

app.get("/api/joke", (req, res) => {
  const joke = ["Yo Momma",
            "Yo daddi",
					 "Yo sista",
           "Yo Brotha",
           "NOBODY (s p o o k y)",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * joke.length);
  let randomJokes = joke[randomIndex];

  res.status(200).send(randomJokes);
  
});





app.listen(4000, () => console.log("Server running on 4000"));
