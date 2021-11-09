/* This example requires Tailwind CSS v2.0+ */
import React , { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Layout, Menu } from "antd";

export default function TopNav() {
  return (
    <Layout.Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item>Home</Menu.Item>
        </Menu>
      </Layout.Header>
  )
}
