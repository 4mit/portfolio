import React from "react";
import { Layout, Menu } from "antd";
import SAC from "./StockAverageCalculator";
const { Header, Content } = Layout;
const Blog = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item>Home</Menu.Item>
        </Menu>
      </Header>
      <Content>
        <SAC />
      </Content>
    </Layout>
  );
};

export default Blog;
