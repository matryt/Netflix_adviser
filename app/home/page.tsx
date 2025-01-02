'use client'

import {UserProfile, withPageAuthRequired} from '@auth0/nextjs-auth0/client';

interface UserProps {
    user: UserProfile;
}

function Home({user}: UserProps) {
    return (
        <div>Hello {user.name} !</div>
    )
}

export default withPageAuthRequired(Home);