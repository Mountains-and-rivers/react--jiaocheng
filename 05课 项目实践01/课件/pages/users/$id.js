import styles from "./$id.css";

export default function(props) {
  return (
    <div className={styles.normal}>
      <h1>Page User</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
}
