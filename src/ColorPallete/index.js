import React from "react";
import { Layout, Menu } from "antd";
import ColorPallate from "./ColorPallate";
import { colors } from "./config";
import "./style.css";
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
        <ColorPallate colors={colors} />
      </Content>
    </Layout>
  );
};

export default Blog;
