
const groupNews = [
  { date: "2023", message: "Dr. Laxman joined as a chemist at Macleods, Mumbai." },
  { date: "October 2022", message: "Dr. Sudam G. Dawande joined as the Assistant Professor at the Department of Chemistry, IIT Madras." },
  { date: "Feb 2022", message: "Dr. Jagadeesh joined as a senior research investigator at Syngene, Bangalore." },
  { date: "June 2021", message: "Dr. Haribabu Joined as a Scientist at GVK Biosciences, Hyderabad." },
  { date: "Feb 2020", message: "Dr. Jagadeesh joined as the Marie-Curie post-doctoral fellow at Oxford University in Prof. Michael Willis's group" },
  { date: "Jun 2019", message: "Bapu Accepted Post Doc. position at the Kim Lab, INCHEON National University, Korea." },
  { date: "Jan 2019", message: "Vinay joined as the Inspire faculty at NIPER HYDERABAD." },
];
const publicationsList = [
  {
    id: 36,
    title: "Site-Selective Direct γ-Difunctionalization of Diazoenals: Application to the Synthesis of Enal-Functionalized Allenes and Furans",
    authors: "Jagadeesh Kalepu, Bapurao Sudam Lad,† Pratap Kumar Mandal,† Vinaykumar Kanchupalli,† Durjay Roy and Sreenivas Katukojvala*",
    link: "https://aces.onlinelibrary.wiley.com/doi/10.1002/asia.202401081",
    tag: "Chem. Asian J. 2024, e202401081 (Invited Article)",
    leftCover: "36 Cover.jpg",
    rightCover: "",
    fig: "36.jpg",
    selected: false,
  },
  {
    id: 35,
    title: "Copper-enalcarbenoids: Rapid access to 1,7-disubstituted indoles via [4+2] benzannulation between diazoenals and N-substituted pyrroles",
    authors: "Bapurao Sudam Lad, Pratap Kumar Mandal, Rahul Chakrawarti, Sreenivas Katukojvala",
    link: "https://www.sciencedirect.com/science/article/pii/S004040392400426X",
    tag: "Tetrahedron Lett. 2024, 151, 155331, (Invited Article)",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: "",
    fig: "35.jpg",
    selected: false,
  },
  {
    id: 34,
    title: "Synergistic Rh(II)- and Zn(II)-Catalyzed [3 + 3] Annulation of Diazoenals and α-Hydroxy Ketones for the Direct Synthesis of 2H-Pyrans, A Gateway Toward γ-Pyrones",
    authors: "Pratap Kumar Mandal, and Sreenivas Katukojvala*",
    link: "https://pubs.acs.org/doi/full/10.1021/acs.orglett.4c03329",
    tag: "Org. Lett.",
    leftCover: "OL 2024.jpg",
    rightCover: "",
    fig: "34.jpg",
    selected: false,
  },
  {
    id: 33,
    title: "Visible Light Mediated Photoclick Reactions of Diazoenals: Direct Access to Bicyclo[4.1.0]heptane-Fused Polycycles with Potential Application as Insulin Aggregation Inhibitors",
    authors: "Saikat Chatterjee, Kamakshya Prasad Mahata, Mohd Shavan Khan, Anirban Das, Jyoti Yadav, Ishu Saraogi and Sreenivas Katukojvala*",
    link: "https://chemrxiv.org/engage/chemrxiv/article-details/670a8812cec5d6c142f167b6",
    tag: "ChemRxiv",
    leftCover: "ChemRxiv.png",
    rightCover: "",
    fig: "Saikat Styrene 2024.jpg",
    selected: false,
  },
  {
    id: 32,
    title: "Rhodium-Catalyzed 3-Aza-Cope Rearrangement of Protic N-Allyl Enammonium Ylides Enabled by Resonance Assisted H-Bonding",
    authors: "Laxman Anandrao Thorbole, Sudhir Muduli, Sreenivas Katukojvala *",
    link: "https://chemrxiv.org/engage/chemrxiv/article-details/66a7c587c9c6a5c07a6b0337",
    tag: "ChemRxiv",
    leftCover: "ChemRxiv.png",
    rightCover: "",
    fig: "Sudhir 2024.jpg",
    selected: false,
  },
  {
    id: 31,
    title: "Enal-azomethine ylides: Application in the synthesis of functionalized pyrroles†‡",
    authors: "Pratap Kumar Mandal, Sandeep Patel and Sreenivas Katukojvala *",
    link: "https://pubs.rsc.org/en/content/articlelanding/2024/ob/d4ob00859f/unauth",
    tag: "Org. Biomol. Chem., 2024, (This article is part of the themed collection: Celebrating the 100th birthday of Professor Sukh Dev.)",
    leftCover: "OBC 2024.jpg",
    rightCover: "",
    fig: "OBC 24 Reaction scheme.jpg",
    selected: false,
  },
  {
    id: 30,
    title: "Triple Nucleophilic Head-to-Tail Cascade Polycyclization of Diazodienals via Combination Catalysis: Direct Access to Cyclopentane Fused Aza-Polycycles with Six-Contiguous Stereocenters",
    authors: "Haribabu Chennamsetti, Kuldeep Singh Rathore, Saikat Chatterjee, Pratap Kumar Mandal, and Sreenivas Katukojvala*",
    link: "https://pubs.acs.org/doi/full/10.1021/jacsau.4c00134",
    tag: "JACS Au 2024, 4, 2099–2107",
    leftCover: "JACS Au 2024.jpg",
    rightCover: "",
    fig: "30.jpg",
    selected: true,
  },
  {
    id: 29,
    title:
      "[3+3] Annulation of Diazoenals and α‑Mercapto Ketones via ProticSulfonium Ylides: Direct Synthesis of 2H‑Thiopyrans, InnovativeProgenitors for Unstudied 2H‑Thiopyran-2-ones and 4H‑Thiopyran-4-ones",
    authors: "Pratap Kumar Mandal, Rahul Chakrawarti, and Sreenivas Katukojvala* ",
    link: "https://pubs.acs.org/doi/10.1021/acs.orglett.4c01033",
    tag: "Org. Lett. 2024, 26, 3463–3468",
    leftCover: "OL 2024.jpg",
    rightCover: "",
    fig: "29.jpeg",
    selected: true,
  },
  {
    id: 28,
    title: "Rh-Catalyzed Chemodivergent [3+3] Annulations of Diazoenals and α-Aminoketones: Direct Synthesis of Functionalized 1,2-Dihydropyridines and Fused 1,4-Oxazines",
    authors: "Pratap Kumar Mandal, Dr. Sreenivas Katukojvala*",
    link: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.202303862",
    tag: "Chem. Eur. J. 2024, 30, e202303862 (VIP Paper)",
    leftCover: "28.jpeg",
    rightCover: "28-1.jpg",
    fig: "28.webp",
    selected: true,
  },
  {
    id: 27,
    title: "Rhodium-Catalyzed Enal Transfer with N-Methoxypyridazinium Salts",
    authors: "V. Kanchupalli, L. A. Thorbole, J. Kalepu, D. Joseph, M. Arshad, S. Katukojvala*",
    link: "https://pubs.acs.org/doi/abs/10.1021/acs.orglett.2c01424",
    tag: "Org. Lett. 2022, 24, 3850",
    leftCover: "27.jpeg",
    rightCover: null,
    fig: "27-publication-fig.jpeg",
    selected: false,
  },
  {
    id: 26,
    title: "Piano-Stool Rhodium Enalcarbenoids: Application to Catalyst Controlled Metal-Templated Annulations of Diazoenals and 1,3-Dicarbonyls",
    authors: "B. S. Lad, S. Katukojvala*",
    link: "https://pubs.acs.org/doi/10.1021/acscatal.8b03865",
    tag: "ACS Catal. 2018, 8, 11807",
    leftCover: "ACS Catal 2018.jpg",
    rightCover: null,
    fig: "26-publication-fig.png",
    selected: false,
  },
  {
    id: 25,
    title: "[1+1+3] Annulation of Diazoenals and Vinyl Azides: Direct Synthesis of Functionalized 1-Pyrrolines via a New Olefination",
    authors: "V. Kanchupalli, S. Katukojvala*",
    link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201801976",
    tag: "Angew. Chem. Int. Ed. 2018, 57, 5433",
    leftCover: "Angew 2018.jpg",
    rightCover: null,
    fig: "25.jpeg",
    selected: true,
  },
  {
    id: 24,
    title: "Ag(I)-catalyzed Intramolecular Transannulation of Enynone Tethered Donor Acceptor Cyclopropanes: A New Synthesis of 2,3-Dihydronaphtho[1,2-b]furans",
    authors: "S. G. Dawande, M. Harode, J. Kalepu, S. Katukojvala*",
    link: "https://pubs.rsc.org/en/content/articlelanding/2016/cc/c6cc07220h",
    tag: "Chem. Commun. 2016, 52, 13699",
    leftCover: "24.png",
    rightCover: null,
    fig: "24.jpg",
    selected: false,
  },
  {
    id: 23,
    title: "Rhodium - Catalyzed Pyridannulation of Indoles With Diazoenals: A Direct Approach to Pyrido[1,2-a]indoles",
    authors: "S. G. Dawande, B. S. Lad, S. Prajapati, S. Katukojvala*",
    link: "http://pubs.rsc.org/en/content/articlelanding/2016/ob/c6ob00360e#!divAbstract",
    tag: "Org. Biomol. Chem. 2016, 14, 5569 (Invited article for New Talent - Themed Issue)",
    leftCover: "23.jpeg",
    rightCover: null,
    fig: "23.jpg",
    selected: false,
  },
  {
    id: 22,
    title: "An Unprecedented Benzannulation of Oxindoles With Enalcarbenoids: A Regioselective Approach to Functionalized Carbazoles",
    authors: "K. S. Rathore, B. S. Lad, H. Chennamsetti, S. Katukojvala*",
    link: "http://pubs.rsc.org/en/content/articlelanding/2016/cc/c5cc10637k",
    tag: "Chem. Commun. 2016, 52, 5812",
    leftCover: "22.jpeg",
    rightCover: null,
    fig: "22.jpg",
    selected: false,
  },
  {
    id: 21,
    title: "Dienamine Activation of Diazoenals: Application to the Direct Synthesis of Functionalized 1,4-Oxazines",
    authors: "J. Kalepu, S. Katukojvala*",
    link: "http://onlinelibrary.wiley.com/doi/10.1002/anie.201600878/abstract",
    tag: "Angew. Chem. Int. Ed. 2016, 55, 7831",
    leftCover: "Angew 2016.jpg",
    rightCover: null,
    fig: "21.jpg",
    selected: true,
  },
  {
    id: 20,
    title: "Pyridazine N-Oxides as Precursors of Metallocarbenes: Rhodium-Catalyzed Transannulation with Pyrroles",
    authors: "V. Kanchupalli, D. Joseph, S. Katukojvala*",
    link: "http://pubs.acs.org/doi/full/10.1021/acs.orglett.5b03064",
    tag: "Org. Lett. 2015, 17, 5878",
    leftCover: "OL New.jpg",
    rightCover: null,
    fig: "20.webp",
    selected: false,
  },
  {
    id: 19,
    title: "Rh(II) Catalyzed Cyclopropanation of Styrenes With Enaldiazo Esters: Diastereoselective Synthesis of Enalcyclopropanes",
    authors: "K. S. Rathore and S. Katukojvala*",
    link: "http://www.sciencedirect.com/science/article/pii/S0040403914016621",
    tag: "Tetrahedron Lett. 2014, 55, 6370",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: "19.png",
    selected: false,
  },
  {
    id: 18,
    title: "Regioselective p-Extension of Indoles With Rhodium Enalcarbenoids - Synthesis of Substituted Carbazoles",
    authors: "K. S. Rathore, M. Harode and S. Katukojvala*",
    link: "http://pubs.rsc.org/en/content/articlelanding/2014/ob/c4ob01693a#!divAbstract",
    tag: "Org. Biomol. Chem. 2014, 12, 8641",
    leftCover: "OrganicBio.jpg",
    rightCover: null,
    fig: "18.png",
    selected: false,
  },
  {
    id: 17,
    title: "Synergistic Rhodium(II) Carboxylate and Bronsted Acid Catalyzed Multicomponent Reactions of Enalcarbenoids: Direct Synthesis of a-Pyrrolylbenzylamines",
    authors: "S. G. Dawande, V. Kanchupalli, B. S. Lad, J. Rai, S. Katukojvala*",
    link: "http://pubs.acs.org/doi/abs/10.1021/ol501508f",
    tag: "Org. Lett. 2014, 16, 3700",
    leftCover: "OL New.jpg",
    rightCover: null,
    fig: "17.gif",
    selected: false,
  },
  {
    id: 16,
    title: "Rhodium Enalcarbenoids: Direct Synthesis of Indoles by Rhodium(II) Catalyzed [4+2] Benzannulation of Pyrroles",
    authors: "S. G. Dawande, V. Kanchupalli, J. Kalepu, H. Chennamsetti, B. S. Lad, S. Katukojvala*",
    link: "http://onlinelibrary.wiley.com/doi/10.1002/anie.201400161/abstract",
    tag: "Angew. Chem. Int. Ed. 2014, 53, 4076 (hot paper)",
    leftCover: "16.jpg",
    rightCover: "16-2.png",
    fig: "16.webp",
    selected: true,
  },
  {
    id: 15,
    title: "Medium-ring aminocyclitols: A concise synthesis of nine- membered aminocarbasugar analogues and the solid-state supramolecular architectures of two key precursors",
    authors: "Mehta, G.; Mohanrao, R.; Katukojvala, S.; Landais, Y.; Sen, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040403911005417",
    tag: "Tetrahedron Lett. 2011, 52, 2893-2897)",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 14,
    title: "Cycloninitols: a flexible synthetic approach towards nine-membered carbasugar analogues",
    authors: "Mehta, G.; Pallavi, K.; Katukojvala, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040403909010910?via%3Dihub",
    tag: "Tetrahedron Lett. 2009, 50, 4519",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 13,
    title: "Spirodiepoxides: Synthesis of Epoxomicinoids",
    authors: "Zhang, Y.; Cusick, J. R.; Ghosh, P.; Shangguan, N.; Katukojvala, S.; Inghrim, J.; Emge, T. J.; Williams, L. J.",
    link: "https://pubs.acs.org/doi/10.1021/jo901320f",
    tag: "J. Org. Chem. 2009, 74, 7707",
    leftCover: "JOC.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 12,
    title: "Thioacid/azide amidation: An improved route to N-acyl sulfonamides",
    authors: "Barlett, K. N.; Kolakowski, R. V.; Katukojvala, S.; Williams, L.",
    link: "https://pubs.acs.org/doi/10.1021/ol052671d",
    tag: "J. Org. Lett. 2006, 8, 823",
    leftCover: "OL.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 11,
    title: "Spirodiepoxides in total synthesis: Epoxomicin",
    authors: "Katukojvala, S.; Barlett, K. N.; Lotesta, S. D.; Williams, L. J.",
    link: "https://pubs.acs.org/doi/10.1021/ja044563c",
    tag: "J. Am. Chem. Soc. 2004, 126, 15348",
    leftCover: "JACS.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 10,
    title: "The reaction of thioacids with azides: A new mechanism and new synthetic applications",
    authors: "Shangguan, N.; Katukojvala, S.; Greenberg, R.; Williams, L. J",
    link: "https://pubs.acs.org/doi/10.1021/ja0294919",
    tag: "J. Am. Chem. Soc. 2003, 125, 7754",
    leftCover: "JACS.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 9,
    title: "Synthetic studies towards the novel fomannosane sesquiterpenoid illudosin: Framework construction",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040402003004733",
    tag: "Tetrahedron 2003, 59, 3475",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 8,
    title: "Thioacid/azide amidation: An improved route to N-acyl sulfonamides",
    authors: "Barlett, K. N.; Kolakowski, R. V.; Katukojvala, S.; Williams, L.",
    link: "https://pubs.acs.org/doi/10.1021/ol052671d",
    tag: "J. Org. Lett. 2006, 8, 823",
    leftCover: "OL.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 7,
    title: "Enantioselective total synthesis of the novel tricyclic sesquiterpene (-)-Sulcatine-G",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040403902005348",
    tag: "Tetrahedron Lett. 2002, 43, 3319",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 6,
    title: "A new synthesis of the tricyclic sesquiterpene sterpurene",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040403901022249",
    tag: "Tetrahedron Lett. 2002, 43, 703",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 5,
    title: "Total synthesis of the novel tricyclic sesquiterpene sulcatine-G",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://pubs.rsc.org/en/content/articlelanding/2001/cc/b103472n",
    tag: "Chem. Commun. 2001, 1892",
    leftCover: "5.jpeg",
    rightCover: null,
    fig: null,
  },
  {
    id: 4,
    title: "Enantioselective total syntheses of the novel tricyclic sesquiterpene hydrocarbons (+)-and (-)-kelsoene. Absolute configuration of the natural product",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S004040390100288X",
    tag: "Tetrahedron Lett. 2001, 42, 2855",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 3,
    title: "A stereoselective total synthesis of the novel sesquiterpene kelsoene",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040403999009016",
    tag: "Tetrahedron Lett. 1999, 40, 4877",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 2,
    title: "Synthetic studies towards novel terpenic natural products kelsoene and poduran: construction of the complete 4-5-5- fused tricarbocyclic core",
    authors: "Mehta, G.; Katukojvala, S.",
    link: "https://www.thieme-connect.de/products/ejournals/abstract/10.1055/s-1999-2670?update=true&ERSESSIONTOKEN=IZjO3K1R8VYyx2FxxE8ZXzMGHMsLrYPc1wE-18x2d0lMdSXOw6Tx2BJRRz45h82sgx3Dx3DxxBuT5YqDux2Fnl84HnVgqP8wx3Dx3D-d4x2FrgR0Sqp5KUK8uh7Xqkwx3Dx3D-6gOkCCiAjjGoRkJFX2VU8gx3Dx3D",
    tag: "Synlett 1999, 555",
    leftCover: "Synlett.jpg",
    rightCover: null,
    fig: null,
  },
  {
    id: 1,
    title: "Triquinane-derived macrocyclic lactones and a [2]-catenane: Synthesis and characterization",
    authors: "Mehta, G.; Katukojvala, S.; Vidya, R.; Uma, R.; Kunwar, A. C.; Ravikumar, K.; Vairamani, M.",
    link: "https://www.sciencedirect.com/science/article/pii/S0040402098006413",
    tag: "Tetrahedron 1998, 54, 10879",
    leftCover: "Tetrahedron letters.jpg",
    rightCover: null,
    fig: null,
  },
];

function displayCards() {
  var cardsContainer = document.getElementById("publications");
  cardsContainer.innerHTML = "";

  for (var i = 0; i < publicationsList.length; i++) {
    let publication = publicationsList[i];
    cardsContainer.innerHTML =
      cardsContainer.innerHTML +
      `<div class="hover-card card ${i == 0 ? "border-info" : ""} text-bg-light py-4 px-4 d-flex justify-content-center">
          <div class="row justify-content-evenly align-items-center">
            <div class="col-md-4 col-12 mb-3 mb-md-0">
              <img src="/~sk/images/publications/covers/${publication.leftCover}" class="rounded-start" alt="27 Publication" width="150px" />
            </div>
            <div class="col-md-${publication.rightCover ? 4 : 8} col-12  mb-3 mb-md-0">
            ${i == 0 ? `<div class="badge rounded-pill text-bg-primary mb-4" style="width: 100px">Latest</div>` : ""}
              <h5 class="card-title">${publication.id}. ${publication.title}</h5>
              <p class="card-body">
                ${publication.authors}&nbsp;<a href="${publication.link}"><i>${publication.tag}</i></a>
              </p>
              ${publication.fig ? `<img src="/~sk/images/publications/fig/${publication.fig}" class="rounded-start w-100 publication-fig" alt="27 Publication"  />` : ""}
            </div>
            ${
              publication.rightCover
                ? `
            <div class="col-md-4 col-12 mb-3 mb-md-0">
              <img src="/~sk/images/publications/covers/${publication.rightCover}" class="rounded-start" alt="27 Publication" width="150px" />
            </div>`
                : ""
            }
          </div>
        </div>`;
  }
}

function displayCarousel() {
  var carousel = document.getElementById("selected-publications");
  carousel.innerHTML = "";

  const newList = publicationsList.filter((pub) => pub.selected === true);
  for (var i = 0; i < newList.length; i++) {
    let publication = newList[i];
    carousel.innerHTML =
      carousel.innerHTML +
      `<div class="carousel-item ${i == 0 ? "active" : ""}">
      <div class="card ${i == 0 ? "border-info" : ""} text-bg-light py-4 px-4 d-flex justify-content-center" style="min-height: 500px;">
      <div class="row justify-content-evenly align-items-center">
        <div class="col-md-3 col-12 mb-3 mb-md-0">
          <img src="/~sk/images/publications/covers/${publication.leftCover}" class="rounded-start" alt="27 Publication" width="150px" />
        </div>
        <div class="col-md-${publication.rightCover ? 4 : 9} col-12 mb-3 mb-md-0">
          ${i == 0 ? `<div class="badge rounded-pill text-bg-primary mb-4" style="width: 100px">Latest</div>` : ""}
          <h5 class="card-title">${publication.id}. ${publication.title}</h5>
          <p class="card-body">
            ${publication.authors}&nbsp;<a href="${publication.link}"><i>${publication.tag}</i></a>
          </p>
          ${publication.fig ? `<img src="/~sk/images/publications/fig/${publication.fig}" class="rounded-start publication-fig" alt="27 Publication" />` : ""}
        </div>
        ${
          publication.rightCover
            ? `
        <div class="col-md-4 col-12 mb-3 mb-md-0">
          <img src="/~sk/images/publications/covers/${publication.rightCover}" class="rounded-start" alt="27 Publication" width="150px" />
        </div>`
            : ""
        }
      </div>
    </div>
      </div>`;
  }
}

function displaySmallCarousel() {
  var carousel = document.getElementById("small-publications-list");
  carousel.innerHTML = "";
  let n = 5;

  for (const element of publicationsList) {
    let publication = element;
    carousel.innerHTML += `<div style="width: 100px;">
        <a href="${publication.link}" title="${publication.title}" class="thumb">
          <img class="img-fluid mx-auto d-block hover-card" src="/~sk/images/publications/covers/${publication.leftCover}" alt="${publication.title}">
        </a>
      </div>`;
  }

  while (n--) {
    console.log(1);
    carousel.innerHTML += carousel.innerHTML;
  }

  // self.setInterval(() => {
  //   for (const element of publicationsList) {
  //     let publication = element;
  //     carousel.innerHTML =
  //       carousel.innerHTML +
  //       `<div style="width: 100px;">
  //       <a href="${publication.link}" title="${publication.title}" class="thumb">
  //         <img class="img-fluid mx-auto d-block hover-card" src="/~sk/images/publications/covers/${publication.leftCover}" alt="${publication.title}">
  //       </a>
  //     </div>`;
  //   }
  // }, 1500);

  var smallCarousel = document.getElementById("horizontal-container");

  const carouselScrollWidth = smallCarousel.scrollWidth;
  // window.addEventListener("load", () => {
  self.setInterval(() => {
    if (smallCarousel.scrollLeft + smallCarousel.offsetWidth !== carouselScrollWidth) {
      smallCarousel.scrollTo(smallCarousel.scrollLeft + 1, 0);
    } else {
      smallCarousel.scrollTo(0, 0);
    }
  }, 15);
  // });
}

function displayGroupNews() {
  var groupNewsDiv = document.getElementById("group-news");
  groupNewsDiv.innerHTML = "";

  for (var i = 0; i < groupNews.length; i++) {
    let news = groupNews[i];
    groupNewsDiv.innerHTML = groupNewsDiv.innerHTML + `<li class="hover-card shadow-sm list-group-item">${news.date} : ${news.message}</li>`;
  }
}
