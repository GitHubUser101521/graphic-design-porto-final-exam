'use client'
import { animOpacity } from '@/utils/gsapAnim'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Header() {
    const nav = [
        {
            name: 'Home',
            link: '#landing'
        },
        {
            name: 'Featured Work',
            link: '#featured-work'
        },
        {
            name: 'Artist Spotlight',
            link: '#artist-spotlight'
        }
    ]

    useEffect(() => {
        const navEl = document.querySelectorAll('.nav')
        
        navEl.forEach(el => {
            el.addEventListener('mouseenter', () => {
                animOpacity(el, 1, 0.5)
            })

            el.addEventListener('mouseleave', () => {
                animOpacity(el, 0.5, 1)
            })
        })
    }, [])

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-10 lg:px-40 py-4 lg:py-8 bg-white fixed top-0 shadow-xl gap-4">
            <div className='flex items-center gap-4'>
                <Image 
                    src="/favicon.ico"
                    alt=''
                    width={32}
                    height={32}
                />
                <p className='font-bold'>CollectiveArt</p>
            </div>

            <div className='flex gap-6'>
            {
                nav.map(n => (
                    <Link href={n.link} key={n.name} >
                        <p className='hover:font-bold nav'>
                            { n.name }
                        </p>
                    </Link>
                ))
            }
            </div>
        </div>
    )
}