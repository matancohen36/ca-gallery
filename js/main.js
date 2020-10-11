console.log('Starting up');

function renderPortfilo (){
    var projs = getProjs()
    var strHtmls = projs.map(function (proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a onclick="renderModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.name}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.desc}</p>
        </div>
        </div>
        `
    })
    document.querySelector('.port-row').innerHTML = strHtmls.join('')
}


function renderModal(id){
    var proj = getProjById(id)
    var strHtml =
    `<div class="portfolio-modal modal fade" id="portfolioModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.name}.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.name}.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${proj.date}</li>
                  <li>Client: Threads</li>
                  <li>Category: ${proj.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
document.querySelector('.modolu').innerHTML = strHtml

}
 

renderPortfilo();