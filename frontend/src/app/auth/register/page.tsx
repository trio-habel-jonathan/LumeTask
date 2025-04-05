'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const { error } = await supabase.auth.signUp({ // Hapus 'data' dari destrukturing
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      alert('Cek email kamu untuk verifikasi akun!')
      router.push('/auth/login')
    }
  }

  return (
    <form onSubmit={handleRegister} className="space-y-4 max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Register
      </button>
    </form>
  )
}