import React from 'react'
import { Card as MuiCard, CardContent, Button, Grid } from '@mui/material'
import { Table, Tag } from 'antd'

const columns = [
  { title: 'Order #', dataIndex: 'id', key: 'id' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Total', dataIndex: 'total', key: 'total' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (s) => <Tag color={s === 'Delivered' ? 'green' : 'blue'}>{s}</Tag> },
]

const data = [
  { key: 1, id: 'ORD-101', date: '2025-07-05', total: '₹1,240', status: 'Delivered' },
  { key: 2, id: 'ORD-102', date: '2025-08-01', total: '₹560', status: 'Processing' },
]

export default function MemberDashboard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MuiCard sx={{ borderRadius: 3 }}>
            <CardContent>
              <h3 style={{ marginTop: 0 }}>Hello 👋</h3>
              <p>Welcome to your dashboard.</p>
              <Button variant="contained">Browse Medicines</Button>
            </CardContent>
          </MuiCard>
        </Grid>
        <Grid item xs={12} md={8}>
          <MuiCard sx={{ borderRadius: 3 }}>
            <CardContent>
              <h3 style={{ marginTop: 0 }}>Recent orders</h3>
              <Table columns={columns} dataSource={data} pagination={false} />
            </CardContent>
          </MuiCard>
        </Grid>
      </Grid>
    </div>
  )
}
