import { Breadcrumb, Layout,theme} from 'antd';
import React from 'react';

const { Content } = Layout;

const SpecContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return(
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '50px 16px 16px 200px',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              width:300,
              margin: 200,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
  )
}

export default SpecContent;