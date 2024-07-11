const currentMembers = [
  {
    image: "images/members/pratap-k-mandal.png",
    name: "Dr. Pratap Kumar Mandal",
    post: "PhD, IISERB",
    education: "",
    linkedIn: "",
    contactNumber: "9064670321",
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
    contactNumber: "7470429960",
    emailID: "saikat16@iiserb.ac.in",
    description:
      "Saikat was born and brought up in Shantiniketan, West Bengal. He has done his B.Sc from Burdwan University. After completing his M.Sc from B.H.U, he joined Prof. Katukojvala’s group at IISER Bhopal in January 2017 to pursue his Ph.D. Beyond the lab, he find solace and inspiration in the pages of fiction and nonfiction, particularly exploring human psychology, behavioral science, and philosophy. Additionally, he enjoy honing his strategic skills through the timeless game of chess.",
  },

  {
    image: "images/members/mohammad-arshad.png",
    name: "Dr. Mohammad Arshad",
    post: "Graduate Student",
    education: "M.Sc., BHU",
    linkedIn: "",
    contactNumber: "7800736274",
    emailID: "mohammad17@iiserb.ac.in",
    description:
      "Arshad was born and brought up in Mau, Uttar Pradesh. He has completed his B.Sc and M.Sc from B.H.U. After his M.Sc, he joined Prof. Katukojvala’s group at IISER Bhopal in July 2017 to pursue his Ph.D. Other than lab works he loves playing cricket",
  },

  {
    image: "images/members/kamakshya-prasad-mahata.jpg",
    name: "Kamakshya Prasad Mahata",
    post: "Graduate Student",
    education: "M.Sc., BHU",
    linkedIn: "",
    contactNumber: "8509977672",
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
    contactNumber: "9795119566",
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
    contactNumber: "8819851363",
    emailID: "rahul22@iiserb.ac.in",
    description:
      "Rahul was born and brought up in Seoni, Madhya Pradesh. He has done his B.Sc from Bhopal. After completing his M.Sc from VNIT, Nagpur , he joined Prof. Katukojvala’s group at IISER Bhopal in August 2022 to pursue his Ph.D. Other than lab works he loves playing cricket and gaming",
  },
  {
    image: "images/members/sudhir-muduli.jpg",
    name: "Sudhir Muduli",
    post: "Graduate Student",
    education: "M.Sc., Central University of Rajasthan",
    linkedIn: "",
    contactNumber: "7894191832",
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
    contactNumber: "9580231277",
    emailID: "shavan23@iiserb.ac.in",
    description:
      "Shavan was born and brought up in Hardoi, Uttar Pradesh. He has done his B.Sc from ARSD college, University of Delhi. After completing his M.Sc from Aligarh Muslim University, he joined Prof. Katukojvala’s group at IISER Bhopal in January 2024 to pursue his Ph.D. Other than lab works he loves playing cricket, kabaddi and reading books.",
  },
  {
    image: "images/members/durjay-roy.jpg",
    name: "Durjay Roy",
    post: "MS Project Student, IISER Bhopal",
    education: "",
    linkedIn: "",
    contactNumber: "6297171048",
    emailID: "durjay19@iiserb.ac.in",
    description:
      "Durjay was born and brought up in Jalpaiguri, West Bengal. He is a BS-MS student of IISER Bhopal. He joined Prof. Katukojvala’s group at in August 2023 as a MS project student. Other than lab works he loves playing eSports, and watching football.",
  },
  {
    image: "images/members/rachit-singh-chauhan.jpg",
    name: "Rachit Singh Chauhan",
    post: "MS Project Student, IISER Bhopal",
    education: "",
    linkedIn: "",
    description: "",
    contactNumber: "8448328819",
    emailID: "rachit19@iiserb.ac.in",
  },
];

const formerPHDStudents = [
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Laxman Thorbole", year: "Ph.D., 2023", linkedIn: "", description: "Currently working as a Chemist at Macleods, Mumbai." },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Haribabu Chennamsetti", year: "Ph.D., 2019", linkedIn: "", description: "Associate Scientist at Aragen LifeSciences Pvt Ltd." },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Bapurao Sudam Lad", year: "Ph.D., 2018", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Dharmendra Singh", year: "2017 - 2018", linkedIn: "", description: "Currently Working as a Chemist at ONGC" },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Vinaykumar Kanchupalli", year: "Ph.D., 2016", linkedIn: "", description: "Inspire Faculty at NIPER Hyderabad" },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Jagadeesh Kalepu", year: "Ph.D., 2016", linkedIn: "", description: "Currently Working as a Chemist at Syngene, Bangalore" },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Sudam Dawande Ganpat", year: "Ph.D., 2015", linkedIn: "", description: "Assistant Professor, IIT Madras, Chennai" },
  { image: "images/members/Unknown Photo.jpeg", name: "Dr. Kuldeep Singh Rathore", year: "Ph.D., 2015", linkedIn: "", description: "Assistant Professor, Department of Higher Education, MP" },
];

const formerMScStudents = [
  { image: "images/members/Unknown Photo.jpeg", name: "Nitesh Jarwal", year: "M.S., 2023", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Siddhant Amol Ganvir", year: "M.S., 2023", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Pallav Sharma", year: "M.S., 2022", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Shubham Singh", year: "M.S., 2021", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Pavan Goturi", year: "M.S., 2020", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Parvesh Dagar", year: "M.S., 2020", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Tarun Kumar Jayaswal", year: "M.S., 2020", linkedIn: "", description: "" },
  { image: "images/members/Unknown Photo.jpeg", name: "Sundeep Patel", year: "M.S., 2019", linkedIn: "", description: "PhD, IISERB" },
  { image: "images/members/Unknown Photo.jpeg", name: "Vishal Meena", year: "M.S., 2018", linkedIn: "", description: "Junior Technical Inspector at Coal India Ltd." },
  { image: "images/members/Unknown Photo.jpeg", name: "Desna Joseph", year: "M.S., 2015", linkedIn: "", description: "Works as scientist at ABX advanced biochemical compounds, Radeberg, Germany" },
  { image: "images/members/Unknown Photo.jpeg", name: "Sumit K. Prajapati", year: "M.S., 2014", linkedIn: "", description: "Graduate Student, INM- Leibniz Institute for New Materials, Saarbrücken, Germany" },
  { image: "images/members/Unknown Photo.jpeg", name: "Mandeep Harode", year: "M.S., 2013", linkedIn: "", description: "Graduate Student, IIT Indore" },
];

const projectStaffAndInterns = [
  { image: "images/members/Unknown Photo.jpeg", name: "Veeru Kumar Singh", description: " Intern (2023, IISER Bhopal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Ankan Das", description: "Intern (2023, IISER Bhopal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Samruddhi Patil", description: "Intern (2023, IISER Bhopal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Sayanthan Khan", description: "Intern (2023, IISER Kolkata)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Amit Patwa", description: "Intern (2023, IITK)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Saee Dharmadhikar", description: " Intern (2023, NIT Surathkal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Aurobindo Patnaik", description: "Intern (2022, NISER Bhubaneswar)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Mohsin Mohsin", description: "Intern (2022, AMU)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Shubham Shubham", description: "Intern (2022, IITK)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Rachit S. Chouhan", description: "Intern (2022, IISER Bhopal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Durjay Roy", description: "Intern (2022, IISER Bhopal)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Navdheer", description: "Intern (2021, IIT Mumbai)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Satya Panda", description: "Intern (2019, CU Gujarat)" },
  { image: "images/members/Unknown Photo.jpeg", name: "Prakash C Tiwari", description: "Intern (2019, IISER Bhopal)" },
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
            <div class="d-flex gap-2 align-items-center justify-content-center"><i class="bi bi-telephone-fill"></i>${currentMember.contactNumber}</div>
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
            <p class="card-text">${formerPHDStudent.description.length != 0 ? "-" : ""}</p>
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
            <p class="card-text">${formerMScStudent.description.length != 0 ? "-" : ""}</p>
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
            <p class="card-text">${projectStaffAndIntern.description.length != 0 ? "-" : ""}</p>
          </div>
        </div>
    </div>`;
  }
}
