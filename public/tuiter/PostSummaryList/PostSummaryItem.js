const PostSummaryItem = post => {
  return (`
   <li class="list-group-item">
    <div class="row">
       <div class="col-sm-9 col-md-10">
        <span class="text-secondary">
          ${post.topic}
        </span><br>
        <div class="fw-bolder">
          ${post.userName}
          <i class="fa-solid fa-circle-check"></i>
          <span class="text-secondary">- ${post.time}</span><br>
        </div>
        <p class ="fw-bolder">
          ${post.title}
        </p>
      </div>
      <div class="col-sm-3 col-md-2">
        <img src=${post.image} class="rounded w-100">
      </div>
    </div>
  </li>
  `)
};
export default PostSummaryItem;