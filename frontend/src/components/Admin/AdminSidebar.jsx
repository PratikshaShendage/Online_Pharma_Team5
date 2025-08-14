import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { TeamOutlined, ShoppingOutlined, MedicineBoxOutlined } from '@ant-design/icons'

export default function AdminSidebar() {
  const { pathname } = useLocation()
  const items = [
    { key: '/admin/drugs', icon: <MedicineBoxOutlined />, label: <Link to="/admin/drugs">Medicines</Link> },
    { key: '/admin/members', icon: <TeamOutlined />, label: <Link to="/admin/members">Members</Link> },
    { key: '/admin/orders', icon: <ShoppingOutlined />, label: <Link to="/admin/orders">Orders</Link> },
  ]
  const selectedKeys = items.find(i => pathname.startsWith(i.key))?.key || ''
  return <Menu mode="inline" selectedKeys={[selectedKeys]} items={items} />
}
