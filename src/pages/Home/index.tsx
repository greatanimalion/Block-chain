import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';
import { ProCard } from '@ant-design/pro-components';
import { Statistic } from 'antd';
import { useState } from 'react';

const { Divider } = ProCard;

const HomePage: React.FC = () => {
  const userInfo =useModel('@@initialState').initialState!
  const [responsive, setResponsive] = useState(false);
  
  const { name } = useModel('global');

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        {/* <Button>{counter}</Button> */}
        {/* <Button onClick={increment}>Increment</Button> */}
        <ProCard.Group title="核心指标" direction={responsive ? 'column' : 'row'}>
        <ProCard>
          <Statistic title="今日UV" value={79.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="冻结金额" value={112893.0} precision={2} />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="信息完整度" value={93} suffix="/ 100" />
        </ProCard>
        <Divider type={responsive ? 'horizontal' : 'vertical'} />
        <ProCard>
          <Statistic title="冻结金额" value={112893.0} />
        </ProCard>
      </ProCard.Group>
      </div>
    </PageContainer>
  );
};

export default HomePage;

