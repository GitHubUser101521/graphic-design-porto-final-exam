import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const nav = [
        {
            name: 'Landing',
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

    return (
        <div className="w-full flex justify-between items-center px-40 py-8 bg-white fixed top-0 shadow-xl">
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
                    <Link href={n.link} key={n.name}>
                        <p className='hover:font-bold'>
                            { n.name }
                        </p>
                    </Link>
                ))
            }
            </div>
        </div>
    )
}