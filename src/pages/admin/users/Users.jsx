import React, { useEffect, useState } from "react";
import axios from "../../../api";
import Menu from "../../../components/menu/Menu";
import Text from "../../../components/text/Text";

function Users() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get(`/users`)
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  const UsersTable = users?.map((el) => (
    <tr key={el.id}>
      <td>
        <img src={el.image} alt="" />
      </td>
      <td>{el.lastName}</td>
      <td>{el.username}</td>
      <td>{el.age}</td>
      <td>{el.birthDate}</td>
      <td>{el.university}</td>
    </tr>
  ));
  return (
    <div>
      <Menu />
      <Text />
      <table className="table">
        <tr>
          <th>Img</th>
          <th>LastName</th>
          <th>Username</th>
          <th>Age</th>
          <th>BirthDate</th>
          <th>University</th>
        </tr>
        {UsersTable}
      </table>
    </div>
  );
}

export default Users;
