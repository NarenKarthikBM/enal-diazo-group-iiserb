const groupNews = [1, 2, 3, 4, 5, 6];

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
              <img src="/images/publications/covers/${publication.cover}" class="rounded-start" alt="27 Publication" width="150px" />
            </div>
            <div class="col-md-${publication.secondCover ? 4 : 8} col-12  mb-3 mb-md-0">
            ${i == 0 ? `<div class="badge rounded-pill text-bg-primary mb-4" style="width: 100px">Latest</div>` : ""}
              <h5 class="card-title">${publication.title}</h5>
              <p class="card-body">
                ${publication.authors}&nbsp;<a href="${publication.link}"><i>${publication.tag}</i></a>
              </p>
              ${publication.fig ? `<img src="/images/publications/fig/${publication.fig}" class="rounded-start w-100" alt="27 Publication" style="max-width: 800px" />` : ""}
            </div>
            ${
              publication.secondCover
                ? `
            <div class="col-md-4 col-12 mb-3 mb-md-0">
              <img src="/images/publications/covers/${publication.secondCover}" class="rounded-start" alt="27 Publication" width="150px" />
            </div>`
                : ""
            }
          </div>
        </div>`;
  }
}
