import React from 'react'
import { Layout, Card as AntCard, Row, Col, Statistic, Button } from 'antd'
import { People, Medication, ReceiptLong, ArrowForward } from '@mui/icons-material'
import { Card, CardContent, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const { Sider } = Layout

const StatCard = ({ title, value, icon }) => (
  <AntCard style={{ borderRadius: 16, height: '100%' }}>
    <Statistic title={title} value={value} prefix={icon} />
  </AntCard>
)

export default function AdminDashboard() {
  return (
    <Layout hasSider style={{ minHeight: '70vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0" style={{ background: 'transparent' }}>
        <AntCard style={{ height: '100%', borderRadius: 0 }}>
          <div style={{ display: 'grid', gap: 12 }}>
            <Button component={Link} to="/admin/drugs" endIcon={<ArrowForward />}>Manage Medicines</Button>
            <Button component={Link} to="/admin/members" endIcon={<ArrowForward />}>Manage Members</Button>
            <Button component={Link} to="/admin/orders" endIcon={<ArrowForward />}>View Orders</Button>
          </div>
        </AntCard>
      </Sider>
      <Layout style={{ paddingLeft: 24 }}>
        <Row gutter={[16,16]}>
          <Col xs={24} sm={12} md={8}><StatCard title="Total Members" value={128} icon={<People />} /></Col>
          <Col xs={24} sm={12} md={8}><StatCard title="Medicines" value={342} icon={<Medication />} /></Col>
          <Col xs={24} sm={12} md={8}><StatCard title="Pending Orders" value={17} icon={<ReceiptLong />} /></Col>
        </Row>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3 }}>
              <CardContent>
                <h3 style={{ marginTop: 0 }}>Quick actions</h3>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Button component={Link} to="/admin/drugs" variant="contained">Medicines</Button>
                  <Button component={Link} to="/admin/members" variant="outlined">Members</Button>
                  <Button component={Link} to="/admin/orders">Orders</Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </Layout>
  )
}
