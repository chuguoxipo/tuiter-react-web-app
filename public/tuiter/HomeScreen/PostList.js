import fullPosts from "./fullPosts.js";
import PostItem from "./PostItem.js";
const PostList = (fullPost) => {
  return(`
    <ul class="list-group">
      ${
      fullPosts.map(fullPost => {
        return(PostItem(fullPost));
      }).join('')
      }
    </ul>
  `)
};
export default PostList;