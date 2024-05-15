import React, { useEffect, useState } from "react";
import axios from "../../../api";
import Menu from "../../../components/menu/Menu";
import Text from "../../../components/text/Text";

function Posts() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    axios
      .get(`/posts`)
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);
  const postsTable = posts?.map((el) => (
    <tr key={el.id}>
      <td>{el.id}</td>
      <td>{el.tags}</td>
      <td>{el.reactions}</td>
      <td>{el.title}</td>
      <td>{el.userId}</td>
    </tr>
  ));
  return (
    <div>
      <Menu />
      <Text />
      <table className="table">
        <tr>
          <th>Id</th>
          <th>reactions</th>
          <th>tags</th>
          <th>title</th>
          <th>userId</th>
        </tr>
        {postsTable}
      </table>
    </div>
  );
}

export default Posts;
