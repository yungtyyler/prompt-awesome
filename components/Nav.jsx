"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    width={30}
                    height={30}
                    src='/assets/images/logo.svg'
                    alt='Prompt-Awesome Logo'
                    className='object-contain'
                />
                <p className='logo_text'>Prompt-Awesome</p>
            </Link>
        </nav>
    )
}

export default Nav