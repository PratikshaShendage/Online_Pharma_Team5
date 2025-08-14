import React, { useState } from 'react'
import { Card as MuiCard, CardContent, TextField, Button, InputAdornment, Link as MuiLink } from '@mui/material'
import { Lock, Email } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { message } from 'antd'

export default function Login() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      message.error('Please enter email and password')
      return
    }
    setLoading(true)
    try {
      // TODO: integrate your auth API
      await new Promise(r => setTimeout(r, 600))
      message.success('Logged in')
      nav('/member')
    } catch (e) {
      message.error('Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh' }}>
      <MuiCard sx={{ width: 420, maxWidth: '95%', borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <h2 style={{ marginTop: 0 }}>Welcome back</h2>
          <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start"><Email /></InputAdornment> }}
              required
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{ startAdornment: <InputAdornment position="start"><Lock /></InputAdornment> }}
              required
              fullWidth
            />
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </Button>
          </form>
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between' }}>
            <MuiLink component={Link} to="/forgot">Forgot password?</MuiLink>
            <MuiLink component={Link} to="/register">Create account</MuiLink>
          </div>
        </CardContent>
      </MuiCard>
    </div>
  )
}
