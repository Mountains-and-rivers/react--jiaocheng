
import styles from './login.css';
import {Button} from 'antd'

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page login</h1>
      <div>
        <Button>登录</Button>
      </div>
    </div>
  );
}
