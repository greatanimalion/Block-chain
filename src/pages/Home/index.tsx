import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { Button } from 'antd';

const HomePage: React.FC = () => {
  const userInfo =useModel('@@initialState').initialState!

  
  const { name } = useModel('global');
  const {counter, increment} = useModel('counter');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        {/* <Button>{counter}</Button> */}
        {/* <Button onClick={increment}>Increment</Button> */}
       
      </div>
    </PageContainer>
  );
};

export default HomePage;
