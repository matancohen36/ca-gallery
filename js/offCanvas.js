function openCanvas() {
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
}

function renderCanvas() {
    var strHTML = `<h4>Contact Me</h4>
    <div class="container my-md-5 text-white">
    <h1 class="my-1 my-sm-5">Leave a Message</h1>
    <form class="py-3">
      <div class="form-group">
        <label for="exampleFormControlInput1">Full Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name">
        <label for="exampleFormControlInput1">Phone Number</label>
        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Your Phone Number">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com">
        <label for="exampleFormControlTextarea1">Leave us a Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button class="btn btn-success">Send</button>
    </form>
  </div>`
    document.querySelector('#contact').innerHTML = strHTML;
}

