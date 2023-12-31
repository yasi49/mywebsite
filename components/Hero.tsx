import  Link  from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Mail } from 'lucide-react'
// import heroImage from '../src/app/assets/micky.jpg'


export default function Hero() {
  return (
    <div className='md:max-w-2x1 sm:max-w-xl max-w-sm'>
        <h1 className='p-8 text-3x1 sm:p-10 sm:text-5xl font-bold text-gray-900'>
            Welcome to js Vlogs
        </h1>
        <Button className='sm:mx-16 mx-10'>
            <Mail className='mr-2 h-4 w-4'/>
            <Link href={'../sign-up'}>Signup</Link>

        </Button>

        {/* <Image
        src={heroImage}
        alt="blogs"
        className='w-screen h-screen object-cover object-middle-top opacity-80 absolute top-0 -z-10'
        /> */}
      
    </div>
  )
}
