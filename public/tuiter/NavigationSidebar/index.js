const NavigationSidebar = (active) => {
  let navigationSidebar = `
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
        <a href="../HomeScreen/index.html" id="home"
           class = "list-group-item list-group-item-action ${active === 'Home'
      ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-house-chimney"></i>
            </div>
          <div class="col-10 d-none d-xl-block">Home</div>
          </div>
        </a>
        <a href="../ExploreScreen/index.html"
           class="list-group-item list-group-item-action ${active === 'Explore'
      ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-hashtag"></i>
            </div>
            <div class="col-10 d-none d-xl-block">Explore</div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action ${active
  === 'Notifications' ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-bell"></i>
            </div>
            <div class="col-10 d-none d-xl-block">Notifications</div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action ${active === 'Messages'
      ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-envelope"></i>
            </div>
              <div class="col-10 d-none d-xl-block">Messages</div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action ${active
  === 'Bookmarks' ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-bookmark"></i>
            </div>
              <div class="col-10 d-none d-xl-block">Bookmarks</div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action ${active === 'Lists'
      ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-bookmark"></i>
            </div>
              <div class="col-10 d-none d-xl-block">Lists</div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action ${active === 'Profile'
      ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-user"></i>
            </div>
              <div class="col-10 d-none d-xl-block">Profile</div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action ${active === 'More'
      ? "active" : ""}">
          <div class="row">
            <div class="col-2">
          <i class="fa-solid fa-circle-info"></i>
            </div>
              <div class="col-10 d-none d-xl-block">More</div>
          </div>
        </a>
      </div>
      <div class="d-grid mt-2">
      <a href="tuit.html"
        class="btn btn-primary btn-block w-100 rounded-pill">
        Tuit</a>
      </div>
 `;
  if (active === 'Home') {
    $('#home').addClass('active');
    console.log(active)
  }
  return navigationSidebar;
}
export default NavigationSidebar;

