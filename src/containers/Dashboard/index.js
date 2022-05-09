import { Layout, Menu,Dropdown } from 'antd';
import { BulbOutlined,UserOutlined,DownOutlined, ProfileOutlined,SnippetsOutlined, NotificationOutlined,MenuOutlined} from '@ant-design/icons';
import './Scss/index.scss';
import Quizzes from '../../components/quizzes';
import Container from 'react-bootstrap/Container';
import { Button } from 'antd';
import {smit} from '../../assests/images';
import { useState } from 'react';
const { Header, Sider } = Layout;
function Dashboard(){
  const [selected,setSelected] = useState('English');
  const [openDrawer,setOpenDrawer] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={()=>setSelected("English")}>
        English
      </Menu.Item>
      <Menu.Item key="2" onClick={()=>setSelected("Urdu")}>
        Urdu
      </Menu.Item>
    </Menu>
  );
  return (
      <Container fluid>
        <Layout className='main-div'>
            <Header className="header" >
              <div className='header-left-div'>
                <MenuOutlined 
                onClick={()=>setOpenDrawer(!openDrawer)} 
                style={{fontSize:20}} 
                className='drawer-icon' />
                <img src={smit} alt='SMIT' className='header-logo' />
              </div>
              <div>
                <Dropdown overlay={menu} className='dropdown'>
                  <Button>
                    {selected} <DownOutlined />
                  </Button>
                </Dropdown>
                <Button type="primary" danger className='Logout-Btn'>
                  Logout
                </Button>
              </div>
            </Header>
            <Layout className='Content-Div-Layout'>
                <Sider className={openDrawer?"sider show":"sider"} >
                    <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                      <Menu.Item key="1" icon={<BulbOutlined />}>Quizzes</Menu.Item>
                      <Menu.Item key="2" icon={<UserOutlined />}>Students</Menu.Item>
                      <Menu.Item key="3" icon={<SnippetsOutlined />}>Results</Menu.Item>
                      <Menu.Item key="4" icon={<NotificationOutlined />}>Notifications</Menu.Item>
                      <Menu.Item key="5" icon={<ProfileOutlined />}>Attendance</Menu.Item>
                    </Menu>
                </Sider>
                <Layout 
                className='Content-Layout'>
                  <Quizzes />
                </Layout>
            </Layout>
        </Layout>
      </Container>
    );
}
export default Dashboard;