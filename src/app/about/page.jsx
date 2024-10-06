
import { getServerSession } from 'next-auth';
import React from 'react';
import { AuthOptions } from '../api/auth/[...nextauth]/route'; 

const page =async () => {

    const session=await getServerSession(AuthOptions)
    console.log(session);
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-4xl'>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            
        </div>
    );
};

export default page;