import { eventImg } from './EventImg';

export const eventsDet = [


  /// Technical

  /// 1. Paper presentation
  {
    id: 'paperPresentation',
    name: 'Paper Presentation',
    select: 'Paper Presentation',
    image: eventImg.paper,
    form: 'https://forms.gle/fv75hnVxdjPXFraV9',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1F9Hasal64uVljgFobMn5NA7osaWjR5Xq/view?usp=drive_link",
    ppt: "https://docs.google.com/document/d/1GaZ9PEfOtwUMrjNcyRD-gpnJQncWnOhifx1f2PKwS2w/edit?usp=sharing",
    domain: "Open topics related to engineering.",
    tag: " Prizes worth ₹5000",
    fee: "RS 850(PER TEAM)",
    deadline: "18th March for publishing, 20th March for non-publishing papers.",
    teamCount: [
      "1-4"
    ],
    teamFormation: [
      "Two to four members in a team.",
      "Participants from any institution are welcome to form a team for the event.",
      "Registration for the paper presentation can only be done on the official event website."
    ],
    abstract: "https://drive.google.com/drive/folders/1Mh6oNhWVDnQq0bRMOwQNIquECwOsNnN-?usp=sharing",
    info: [
      "Explore your scholarly depths in 'Paper Presentation'! This dynamic event challenges thought leaders, scholars, and professionals to unveil their latest research and innovative concepts. Each participant engages in sophisticated discussions, fostering creative collaborations that weave an intellectual tapestry across academic and professional realms. It's more than just a presentation; it's a platform to spotlight your intellectual finesse!",
    ],
    notice: [
      "Those who need to publish your paper, the registration deadline for your abstracts and the research paper should be submitted within 18th of March and also your team should present the paper as mentioned in the rulebook.",
      "Those who need not publish thier paper, the registration deadline for abstract submission  20th of March and the selected teams can present the paper to us as mentioned in the rulebook."
    ],
    eligibility: [ 
      "Open to all students, faculties and professionalist from any background with a passion for research and presentation."
    ],
    contact: {
      name: {
        faculty: ["Dr. POONGODI C", "Dr. SAMPOORNAM K P", "Prof. PUSHPAVALLI M","Prof. DEEPA D", "Prof. PERARASI T"], 
        student: ["SOUNDARRAJAN K R - 9790325055", "SRI PRASATH V S - 8903589345"]
      },
      info: "bitvprayukti@bitsathy.ac.in",
    },
  },


  /// 2. Project presentation
  {
    id: 'projectPresentation',
    name: 'Project Presentation',
    select: 'Project Presentation',
    image: eventImg.project,
    form: 'https://forms.gle/fv75hnVxdjPXFraV9',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1KY46LR1-HKEw1_H_tKfxY-UvLM26H86P/view?usp=sharing",
    domain: "Healthcare and Medicine, Smart Transportation and Automotives, Smart Agriculture, Smart Education, Open Innovation",
    tag: " Prizes worth ₹5000",
    fee: "RS 600(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-4"
    ],
    teamFormation: [
      "Minimum of 1 and a maximum of 4 members in a team are allowed. Any institution (School /College/ University) may form a team.",
      "Team leads could register on behalf of the team members using the given link 3) The official website BIT V-PRAYUKTI’24 must only be used for registration. 4) Team details must be confirmed prior to the Stage-I shortlisting, no further changes would be considered."
    ],
    abstract: "https://docs.google.com/presentation/d/1c1sRB8Kyf8RKfYxECD4-LQsy7hH0CYTU/edit?usp=drive_link",
    info: [
      "Project Presentation stands out as a distinguished platform for visionaries, experts, and academics to unveil their cutting-edge projects and inventive strategies. It fosters lively discussions and sparks the creation of distinctive collaborations, paving the way for revolutionary advancements in both academic realms and the industry landscape."
    ],
    eligibility: [
      "Open to all students from any background with their valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. ELANGO S", "Prof. DANIEL RAJ A", "Prof. SAJAN P PHILIP"], 
        student: ["VIMAL RAM K C - 9677791525", "BHARATH S - 6369815594"]
      },
      info: "bitvprayukti@bitsathy.ac.in",
    },
  },

  /// 3. AIML Hackathon
  {
    id: 'aimlHackathon',
    name: 'AIML Hackathon',
    select: 'AIML Hackathon',
    image: eventImg.aiml,
    form: 'https://forms.gle/ys8uLTxcUmmWJ3K8A',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1TqtxnYgxvP4Boa2JgpzRK3-hOvJxQOFc/view?usp=drive_link",
    tag: " Prizes worth ₹7000",
    fee: "RS 500(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "3-5"
    ],
    teamFormation: [
      "Construct a team of a minimum of 3 and a maximum of 5 members. Any institution (School /College/ University) may form a team.",
      "It is not mandatory for all the team members to register in the registration form, team members must sign up themselves in the link and team leads must register on behalf of the team.",
      "Register a team for the specified competition online on the official BIT V-PRAYUKTI’24 website only.",
      "Team details must be confirmed prior to the Stage-I shortlisting process, no further changes in the team details are encouraged."
    ],
    problem: "https://docs.google.com/document/d/1jU348guUFYzHDDkh1o0zrh0G9cFuMBarG_FgVejEXH0/edit",
    abstract: "https://docs.google.com/presentation/d/1g2GppBAtUddcDa6GeSmbu-bkyMFQkVdx/edit?usp=drive_link",
    info: [
      "AI/ML Hackathon is a collaborative event where tech enthusiasts, data scientists, and developers come together to engage in intensive, time-bound programming sessions. Focused on artificial intelligence and machine learning, participants work on real-world challenges, brainstorming and implementing innovative solutions within a set timeframe."
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      info: "bitvprayukti@bitsathy.ac.in",
      name: {
        faculty: ["Prof. KARTHIKEYAN S", "Prof. STEPHEN SAGAYARAJ A"], 
        student: ["HARISH C - 6380728032", "VISHAAL E - 6369366022"]
      }
    },
  },


  /// 4. IOT Hackathon
  {
    id: 'iotHackathon',
    name: 'IOT Hackathon',
    select: 'IOT Hackathon',
    image: eventImg.iot,
    form: 'https://forms.gle/ys8uLTxcUmmWJ3K8A',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1w6UPXpWeKaJsbqTJrrFGy8A-8LY5RWuB/view?usp=drive_link",
    tag: " Prizes worth ₹5000",
    fee: "RS 500(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "3-5"
    ],
    teamFormation: [
      "Construct a team of a minimum of 3 and a maximum of 5 members. Any institution (School /College/ University) may form a team.",
      "It is not mandatory for all the team members to register in the registration form, team members must sign up themselves in the link and team leads must register on behalf of the team.",
      "Register a team for the specified competition online on the official BIT V-PRAYUKTI’24 website only.",
      "Team details must be confirmed prior to the Stage-I shortlisting process, no further changes in the team details are encouraged."
    ],
    problem: "https://docs.google.com/document/d/1jQAo3DGJODatrDPosqL7LD_-4wpdBzMk_UXrp6qhDZE/edit",
    abstract: "https://docs.google.com/presentation/d/18oB5oKRCYJaJmiDB-er65PmkpStLgeoU/edit?usp=drive_link",
    info: [
      "IoT Hackathon is an immersive event where Tech enthusiasts, developers, and engineers collaborate to create innovative solutions within the realm of the Internet of Things (IoT). Participants engage in hands-on coding and problem-solving, leveraging connected devices to address real-world challenges and push the boundaries of IoT applications."
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. SUBHARATHANA N", "Prof. BARANIDHARAN V"], 
        student: ["KAVIRAJ A - 9865310135", "PRAKASH A - 9843617455"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },


  /// 5. Entrepreneurship dup
  {
    id: 'entrepreneurship',
    name: 'Entrepreneurship',
    select: 'Entrepreneurship',
    image: eventImg.entrepreneur,
    form: 'https://forms.gle/6bYCMZCtV41fXjmE6',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1U2GorHbqfbgDYbgT_GHhs1CLpoDVllJF/view?usp=drive_link",
    tag: " Prizes worth ₹7000",
    fee: "RS 450(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-3"
    ],
    teamFormation: [
      "1-3",
    ],
    info: [
      "Ignite your entrepreneurial spirit! Dive into an event crafted to assess your business acumen, marketing finesse, and inventive mindset. Brace yourself for stimulating challenges, where you'll unveil persuasive prowess and craft a revolutionary business concept in a high-energy setting. Impress the judges with your critical thinking, positivity, creativity, and vision – step into the spotlight and emerge as the next entrepreneurial sensation!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. ARULMURUGAN L", "Prof. NIRMAL KUMAR R"], 
        student: ["ARAVINDA RAM - 8778946434", "HARISANTH - 8072218587"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },

  
  /// 6. Circuit Debugging dup
  {
    id: 'circuitDebugging',
    name: 'Circuit Debugging',
    select: 'Circuit Debugging',
    image: eventImg.circuit,
    form: 'https://forms.gle/1rRG6C6pTvd1ghoq8',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1X2iFXicc7LpAxW2sZIWWxg1U77ZFP5Wa/view?usp=drive_link",
    domain: "Circuit Branches [ ECE, EEE, EIE]",
    tag: " Prizes worth ₹7000",
    fee: "RS 400(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-2"
    ],
    teamFormation: [
      "1 - 2",
    ],
    info: [
      "Delve into the Circuit Debugging challenge! Tech enthusiasts showcase skills in identifying and fixing glitches in electronic circuits. Join for hands-on tasks, precision, problem-solving, and refining electronic pathways. It's the ultimate test for electronics enthusiasts!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. MANU RAJU", "Prof. RAMYA P"], 
        student: ["SANJITH VISHAL S - 8072705124", "AKASH K - 8610044540"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },



  /// 7. Line Follower
  {
    id: 'lineFollower',
    name: 'Line Follower',
    select: 'Line Follower',
    image: eventImg.line,
    form: 'https://forms.gle/AxfxWGsN4FLhCvcdA',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1bAirRYTWly_-qo9Z21VCIsMEiI-mqlAJ/view?usp=drive_link",
    tag: " Prizes worth ₹7000",
    fee: "RS 500(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-5"
    ],
    teamFormation: [
      "A team can consist of a minimum of 1 and a maximum of 5 members. Any institution or group of students may form a team or individuals may also participate."
    ],
    info: [
      "Embark on the Line Follower challenge! This event is tailor-made to put your engineering skills to the test as you design a robot to navigate a predefined path autonomously. Get ready for an exhilarating experience where precision, problem-solving, and innovative thinking come together. Showcase your robotic finesse, overcome challenges, and emerge as the mastermind behind the next-gen Line Follower robot!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. RAM KUMAR R", "Prof. SATHIYAMURTHI P"], 
        student: ["SHYAM N - 6383592816", "SUHAS E - 9345475764"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },


  /// 8. Maze Solver dup
  {
    id: 'mazeSolver',
    name: 'Maze Explorer',
    select: 'Maze Explorer',
    image: eventImg.maze,
    form: 'https://forms.gle/AxfxWGsN4FLhCvcdA',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1GBsu_0BE-0Kcyzd_xHecDvmE-OLH4v17/view?usp=drive_link",
    tag: " Prizes worth ₹7000",
    fee: "RS 500(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-5"
    ],
    teamFormation: [
      "A team can consist of a minimum of 1 and a maximum of 5 members. Any institution or group of students may form a team or individuals may also participate.",
    ],
    info: [
      "Dive into the future of robotics at Maze Explorer! Watch autonomous robots navigate unknown mazes, showcasing innovative designs dating back to the 1970s. Join this epic challenge, where creativity meets technology. ",
      "Challenge: conquer a fixed-size maze with an unknown configuration, relying solely on onboard hardware and processing. No external input allowed – it's pure robot brilliance!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. RAMESH R", "Prof. VENKATESHKUMAR V"], 
        student: ["MOHAMED UVAISE A - 7339316534", "HARI NIVASAA V - 9842733134"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },


  /// 9. Robo Soccer
  {
    id: 'roboSoccer',
    name: 'Robo Soccer',
    select: 'Robo Soccer',
    image: eventImg.robo,
    form: 'https://forms.gle/AxfxWGsN4FLhCvcdA',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1R-hcFSYkQSov8lGJ2xT49_koMBmwm8Bd/view?usp=drive_link",
    tag: " Prizes worth ₹7000",
    fee: "RS 500(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-5"
    ],
    teamFormation: [
      "A team should contain 3 to 4 members only.",
    ],
    info: [
      "Dive into the thrill of Robo Soccer! This event invites enthusiasts to design and showcase their robotic soccer players in intense, competitive matches. Engineer your way to victory as your robots showcase agility, strategy, and technical finesse on the miniature soccer field. It's a dynamic showdown where innovation meets the excitement of the game. Join us for Robo Soccer and bring your mechanical team to life in this electrifying competition!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. LEEBAN MOSES M", "Prof. TAMILSELVAN S"], 
        student: ["LINGESH K - 8072468696", "SASIKUMAR T - 9790502743"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },



  /// 10. Tech it out
  {
    id: 'techItOut',
    name: 'Tech It Out',
    select: 'Tech It Out',
    image: eventImg.techitout,
    form: 'https://forms.gle/1rRG6C6pTvd1ghoq8',
    type: 'technical',
    rulebook: "https://drive.google.com/file/d/1LGp1WLzXP5DGAn9ltjAMpAT5ng2JnSUQ/view?usp=drive_link",
    tag: " Prizes worth ₹1000",
    fee: "RS 400(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "1-2"
    ],
    teamFormation: [
      "minimum 1 and maximum 2 members",
    ],
    info: [
      "Tech it Out, a standout in TechQuest, lets participants flaunt technical prowess. In this challenge, navigate intricate problems within a set timeframe, showcasing efficiency and the artistry of elegant problem-solving. As a professional competition, Tech it Out offers a real-time measure of participants' domain-specific expertise."
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. SANJOY DEB", "Prof. KANTHIMATHI N"], 
        student: ["MIRUTHUN KANNAN - 9629014233", "HARISH R - 9843746377"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    },
  },



  /// Non Technical

  /// 1. Quiz
  {
    id: 'quiz',
    name: 'Series Quiz',
    select: 'Series Quiz',
    image: eventImg.quiz,
    form: 'https://forms.gle/fKmykE81dAtVRa7CA',
    type: 'nonTechnical',
    rulebook: "https://drive.google.com/file/d/1EwnkiIOPjzWz29G0vI1ddXPAXRb45zsz/view?usp=drive_link",
    tag: " Rewards & Certificates",
    fee: "RS 100(PER INDIVIDUAL)",
    deadline: "20 MARCH",
    teamCount: [
      "Individual Participation"
    ],
    teamFormation: [
      "Individual participation",
      "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
    ],
    info: [
      "Calling all series buffs! Test your memory skills in this enthralling event crafted exclusively for the Netflix and chill enthusiasts. Can you remember intricate plot lines across 8 seasons while blissfully forgetting the last one? Join in and find out if your memory is up to the challenge!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      info: "bitvprayukti@bitsathy.ac.in",
      name: {
        faculty: ["Prof. Saranya N", "Prof. Dhanalakshmi S"], 
        student: ["VINETH R - 6382129544", "ROHIT P - 7708148545"]
      }
    },
  },


/// 2. Theme Photography
{
  id: 'themePhotography',
  name: 'Theme Photography',
  select: 'Theme Photography',
  image: eventImg.theme,
  form: 'https://forms.gle/fKmykE81dAtVRa7CA',
  type: 'nonTechnical',
  rulebook: "https://drive.google.com/file/d/1AjToZMmTw9jZfA794dXiLuB114uHF9iw/view?usp=drive_link",
  tag: " Prizes worth ₹1000",
  fee: "RS 100(PER INDIVIDUAL)",
  deadline: "20 MARCH",
  teamCount: [
    "Individual Participation"
  ],
  teamFormation: [
    "Individual participation",
    "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
  ],
  info: [
    "If you're a shutterbug eager to flaunt your skills, this is your stage. Explore the boundaries of a selected theme, freeze your mind in pixels, and exhibit your presence of mind. It's a chance to immortalize memories in the art of photography!"
  ],
  eligibility: [
    "Open to all students from any background with valid ID cards."
  ],
  contact: {
    name: {
      faculty: ["Prof. Ajin R Nair"], 
      student: ["RITHIVIK R - 6374717620", "SATHEESH KUMAR K - 9345577429"]
    },
    info: "bitvprayukti@bitsathy.ac.in"
  },
},

/// 3. Bridge Making
{
  id: 'bridgeMaking',
  name: 'Bridge Making',
  select: 'Bridge Making',
  image: eventImg.bridge,
  form: 'https://forms.gle/jHA7bgKDvN5WgWL97',
  type: 'nonTechnical',
  rulebook: "https://drive.google.com/file/d/1ol-Y8z3gvVpWfDZsoyK4UHMFn6DtICtm/view?usp=sharing",
  tag: "Rewards & Certificates",
  fee: "RS 150(PER TEAM)",
  deadline: "20 MARCH",
  teamCount: [
    "1-3"
  ],
  teamFormation: [
    "Individual participation",
    "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
  ],
  info: [
    "Prepare to channel your inner engineer in the exhilarating Bridge Making challenge! Unleash creativity as you construct magnificent bridges using only popsicle sticks and glue. Get ready to be amazed by your creations and immerse yourself in the thrilling competition that awaits!"
  ],
  eligibility: [
    "Open to all students from any background with valid ID cards."
  ],
  contact: {
    name: {
      faculty: ["Prof. Krishnaraj R"], 
      student: ["MANOJ T A - 9003811835", "RANJITH RAGAVENDAR J - 8220311800"]
    },
    info: "bitvprayukti@bitsathy.ac.in"
  },
},

/// 4. Rubik's Cube
{
  id: 'rubiksCube',
  name: 'Rubik\'s Cube',
  select: 'Rubik\'s Cube',
  image: eventImg.cube,
  form: 'https://forms.gle/GKu5ewAVYaoRU3fR9',
  type: 'nonTechnical',
  rulebook: "https://drive.google.com/file/d/1GOM306a8zHw38IsnNLFyXM2qS7nfjQRZ/view?usp=sharing",
  tag: " Rewards & Certificates",
  fee: "RS 150(PER INDIVIDUAL)",
  deadline: "20 MARCH",
  teamCount: [
    "Individual Participation"
  ],
  teamFormation: [
    "Individual participation",
    "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
  ],
  info: [
    "Get ready to twist and turn in our Rubik's Cube Challenge! Participants will showcase their cube-solving skills, employing tricks to outsmart the challenge. The clock is ticking, and the evaluation is based on how swiftly you conquer the Rubik's Cube. It's a test of both strategy and speed – are you up for the challenge?"
  ],
  eligibility: [
    "Open to all students from any background with valid ID cards."
  ],
  contact: {
    name: {
      faculty: ["Prof. Sharmila A", "Prof. Sandhiyadevi P"], 
      student: ["DINESH KUMAR M - 8610825871", "DHANUSH D - 9659730002"]
    },
    info: "bitvprayukti@bitsathy.ac.in"
  },
},

/// 5. Puzzle
{
  id: "puzzle",
  name: "Puzzle",
  select: "Puzzle",
  image: eventImg.puzzle,
  form: 'https://forms.gle/fKmykE81dAtVRa7CA',
  type: "nonTechnical",
  rulebook: "https://drive.google.com/file/d/1Uut6BFoCqErK0DrOIEkIMEqujJhiF7p3/view?usp=drive_link",
  tag: "Rewards & Certificates",
  fee: "RS 100(PER INDIVIDUAL)",
  deadline: "20 MARCH",
  teamCount: [
    "1-3"
  ],
  teamFormation: [
    "Team members - 3",
    "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
  ],
  info: [
    "Get set for the mind-bending Puzzles Extravaganza! Dive into a world where logic and creativity collide as you navigate through crossword puzzles, Sudoku, brain teasers, and more. Prepare to be captivated by the challenge, immerse yourself in the joy of problem-solving, and brace for the exhilarating competition that lies ahead!"
  ],
  eligibility: [
    "Open to all students from any background with valid ID cards."
  ],
  contact: {
    name: {
      faculty: ["Prof. Karthiga", "Prof. Annapoorani B T"], 
      student: ["KAVIN PARITHI S - 9025932226", "SETHURAJAN M - 9345825205"]
    },
    info: "bitvprayukti@bitsathy.ac.in"
  }
},

  /// 6. Mock CID
  {
    id: "mockCID",
    name: "Mock CID",
    select: "Mock CID",
    image: eventImg.cid,
    form: 'https://forms.gle/XUaQSytWjft2YQRd8',
    type: "nonTechnical",
    rulebook: "https://drive.google.com/file/d/1RAzfbKp7RcFqzeaqAokKEbvnHnjaowbM/view?usp=drive_link",
    tag: "Rewards & Certificates",
    fee: "RS 100(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "2"
    ],
    teamFormation: [
      "Individual participation",
      "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
    ],
    info: [
      "Step into the shoes of an investigative genius in our Mock-CID event – a thrilling experience for all aspiring detectives! Join us in uncovering the real culprit as each group races through the rounds. The fastest to complete will qualify for the final challenge – solving a Murder Mystery. Teams displaying exceptional sleuthing skills in the shortest time will emerge victorious in this captivating Mock-CID adventure!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. Gayathri R", "Prof. Mythili S"], 
        student: ["THARUN KUMARAN K E - 9688515799", "SRIRAM S S - 7904021565"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    }
  },



  /// 7. Connections dup
  {
    id: "connections",
    name: "Connections",
    select: "Connections",
    image: eventImg.connections,
    form: 'https://forms.gle/XUaQSytWjft2YQRd8',
    type: "nonTechnical",
    rulebook: "https://drive.google.com/file/d/150UeDOx13sA1OPDJt2A92Tg_XuRVFXv4/view?usp=drive_link",
    tag: "Rewards & Certificates",
    fee: "RS 100(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "2"
    ],
    teamFormation: [
      "Individual participation",
      "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
    ],
    info: [
      "Engage your intellect in the Connections Challenge! Uncover the linking word between images, make swift and accurate guesses within the time limit, and accumulate points for your team. The competition's judgment hinges on your accumulated points—a rapid and sharp-witted challenge that keeps your mind agile and connected!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. Soundarya B", "Prof. Pousia"], 
        student: ["GURU AADITHYA S - 7448530459", "SANDEEP S - 9384775780"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    }
  },



  /// 8. Da vinci's newspaper
  {
    id: "daVincisNewspaper",
    name: "Da vinci's Newspaper",
    select: "Da vinci's Newspaper",
    image: eventImg.newspaper,
    form: 'https://forms.gle/fKmykE81dAtVRa7CA',
    type: "nonTechnical",
    rulebook: "https://drive.google.com/file/d/1BQofcHqIFC-qaWUyd7jwQoG4NO8ZDQ3O/view?usp=drive_link",
    tag: "Rewards & Certificates",
    fee: "RS 100(PER INDIVIDUAL)",
    deadline: "20 MARCH",
    teamCount: [
      "Individual Participation"
    ],
    teamFormation: [
      "Individual participation",
      "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
    ],
    info: [
      "Immerse yourself in the Da Vinci’s Newspaper Quiz—a versatile intellectual challenge. Sharpen your mind with eccentric thinking and engage in diverse questions covering general knowledge. The participant atop the leaderboard claims victory, showcasing practical knowledge in this engaging competition."
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. Vellingiri A", "Prof. Harish Kumar P"], 
        student: ["RAJA PANDI P - 8778212687", "SIBI SEENIAPPAN D - 9342444864"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    }
  },



  /// 9. Action Speaks
  {
    id: "actionSpeaks",
    name: "Action Speaks",
    select: "Action Speaks",
    image: eventImg.speaks,
    form: 'https://forms.gle/XUaQSytWjft2YQRd8',
    type: "nonTechnical",
    rulebook: "https://drive.google.com/file/d/1lqvoc1Zpe5AeCc5rQozOMuEo2QUjwSXG/view?usp=drive_link",
    tag: "Rewards & Certificates",
    fee: "RS 100(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "2"
    ],
    teamFormation: [
      "Form a team of two members , from any institution (School /College/ University)",
      "It is not mandatory for all the team members to register in the registration form, team members must sign up themselves in the link and team leads must register on behalf of the team.",
      "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
    ],
    info: [
      "Step into the world of 'Action Speaks,' where silent expressions become the language of cinema. Decode movies through creative gestures, leading to a blindfolded challenge in the final act. It's a cinematic journey of non-verbal prowess and thrilling surprises!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: ["Prof. Abinaya", "Prof. Suganya Devi C R"], 
        student: ["KEERTHIVASHAN K D - 6369292101", "DIVAKARRAJ R - 9047062277"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    }
  },
  



  /// 10. Shoot and Broadcast
  {
    id: "shootAndBroadcast",
    name: "Shoot and Broadcast",
    select: "Shoot and Broadcast",
    image: eventImg.shoot,
    form: 'https://forms.gle/cWVAb3SnMovQz8659',
    type: "nonTechnical",
    rulebook: "https://drive.google.com/file/d/1PpyoLxYXmLZqX51ZGk_6XuVcom6eh03t/view?usp=drive_link",
    tag: "Rewards & Certificates",
    fee: "RS 200(PER TEAM)",
    deadline: "20 MARCH",
    teamCount: [
      "2-4"
    ],
    teamFormation: [
      "Individual participation",
      "Registration for any competition can only be done on the official BIT V-PRAYUKTI’24 website only."
    ],
    info: [
      "Unleash your inner videographer in 'Shoot and Broadcast'! This dynamic competition tests your creativity and storytelling prowess. Each team receives an on-the-spot theme and a campus location to capture a 60-second video within the deadline. Judged on the creative delivery of content through your lenses, it's an exciting challenge to showcase your filmmaking skills!"
    ],
    eligibility: [
      "Open to all students from any background with valid ID cards."
    ],
    contact: {
      name: {
        faculty: [ "Prof. Manu Raju" ], 
        student: ["VIJAY KUMAR K S - 6381282604", "SELVAHAREESH K - 7810013347"]
      },
      info: "bitvprayukti@bitsathy.ac.in"
    }
  },





  /// Workshops dup

  /// 1. AR Technology pend
  {
    id: 'ar',
    name: 'AR Technology',
    image: eventImg.arvr,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name: {
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Engage in interactive learning during our workshops! Immerse yourself in hands-on training covering a range of trending topics, providing valuable insights and skill enhancement. Seize this chance for practical knowledge that goes beyond the fundamentals! To know all the topics of workshop and its description in detail, kindly refer the rulebook."
    ,
  },

  /// vr
  {
    id: 'vr',
    name: 'VR Technology',
    image: eventImg.vr,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name: {
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Engage in interactive learning during our workshops! Immerse yourself in hands-on training covering a range of trending topics, providing valuable insights and skill enhancement. Seize this chance for practical knowledge that goes beyond the fundamentals! To know all the topics of workshop and its description in detail, kindly refer the rulebook."
    ,
  },


  /// 2. Web Scrapping pend
  {
    id: 'webScraping',
    name: 'Web Scraping',
    image: eventImg.web,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name: {
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Engage in interactive learning during our workshops! Immerse yourself in hands-on training covering a range of trending topics, providing valuable insights and skill enhancement. Seize this chance for practical knowledge that goes beyond the fundamentals! To know all the topics of workshop and its description in detail, kindly refer the rulebook."
    ,
  },


  /// 3. Cyber Security pend
  {
    id: 'cyberSecurity',
    name: 'Cyber Security',
    image: eventImg.cyber,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name:{
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Cyber security, also known as information technology security, refers to the practice of protecting computer systems, networks, programs, and data from unauthorized access, misuse, modification, or denial of service. It involves implementing various measures, technologies, and processes to prevent, detect, and respond to cyber threats and attacks. Cyber security aims to ensure the confidentiality, integrity, and availability of information and systems, safeguarding against potential vulnerabilities, malicious actors, and cyber crimes."
    ,
    points: [
      "Virus and Ransomware",
      "Google Dorking",
      "Social Media Faking its Intimacy",
      "Introduction to Burp Suite"
    ]
  },

  
  /// 4. 3d Modelling comp
  {
    id: 'modelling',
    name: '3D Modelling',
    image: eventImg.printing,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name: {
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"],
        },
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
        "Autodesk Maya is a powerful and widely used 3D computer graphics software known for its versatility and comprehensive toolset. Developed by Autodesk, Maya has become a staple in industries like film, television, video games, and architecture due to its ability to create stunning visual effects, animations, and virtual environments."
    ,
    points: [
      "Features and Capabilities",
      "Modeling",
      "Animation",
      "Rendering",
      "Simulation"
    ]
  },


  /// 5. shading comp
  {
    id: 'shading',
    name: 'Art-Pencil Shading',
    image: eventImg.shading,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name:{
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Take your drawing to the next level with this pencil shading class! Whether you're a complete beginner or looking to refine your skills, this class will equip you with the techniques needed to create realistic depth and dimension in your artwork."
    ,
    points: [
      "The fundamentals of light and shadow",
      "Shading for different subjects",
      "Doubt Clarification Section"
    ]
  },


  /// 6. SQL pend
  {
    id: 'sql',
    name: 'SQL (My SQL or SQL Animated)',
    image: eventImg.sql,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name:{
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Engage in interactive learning during our workshops! Immerse yourself in hands-on training covering a range of trending topics, providing valuable insights and skill enhancement. Seize this chance for practical knowledge that goes beyond the fundamentals! To know all the topics of workshop and its description in detail, kindly refer the rulebook."
    ,
  },


  /// 7. Drone pend
  {
    id: 'drone',
    name: 'Drone',
    image: eventImg.drone,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name:{
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Join us to explore the world of quadcopter drones! Learn about their technical components, including motors, ESCs, flight controllers, and batteries. Discover how to assemble and configure a quadcopter for optimal performance. Explore the electrical principles behind flight dynamics and control systems. Dive into real-world applications, from aerial photography and videography to agriculture and search-and-rescue missions. Gain hands-on experience with flight simulations and practical flying sessions. Whether you're a hobbyist or aspiring professional, this workshop equips you with essential skills in drone technology and applications. Don't miss out on this opportunity to soar to new heights!"
    ,
    points: [
      "Introduction",
      "Overview of drone",
      "Uses of Drones",
      "Explanation of drone components",
      "Building a Drone",
      "Basic piloting",
      "Q&A"
    ]
  },


  /// 8. Fashion Portfolio comp
  {
    id: 'fashionPortfolio',
    name: 'Fashion Portfolio',
    image: eventImg.fashion,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name:{
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "A fashion portfolio is a collection of work by a person that showcases their skills and abilities. Fashion portfolios are used across the industry by people in a variety of different sectors, including styling, visual merchandising and photography, and they can also be used by writers, buyers and designers. The main purpose of a portfolio is to showcase work and creativity, and everyone will present theirs slightly differently."
    ,
    points: [
      "TYPES OF FASHION PORTFOLIO",
      "HOW TO CREATE A FASHION PORTFOLIO",
      "INSPIRATION BOARD, MOOD BOARD , COLOR BOARD, COLOR STORYBOARD, CONCEPT BOARD",
      "BRAINSTORMING",
      "ROUGH SKETCH AND FINAL SKETCH",
      "PRODUCT"
    ]
  },


  /// 9. Baking and Confectionery Technology
  {
    id: 'baking',
    name: 'Baking Technology',
    image: eventImg.baking,
    form: 'https://forms.gle/DKeCKFJH7pBQQ6xSA',
    type: 'workshops',
    rulebook: "https://drive.google.com/file/d/1A6rlvBRnNa9PlSYt5EFnVxufTfHSw7S-/view?usp=drive_link",
    fee: "RS 200(PER INDIVIDUAL)",
    teamCount: [
      "Individual Participation"
    ],
    contact: {
        name:{
          faculty: [],
          student: ["DHILIPKUMAR M - 9080843269", "ABIJITH G S - 9043454569"]
        } ,
        info: "bitvprayukti@bitsathy.ac.in"
    },
    info: 
      "Baking is cooking of food by the action of dry heat in an oven. The degree of dryness of heat may be modified by the amount of steam produced from the items baked. Bread rolls, cakes, pastries, puddings etc. are baked. Confectionery is the art of making confections, which are food items that are rich in sugar and carbohydrates. In general, though, confectionery is divided into three categories:"
    ,
    points: [
      "Flour confectionery includes principally sweet pastries, cakes, and similar baked goods.",
      "Sugar confectionery includes sweets, candied nuts, chocolates, chewing gum, sweetmeats, pastillage, and other confections that are made primarily of sugar",
      "Chocolate confections (confections made of chocolate) are treated as a separate category, as are sugar-free versions of sugar confections. "
    ]
  },


  //workshop dup
  {
    select: 'Workshop',
  },

  //Combos dup
  {
    select: 'Combo 1',
  },

  {
    select: 'Combo 2',
  },

  {
    select: 'Combo 3',
  },

  {
    select: 'Combo 4',
  },

]