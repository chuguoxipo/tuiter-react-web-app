const PostItem = fullPost => {
  return (`
   <li class="list-group-item border-secondary">
    <div class="row">
       <div class="col-sm-1 col-md-2">
          <img src=${fullPost.avatar} class="rounded-circle w-100">
      </div>
      <div class="col-sm-11 col-md-10">
        <div class="row">
          <div class="col-11">
            <div class="fw-bolder">
              ${fullPost.userName}
              <i class="fa-solid fa-circle-check"></i>
              <span class="text-secondary">
                @${fullPost.handle}
              </span>
              <span class="text-secondary">- ${fullPost.time}</span><br>
            </div>
            <p>
              ${fullPost.brief}
            </p>
          </div>
          <div class="col-1">
            <i class="fa-solid fa-ellipsis text-white-50"></i>
          </div>
        </div>
        <div>
          <img src=${fullPost.image} class="rounded w-100">
        </div>
        <div class="border border-secondary rounded-bottom p-2 ">
          <span>
          ${fullPost.title}
          </span><br>
          <span class="text-secondary">
            ${fullPost.content}
          </span>
          <span class="text-secondary">${fullPost.url}</span>
        </div>
        <div class="row pt-2">
          <div class="col-3 text-secondary">
            <i class="fa-regular fa-comment"></i>
            ${fullPost.comment}
          </div>
          <div class="col-3 text-secondary">
            <i class="fa-regular fa-arrows-retweet"></i>
            ${fullPost.repost}
          </div>
          <div class="col-3 text-secondary">
            <i class="fa-regular fa-heart"></i>
            ${fullPost.like}
          </div>
          <div class="col-3 text-secondary">
            <i class="fa-regular fa-share-from-square"></i>
          </div>
        </div>
      </div>
    </div>
  </li>
  `)
};
export default PostItem;