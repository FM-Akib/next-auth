import { auth } from '@/auth';
import Logout from '@/components/Logout';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async() => {
    const session = await auth();
    if (!session?.user) {
        redirect('/');
    }
    return (
        <div>
            This is the dashboard page. You can add your dashboard components here.
            <p>Welcome to your dashboard!</p>
            <div className=" flex flex-col items-start mt-5 justify-center gap-2">
            <Image 
                src={session.user.image || '/default-avatar.png'}
                alt='User Avatar'
                width={100}
                height={100}
                className='rounded-full'
            />
            <p className='p-3 bg-emerald-700 rounded'>User: {session.user.email}</p>
            <p className='p-3 bg-emerald-700 rounded'>Name: {session.user.name}</p>
            </div>

            <Logout />
        </div>
    );
};

export default page;