// import { LaptopOutlined, NotificationOutlined, DashboardOutlined  } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const { Header, Content, Sider } = Layout;


// const items1 = ['1', '2', '3'].map((key) => ({
//   key,
//   label: `nav ${key}`,
// }));

// const items2 = [DashboardOutlined , LaptopOutlined, NotificationOutlined].map((icon, index) => {
//   const key = String(index + 1);
//   const items3 = ['Dashboard','Users','Products'];
//   const listItem = items3[index];
//   return {
//     // key: `sub${key}`,
//     key: `/${listItem}`,
//     icon: React.createElement(icon),
//     label: `${listItem}`,
//     // children: new Array(4).fill(null).map((_, j) => {
//     //   const subKey = index * 4 + j + 1;
//     //   return {
//     //     key: subKey,
//     //     label: `option${subKey}`,
//     //   };
//     // }),
//   };
// });
// const HomeDesign = () => {
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();

//   const navigate = useNavigate();
//   return (
//     <Layout>
//       <Header
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <div className="demo-logo" />
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
//       </Header>
//       <Layout>
//         <Sider
//           width={200}
//           style={{
//             background: colorBgContainer,
//           }}
//         >
//           <Menu
//             mode="inline"
//             defaultSelectedKeys={['1']}
//             defaultOpenKeys={['sub1']}
//             style={{
//               height: '100%',
//               borderRight: 0,
//             }}
//             onClick={(item) =>{
//               navigate(item.key);
//             }}
//             items={items2}
//           >
//             {/* <Menu.Item>
//               <NavLink to="/about">ABC</NavLink>
//             </Menu.Item> */}
//             </Menu>
//         </Sider>
//         <Layout
//           style={{
//             padding: '0 24px 24px',
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: '16px 0',
//             }}
//           >
//             <Breadcrumb.Item>Home</Breadcrumb.Item>
//             <Breadcrumb.Item>List</Breadcrumb.Item>
//             <Breadcrumb.Item>App</Breadcrumb.Item>
//           </Breadcrumb>
//           <Content
//             style={{
//               padding: 24,
//               margin: 0,
//               minHeight: 280,
//               background: colorBgContainer,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     </Layout>
//   );
// };
// export default HomeDesign;