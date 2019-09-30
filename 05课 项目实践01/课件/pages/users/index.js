import Link from "umi/link";
import router from "umi/router";
import styles from "./index.css";

export default function() {
  const users = [{ id: 1, name: "tom" }];

  return (
    <div className={styles.normal}>
      <h1>Page Users List</h1>
      <ul>
        {/* {users.map(user=><li key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>          
        </li>)} */}
        {users.map(user => (
          <li key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
