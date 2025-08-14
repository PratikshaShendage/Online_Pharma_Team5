import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'

const { Header } = Layout

export default function TopNav() {
  const { pathname } = useLocation()
  const items = [
    { key: '/admin', label: <Link to="/admin">Admin</Link> },
    { key: '/member', label: <Link to="/member">Member</Link> },
    { key: '/member/cart', label: <Link to="/member/cart">Cart</Link> },
    { key: '/member/orders', label: <Link to="/member/orders">Orders</Link> },
  ]
  const selectedKey = items.find(i => pathname.startsWith(i.key))?.key || ''

  return (
    <Header style={{ background: 'transparent', padding: 0 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Pharmacy</Typography>
          <div style={{ minWidth: 360 }}>
            <Menu
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={items}
              style={{ background: 'transparent' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Header>
  )
}
