import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'antd'
import TopNav from './components/_shared/TopNav'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import AdminDashboard from './components/Admin/AdminDashboard'
import MemberDashboard from './components/Member/MemberDashboard'
import Profile from './components/Member/Profile'
import Cart from './components/Member/Cart'
import Orders from './components/Member/Orders'
import ManageMembers from './components/Admin/ManageMembers'
import AddDrug from './components/Admin/AddDrug'
import ManageDrugs from './components/Admin/ManageDrugs'
import ManageOrder from './components/Admin/ManageOrder'

const { Content, Footer } = Layout

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopNav />
      <Content style={{ padding: 24, maxWidth: 1280, margin: '0 auto', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/members" element={<ManageMembers />} />
          <Route path="/admin/drugs" element={<ManageDrugs />} />
          <Route path="/admin/drugs/add" element={<AddDrug />} />
          <Route path="/admin/orders" element={<ManageOrder />} />

          <Route path="/member" element={<MemberDashboard />} />
          <Route path="/member/profile" element={<Profile />} />
          <Route path="/member/cart" element={<Cart />} />
          <Route path="/member/orders" element={<Orders />} />

          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Pharmacy App </Footer>
    </Layout>
  )
}
