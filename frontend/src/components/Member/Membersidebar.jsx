import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { UserOutlined, ShoppingCartOutlined, OrderedListOutlined } from '@ant-design/icons'

export default function Membersidebar() {
  const { pathname } = useLocation()
  const items = [
    { key: '/member/profile', icon: <UserOutlined />, label: <Link to="/member/profile">Profile</Link> },
    { key: '/member/cart', icon: <ShoppingCartOutlined />, label: <Link to="/member/cart">Cart</Link> },
    { key: '/member/orders', icon: <OrderedListOutlined />, label: <Link to="/member/orders">Orders</Link> },
  ]
  const selectedKeys = items.find(i => pathname.startsWith(i.key))?.key || ''
  return <Menu mode="inline" selectedKeys={[selectedKeys]} items={items} />
}
