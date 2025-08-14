import React, { useState } from 'react'
import { Card as MuiCard, CardContent, TextField, Button } from '@mui/material'
import { message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
  const nav = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) {
      message.error('Please fill all fields')
      return
    }
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 600))
      message.success('Registered')
      nav('/login')
    } catch (e) {
      message.error('Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh' }}>
      <MuiCard sx={{ width: 520, maxWidth: '95%', borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <h2 style={{ marginTop: 0 }}>Create account</h2>
          <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
            <TextField label="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required fullWidth />
            <TextField label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required fullWidth />
            <TextField label="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required fullWidth />
            <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Creating…' : 'Sign up'}</Button>
          </form>
          <div style={{ marginTop: 12 }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </CardContent>
      </MuiCard>
    </div>
  )
}
