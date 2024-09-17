
const currentMembers = [
  {
    image: "images/members/Pratap Kumar Mandal.jpeg",
    name: "Dr. Pratap Kumar Mandal",
    post: "PhD, IISERB",
    education: "",
    linkedIn: "",
    emailID: "pratap16@iiserb.ac.in",
    description:
      "Pratap was born and brought up in Haldia, West Bengal. He has done his B.Sc from Midnapore college. After completing his M.Sc from Pondicherry University, he joined Prof. Katukojvala’s group at IISER Bhopal in January 2017 to pursue his Ph.D. Other than lab works he loves playing badminton, cricket and listening audio stories.",
  },
  {
    image: "images/members/saikat-chatterjee.png",
    name: "Dr. Saikat Chatterjee",
    post: "PhD, IISERB",
    education: "",
    linkedIn: "",
    emailID: "saikat16@iiserb.ac.in",
    description:
      "Saikat was born and brought up in Shantiniketan, West Bengal. He has done his B.Sc from Burdwan University. After completing his M.Sc from B.H.U, he joined Prof. Katukojvala’s group at IISER Bhopal in January 2017 to pursue his Ph.D. Beyond the lab, he find solace and inspiration in the pages of fiction and nonfiction, particularly exploring human psychology, behavioral science, and philosophy. Additionally, he enjoy honing his strategic skills through the timeless game of chess.",
  },
  {
    image: "images/members/kamakshya-prasad-mahata.jpg",
    name: "Kamakshya Prasad Mahata",
    post: "Graduate Student",
    education: "M.Sc., BHU",
    linkedIn: "",
    emailID: "kamakshya18@iiserb.ac.in",
    description:
      "Kamakshya Prasad  was born and brought up in Purulia, West Bengal. He did his B.Sc from J.K. college, Purulia and completed his M.Sc from B.H.U, Varanasi. He joined Dr.  Katukojvala’s group at IISER Bhopal in January 2019 to pursue his Doctoral Programme. Other than Lab. works, he loves playing Keyboard, watching/playing cricket and reading books.",
  },
  {
    image: "images/members/chayan.jpg",
    name: "Chayan Kumar Kundu",
    post: "Graduate Student",
    education: "M.Sc., Siddharth University, UP",
    linkedIn: "",
    emailID: "chayan19@iiserb.ac.in",
    description:
      "Chayan was born and brought up in Gonda, Uttar Pradesh. He has done his B.Sc from Dr. R. M. L. Awadh University, Ayodhya U.P. After completing his M.Sc from Siddharth University, U.P, he joined Prof. Katukojvala’s group at IISER Bhopal in July 2019 to pursue his Ph.D. Other than lab works he loves playing games.",
  },
  {
    image: "images/members/rahul-chakrawarti.jpg",
    name: "Rahul Chakrawarti",
    post: "Graduate Student",
    education: "M.Sc., VNIT Nagpur",
    linkedIn: "",
    emailID: "rahul22@iiserb.ac.in",
    description:
      "Rahul was born and brought up in Seoni, Madhya Pradesh. He has done his B.Sc from Bhopal. After completing his M.Sc from VNIT, Nagpur , he joined Prof. Katukojvala’s group at IISER Bhopal in August 2022 to pursue his Ph.D. Other than lab works he loves playing cricket and gaming",
  },
  {
    image: "images/members/Sudhir Muduli.jpeg",
    name: "Sudhir Muduli",
    post: "Graduate Student",
    education: "M.Sc., Central University of Rajasthan",
    linkedIn: "",
    emailID: "sudhir22@iiserb.ac.in",
    description:
      "Sudhir was born and brought up in Angul, Odisha. He has done his B.Sc from Ravenshaw University, Odisha. After completing his M.Sc from Central University of Rajasthan, he joined Prof. Katukojvala’s group at IISER Bhopal in July 2022 to pursue his Ph.D. Other than lab works he loves to play badminton, cricket , practice yoga and reading spiritual books.",
  },
  {
    image: "images/members/Shavan.jpeg",
    name: "Mohammad Shavan Khan",
    post: "Graduate Student",
    education: "M.Sc., Aligarh Muslim University",
    linkedIn: "",
    emailID: "shavan23@iiserb.ac.in",
    description:
      "Shavan was born and brought up in Hardoi, Uttar Pradesh. He has done his B.Sc from ARSD college, University of Delhi. After completing his M.Sc from Aligarh Muslim University, he joined Prof. Katukojvala’s group at IISER Bhopal in January 2024 to pursue his Ph.D. Other than lab works he loves playing cricket, kabaddi and reading books.",
  },
  {
    image: "images/members/Anupama Yadav.jpeg",
    name: "Anupama Yadav",
    post: "Graduate Student",
    education: "M.Sc., University of Lucknow ",
    linkedIn: "",
    emailID: "anupama21@iiserb.ac.in",
    description:
      "Anupama was born and brought up in Lucknow, U.P. She completed her B.Sc and M.Sc. from Lucknow University. She joined Prof. Katukojvala's group at IISER Bhopal in August 2024 to pursue Ph.D. Other than lab she love to read fiction novel and playing badminton.",
  },
  {
    image: "images/members/durjay-roy.jpg",
    name: "Durjay Roy",
    post: "Research Assistant, IISER Bhopal",
    education: "",
    linkedIn: "",
    emailID: "durjay19@iiserb.ac.in",
    description:
      "Durjay was born and brought up in Jalpaiguri, West Bengal. He is a BS-MS student of IISER Bhopal. He joined Prof. Katukojvala’s group at in August 2023 as a MS project student. Other than lab works he loves playing eSports, and watching football.",
  },
  {
    image: "images/members/Debopam Ray.jpg",
    name: "Debopam Ray",
    post: "MS Project Student, IISER Bhopal",
    education: "",
    linkedIn: "",
    description: "Debopam was born and brought up in Coochbehar, West Bengal. He is a BS-MS student of IISER Bhopal. He joined Prof. Katukojvala’s group in May 2024 as a MS project student. Besides lab work, he loves landscape photography and watching movies & web series.",
    emailID: "debopam20@iiserb.ac.in",
  },
  {
    image: "images/members/Shubham BSMS 2024.jpeg",
    name: "Shubham",
    post: "MS Project Student, IISER Bhopal",
    education: "",
    linkedIn: "",
    description: "Shubham was born in 2002 in Sikanderpur, Haryana. He joined Prof. Katukojvala’s group as a MS project student. Apart from lab he spend his time watching anime and lifting at the gym.",
    emailID: "shubham20@iiserb.ac.in",
  },
  {
    image: "images/members/Shila Maji.jpg",
    name: "Shila Maji",
    post: "MSc Project Student, IISER Bhopal",
    education: "",
    linkedIn: "",
    description: "",
    emailID: "shila23@iiserb.ac.in",
  },
  {
    image: "images/members/Ankan Das.jpeg",
    name: "Ankan Das",
    post: "BS-MS, IISER Bhopal",
    education: "",
    linkedIn: "",
    description: "",
    emailID: "ankan21@iiserb.ac.in",
  },
  {
    image: "images/members/Pamini Chandan.jpeg",
    name: "Pamini Chandan",
    post: "BS-MS, IISER Bhopal",
    education: "",
    linkedIn: "",
    description: "",
    emailID: "pamini21@iiserb.ac.in",
  },
];

const formerPHDStudents = [
  { image: "images/members/mohammad-arshad.png", name: "Dr. Mohammad Arshad", year: "Ph.D., 2024", linkedIn: "", description: "Chemistry Lecturer at B.R.K Inter College Mau, Uttar Pradesh." },
  { image: "images/members/laxman.png", name: "Dr. Laxman Thorbole", year: "Ph.D., 2023", linkedIn: "", description: "Currently working as a Chemist at Macleods, Mumbai." },
  { image: "images/members/Haribabu Chennamsetti.jpeg", name: "Dr. Haribabu Chennamsetti", year: "Ph.D., 2019", linkedIn: "", description: "Associate Scientist at Aragen LifeSciences Pvt Ltd." },
  { image: "images/members/Bapurao Sudam Lad.jpeg", name: "Dr. Bapurao Sudam Lad", year: "Ph.D., 2018", linkedIn: "", description: "" },
  { image: "images/members/Dharmendra Singh.jpeg", name: "Dharmendra Singh", year: "2017 - 2018", linkedIn: "", description: "Currently Working as a Chemist at ONGC" },
  { image: "images/members/Vinaykumar Kanchupalli.jpeg", name: "Dr. Vinaykumar Kanchupalli", year: "Ph.D., 2016", linkedIn: "", description: "Inspire Faculty at NIPER Hyderabad" },
  { image: "images/members/Jagadeesh Kalepu.jpeg", name: "Dr. Jagadeesh Kalepu", year: "Ph.D., 2016", linkedIn: "", description: "Currently Working as a Chemist at Syngene, Bangalore" },
  { image: "images/members/Sudam Ganpat Dawande.jpg", name: "Dr. Sudam Ganpat Dawande ", year: "Ph.D., 2015", linkedIn: "", description: "Assistant Professor, IIT Madras, Chennai" },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Kuldeep Singh Rathore", year: "Ph.D., 2015", linkedIn: "", description: "Assistant Profeessor at Govt Arts and Science PG College Ratlam, Department of Higher Education, Madhya Pradesh" },
];

const formerMScStudents = [
  { image: "images/members/rachit-singh-chauhan.jpg", name: "Rachit Singh Chauhan", year: "M.S., 2024", linkedIn: "", description: "Project Student in Prof. Debabrata Maiti's Group, IIT Bombay " },
  { image: "images/members/Nitesh Jarwal.jpeg", name: "Nitesh Jarwal", year: "M.S., 2023", linkedIn: "", description: "" },
  { image: "images/members/Siddhant Amol Ganvir.jpeg", name: "Siddhant Amol Ganvir", year: "M.S., 2023", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Pallav Sharma", year: "M.S., 2022", linkedIn: "", description: "" },
  { image: "images/members/Shubham Singh.jpeg", name: "Shubham Singh", year: "M.S., 2021", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Pavan Goturi", year: "M.S., 2020", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Parvesh Dagar", year: "M.S., 2020", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Tarun Kumar Jayaswal", year: "M.S., 2020", linkedIn: "", description: "" },
  { image: "images/members/Sandeep Patel.jpg", name: "Sandeep Patel", year: "M.S., 2019", linkedIn: "", description: "Ph.D. Student in Dr. Indranil Chatterjee, IIT Ropar, India" },
  { image: "images/members/Unknown Photo.jpeg", name: "Vishal Meena", year: "M.S., 2018", linkedIn: "", description: "Junior Technical Inspector at Coal India Ltd." },
  { image: "images/members/Desna Joseph.jpeg", name: "Desna Joseph", year: "M.S., 2015", linkedIn: "", description: "Works as scientist at ABX advanced biochemical compounds, Radeberg, Germany" },
  {image: "images/members/Unknown Photo.jpeg",  name: "Sumit K. Prajapati", year: "M.S., 2014", linkedIn: "", description: "Graduate Student, INM- Leibniz Institute for New Materials, Saarbrücken, Germany"},
  { image: "images/members/Unknown Photo.jpeg", name: "Mandeep Harode", year: "M.S., 2013", linkedIn: "", description: "Ph.D. Student in Monash University" },
];

const projectStaffAndInterns = [
  { image: "images/members/Pamini Chandan.jpeg", name: "Pamini Chandan", description: " Summer Intern (2024, IISER Bhopal)" },
  { image: "images/members/Dhawal Pahuja.JPEG", name: "Dhawal Pahuja", description: " Summer Intern (2024, IISER Bhopal)" },
  { image: "images/members/Srabasti Dhar.jpg", name: "Srabasti Dhar", description: " Summer Intern (2024, IIT Bombay)" },
  { image: "images/members/Jyotishman Saika.jpg", name: "Jyotishman Saika", description: " Summer Intern (2024, IIT Bombay)" },
  { image: "images/members/Ananya Rout.png", name: "Ananya Rout", description: " Summer Intern (2024, IISER Kolkata)" },
  { image: "images/members/Vaidehi Sahu.jpg", name: "Vaidehi Sahu", description: " Summer Intern (2024, NISER Bhubaneswar)" },
  { image: "images/members/Aditi Bhutkar.jpg", name: "Aditi Bhutkar", description: " Summer Intern (2024, DBAMU Maharashtra  )" },
  { image: "images/members/Khushi.jpg", name: "Khushi", description: " Summer Intern (2024, SNGGPG Bhopal  )" },
  { image: "images/members/Srishti Kewlani.jpeg", name: "Srishti Kewlani", description: " Summer Intern (2024, IEHE Bhopal)" },
  { image: "images/members/Veeru Kumar Singh.jpeg", name: "Veeru Kumar Singh", description: " Summer Intern (2023, IISER Bhopal)" },
  { image: "images/members/Ankan Das.jpeg", name: "Ankan Das", description: "Summer Intern (2023, IISER Bhopal)" },
  { image: "images/members/Samruddhi Patil.jpg", name: "Samruddhi Patil", description: "Summer Intern (2023, IISER Bhopal)" },
  { image: "images/members/Sayanthan Khan.jpeg", name: "Sayanthan Khan", description: "Summer Intern (2023, IISER Kolkata)" },
  { image: "images/members/Amit Patwa.jpeg", name: "Amit Patwa", description: "Summer Intern (2023, IITK)" },
  { image: "images/members/Saee Dharmadhikar.jpg", name: "Saee Dharmadhikar", description: " Summer Intern (2023, NIT Surathkal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Aurobindo Patnaik", description: "Summer Intern (2022, NISER Bhubaneswar)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Mohsin Mohsin", description: "Summer Intern (2022, AMU)" },
  { image: "images/members/Shubham.jpeg", name: "Shubham", description: "Research Assistant (2022, IITK), Ph.D. Student in Prof. Ramesh Giri's group, Pennsylvania State University, Pennsylvania, USA"},
  { image: "images/members/rachit-singh-chauhan.jpg", name: "Rachit S. Chouhan", description: "Summer Intern (2022, IISER Bhopal), Project Student in Prof. Debabrata Maiti's Group, IIT Bombay " },
  { image: "images/members/durjay-roy.jpg", name: "Durjay Roy", description: "Summer Intern (2022, IISER Bhopal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Yalamanchili Navdheer", description: "Summer Intern (2021, IIT Bombay),  Ph.D. Student in Dr. Nicolai Cramer group, EPFL, Switzerland" },
  { image: "images/members/Satya Panda.webp", name: "Satya Panda", description: "Summer Intern (2019, CU Gujarat), Ph.D. Student in  Dr. Sandip Murarka group, IIT, Jodhpur, India" },
  { image: "images/members/Prakash Tiwari.jpg", name: "Prakash Tiwari", description: "Summer Intern (2019, IISER Bhopal), Ph.D. Student in Prof. Timothy Noel's Group, University of Amsterdam" },
  { image: "images/members/Unknown Photo.jpeg", name: "Nisha Nirala", description: "Intern (2019, Guru Ghasidas Vishwavidyalaya, Bilaspur)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Ganesh Shelke", description: "Research Associate, 2017, Ph.D., BITS Pilani" },
  { image: "images/members/Unknown Photo.jpeg", name: "Karan Arya", description: "Intern, 2016-17, M.Sc., IIT (BHU)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Sanjana Ailani", description: "Intern, 2016-17, B.Sc., Guru Ghasidas Vishwavidyalaya, Bilaspur" },
  { image: "images/members/Unknown Photo.jpeg", name: "G. Satish", description: "Research Associate, 2016, Ph.D., IIIM Jammu" },
  { image: "images/members/Unknown Photo.jpeg", name: "V. Jishnu", description: "Intern, 2016, M.S. Student, NISER, Bhubaneswar" },
  { image: "images/members/Unknown Photo.jpeg", name: "Sunit Kumar", description: "Intern, 2016, M.S. Student, IISER, Kolkata" },
  { image: "images/members/Unknown Photo.jpeg", name: "Ruchi Aggarwal", description: "Intern, 2016, M.S. Student, MNIT Jaipur" },
  { image: "images/members/Unknown Photo.jpeg", name: "Kanishka Agarwal", description: "Intern, 2016, M.S. Student, MNIT Jaipur" },
  { image: "images/members/Unknown Photo.jpeg", name: "Ankita Agarwal", description: "Intern, 2016, M.S. Student, ISM Dhanbad" },
  { image: "images/members/Unknown Photo.jpeg", name: "Nivedita Majhi", description: "Intern, 2016, M.S. Student, ISM Dhanbad" },
  { image: "images/members/Unknown Photo.jpeg", name: "K. Sujit Prasad", description: "Intern, 2015, M.Sc., Visva Bharati University, Santiniketan" },
];

function displayCurrentMemberCards() {
  var group = document.getElementById("current-members");
  group.innerHTML = "";

  for (var i = 0; i < currentMembers.length; i++) {
    let currentMember = currentMembers[i];
    group.innerHTML =
      group.innerHTML +
      `<div class="hover-card shadow-sm card" style="width: 100%; max-width: 600px;">
        <div class="card-body row justify-content-center align-items-center px-4">
          <div class="col-md-4 col-12">
            <img src="/${currentMember.image}" class="card-img-top" alt="${currentMember.name}" />
          </div>
          <div class="card-body col-md-8 col-12">
            <h5 class="card-title">${currentMember.name}</h5>
            <p class="card-text" >${currentMember.description}</p>
            <p class="card-text"><b>${currentMember.post}<br />${currentMember.education}</p>
            
            <div class="d-flex gap-2 align-items-center justify-content-center"><i class="bi bi-envelope-fill"></i><a href="mailto:${currentMember.emailID}">${currentMember.emailID}</a></div>
          </div>
        </div>
    </div>`;
  }
}

function displayFormerPHDStudents() {
  var group = document.getElementById("former-phd");
  group.innerHTML = "";

  for (var i = 0; i < formerPHDStudents.length; i++) {
    let formerPHDStudent = formerPHDStudents[i];
    group.innerHTML =
      group.innerHTML +
      `<div class="hover-card shadow-sm card" style="width: 100%; max-width: 600px;">
        <div class="card-body row justify-content-center align-items-center px-4">
          <div class="col-md-4 col-12">
            <img src="/${formerPHDStudent.image}" class="card-img-top" alt="${formerPHDStudent.name}" />
          </div>
          <div class="card-body col-md-8 col-12">
            <h5 class="card-title">${formerPHDStudent.name}</h5>
            <p class="card-text"><b>${formerPHDStudent.year}</b></p>
            <p class="card-text">${formerPHDStudent.description.length != 0 ? formerPHDStudent.description : ""}</p>
          </div>
        </div>
    </div>`;
  }
}
function displayFormerMScStudents() {
  var group = document.getElementById("former-msc");
  group.innerHTML = "";

  for (var i = 0; i < formerMScStudents.length; i++) {
    let formerMScStudent = formerMScStudents[i];
    group.innerHTML =
      group.innerHTML +
      `<div class="hover-card shadow-sm card" style="width: 100%; max-width: 600px;">
        <div class="card-body row justify-content-center align-items-center px-4">
          <div class="col-md-4 col-12">
            <img src="/${formerMScStudent.image}" class="card-img-top" alt="${formerMScStudent.name}" />
          </div>
          <div class="card-body col-md-8 col-12">
            <h5 class="card-title">${formerMScStudent.name}</h5>
            <p class="card-text"><b>${formerMScStudent.year}</b></p>
            <p class="card-text">${formerMScStudent.description.length != 0 ? formerMScStudent.description : ""}</p>
          </div>
        </div>
    </div>`;
  }
}
function displayProjectStaffAndInterns() {
  var group = document.getElementById("project-staff-and-interns");
  group.innerHTML = "";

  for (var i = 0; i < projectStaffAndInterns.length; i++) {
    let projectStaffAndIntern = projectStaffAndInterns[i];
    group.innerHTML =
      group.innerHTML +
      `<div class="hover-card shadow-sm card" style="width: 100%; max-width: 600px;">
        <div class="card-body row justify-content-center align-items-center px-4">
          <div class="col-md-4 col-12">
            <img src="/${projectStaffAndIntern.image}" class="card-img-top" alt="${projectStaffAndIntern.name}" />
          </div>
          <div class="card-body col-md-8 col-12">
            <h5 class="card-title">${projectStaffAndIntern.name}</h5>
            <p class="card-text">${projectStaffAndIntern.description.length != 0 ? projectStaffAndIntern.description : ""}</p>
          </div>
        </div>
    </div>`;
  }
}
