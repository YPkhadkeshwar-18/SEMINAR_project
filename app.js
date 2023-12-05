const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3000; // Choose a port number

// Define your API routes and middleware here
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {

  res.redirect("http://127.0.0.1:8080/")

})

app.post("/api/submitForm", function(req, res){
  const formData = req.body;

  // Access the selected values using formData.q1, formData.q2, etc.
  let skill = [];
  console.log(formData);
  for (let i = 0; i < questions.length; i++) {
    let value = formData["q" + (i + 1)];
    skill.push(value);
  }

  const result = solve(questions.length, skill);

  res.json({ result });
});

function solve(n, skill) {
  const job = {
    Doctor: [
      [15, "Calm"],
      [25, "Both_passion_and_money"],
      [35, "Work_remotely_with_colleagues"],
      [45, "Study"],
    ],
    Poet: [
      [15, "Reading/Writing"],
      [25, "Love_your_job"],
      [35, "Imagination_beyond_bound"],
      [45, "Something_creative"],
    ],
    Professor: [
      [15, "Monday_to_friday"],
      [25, "Good_communication"],
      [35, "Study"],
      [45, "Quiet_and_focused"],
    ],
    Soldier: [
      [15, "Positive_attitude"],
      [25, "Enthusiastic activities"],
      [35, "Hard_word"],
      [45, "Adapting_surrounding"],
    ],
    Engineer: [
      [15, "Team_work"],
      [25, "Good_communication"],
      [35, "Innovative"],
      [45, "Problem_solving_ability"],
    ],
    Political: [
      [15, "Decision_making_skills"],
      [25, "Good_communication"],
      [35, "Dealing_with_people"],
      [45, "Leadership"],
    ],
    Lawyer: [
      [15, "Confidence"],
      [25, "Dealing_with_people"],
      [35, "Negotiating"],
      [45, "Research_skill"],
    ],
    Chef: [
      [15, "Team_work"],
      [25, "Something_creative"],
      [35, "Love_your_job"],
      [45, "Multitasking"],
    ],
    Author: [
      [15, "Artistic"],
      [25, "Something_creative"],
      [35, "Reading/Writing"],
      [45, "Imagination_beyond_bound"],
    ],
    Scientist: [
      [15, "Analytical_thinking"],
      [25, "Problem_solving"],
      [35, "Research_skill"],
      [45, "Curiosity"],
    ],
    Fashion_designer: [
      [15, "Both_passion_and_money"],
      [25, "Perfect_planner"],
      [35, "Love_your_job"],
      [45, "Something_creative"],
    ],
    Artist: [
      [15, "Work_from_home"],
      [25, "Imagination_beyond_bound"],
      [35, "Something_creative"],
      [45, "Artistic"],
    ],
    Philosopher: [
      [15, "Calm"],
      [25, "Confident"],
      [35, "Positive_attitude"],
      [45, "Good_communication"],
    ],
    Government_servant: [
      [15, "Sustainable"],
      [25, "To_achieve_big_success"],
      [35, "9 to 5 job"],
      [45, "Study"],
    ],
    Dancer: [
      [15, "Team_work"],
      [25, "Bold"],
      [35, "Enthusiastic activities"],
      [45, ""],
    ],
    Beautician: [
      [15, ""],
      [25, "Love_your_job"],
      [35, "Can work overtime if pays well"],
      [45, "Something_creative"],
    ],
    Actor: [
      [15, "Both_passion_and_money"],
      [25, "Artistic"],
      [35, "Good_communication"],
      [45, "Bold"],
    ],
    Manager: [
      [15, "Smart_work"],
      [25, "Striclty_professional"],
      [35, "Good_communication"],
      [45, "Dealing_with_people"],
    ],
    Architect: [
      [15, "Problem_solving"],
      [25, "Innovative"],
      [35, "Analytical_thinking"],
      [45, "Perfect_planner"],
    ],
    Astronaut: [
      [15, "Analytical_thinking"],
      [25, "Research_skill"],
      [35, "Adapting_surrounding"],
      [45, "Study"],
    ],
    Sportsman: [
      [15, "Team_work"],
      [25, "Hard_work"],
      [35, "Leadership"],
      [45, "Enthusiastic activities"],
    ],
    Judge: [
      [15, "9 to 5 job"],
      [25, "Problem_solving"],
      [35, "Calm"],
      [45, "Decision_making_skills"],
    ],
    Businessman: [
      [15, "Hard_work"],
      [25, "Problem_solving"],
      [35, "Dealing_with_people"],
      [45, "To_achieve_big_success"],
    ],
    Chartered_accountant: [
      [15, "Analytical_thinking"],
      [25, ""],
      [35, "Problem_solving"],
      [45, "Study"],
    ],
  };

  const skillset_count = [];

  for (const jobTitle in job) {
    let ct = 0;
    let score = 0;

    for (let i = 0; i < n; i++) {
      const check = skill[i];

      for (const [points, skillName] of job[jobTitle]) {
        if (skillName === check) {
          ct++;
          score += points;
        }
      }
    }
    if (score > 0) {
      skillset_count.push([score, [jobTitle, ct]]);
    }
  }

  skillset_count.sort(comp);
  return skillset_count;
}
function comp(a, b) {
    return a[0] > b[0] ? -1 : 1;
  }

const questions = [
  {
    question: "What do you like to do in your free time?",
    options: [
      "Something creative",
      "Imagination beyond bound",
      "Enthusiastic activity",
      "Reading/Writing",
    ],
  },
  {
    question: "Pick a quality that you have?",
    options: [
      "Study",
      "Analytical thinking",
      "Decision making skills",
      "Good communication",
      "Research skill",
    ],
  },
  {
    question: "How do you describe your personality?",
    options: ["Innovative", "Perfect planner", "Positive attitude", "Bold"],
  },
  {
    question: "What kind of work approach do you prefer?",
    options: ["Hard work", "Smart work", "Quick work", "Team work"],
  },
  {
    question: "Things you are good at?",
    options: [
      "Problem solving",
      "Adapting to surroundings",
      "Dealing with people",
      "convincing to people",
    ],
  },
  {
    question: "What would be your approach to your work friends?",
    options: [
      "Work remotely with colleagues",
      "Strictly professional",
      "Few friends at work",
      "People you can hang out with",
    ],
  },
  {
    question: "How do you generally feel about working?",
    options: [
      "Both passion and money",
      "To achieve big success",
      "Love your job",
    ],
  },
  {
    question: "What kind of work environment would you prefer?",
    options: ["Sustainable", "Artistic", "Quiet and focused", "Supportive"],
  },
  {
    question: "How do you like your typical workday to look like?",
    options: [
      "9 to 5 job",
      "Can work overtime if it pays well",
      "Work from home",
      "Monday to Friday",
    ],
  },
  {
    question: "How do you like your typical workday to look like?",
    options: [
      "9 to 5 job",
      "Can work overtime if it pays well",
      "Work from home",
      "Monday to Friday",
    ],
  },
];
