'use client'

import { signIn } from 'next-auth/react'

export default function SignUp() {
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={() => signIn('google')}>Sign in with Google</button>
        </div>
    )
}