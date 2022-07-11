// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Abe",
  middleName: "",
  lastName: "Shaw",
  message: " Sharpening my skills one code at a time",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/abeshaw97",
    },
    
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/_abeshaw/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abraham-s-77280ab4/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  profilePictureLink:"_abeshaw",
  imageSize: 375,
  message:
    "My name is Abe Shaw and I am currently a Day Trader in the Indices market as well educate other people on how to trade in my WT Academy course.I’m a 2020 graduate from Michigan State University where I received my Bachelors of Science degree in Advertising Management.I am currently now finishing up a Full Stack development program from MSU as I started to pursue an interest in coding!",
  resume: "https://drive.google.com/file/d/1_XGuijv8dytn-KZkFe3aVg246-YfKVvE/view?usp=sharing",
};

// PROJECTS SECTION

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "abeshaw97", 
  reposLength: 4,
  specificRepos: ["run-buddy","Socialnetwork-Nosql","PWA-Budgettracker","City-Forecast"],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for potential Front End development postions,if you have any questions please feel free to email me at",
  email: "shawabra@msu.edu",
};



export { navBar, mainBody, about, repos, getInTouch };
