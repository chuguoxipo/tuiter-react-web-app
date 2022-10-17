const WhoToFollowListItem = who => {
  return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-lg-3 col-xl-2">
          <img src=${who.avatarIcon} class="rounded-circle w-100">
        </div>
        <div class="col-lg-5 col-xl-7">
          <div class="fw-bolder">
           ${who.userName}
           <i class="fa-solid fa-circle-check"></i>
          </div>
          <span class="text-secondary">
            @${who.handle}
          </span>
        </div>
        <div class="col-lg-4 col-xl-3 text-center">
          <button class="btn btn-primary mt-1 rounded-pill">
            Follow
          </button>
        </div>
      </div>
    </li>
`)
};
export default WhoToFollowListItem;