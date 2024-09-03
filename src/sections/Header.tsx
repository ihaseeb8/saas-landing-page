import ArrowRightIcon from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'


export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className='text-white/60 hidden md:block'>
            Streamline your workflow and boost your productivity
          </p>
          <div className='inline-flex gap-1 items-center'>
            <p>Get Started for free</p>
            <ArrowRightIcon className='size-4 inline-flex items-center justify-center'/>
          </div>
        </div>

        <div>
          <div className='py-5'>
            <div className='container'>
              <div className='flex items-center justify-between'>
                <Image src={Logo}  alt='saas logo' height={40} width={40}/>
                <MenuIcon className='h-5 w-5 md:hidden' />
                <nav className='hidden md:flex gap-6 text-black/60 items-center'>
                  <a href='#'>About</a>
                  <a href='#'>Features</a>
                  <a href='#'>Cusotmers</a>
                  <a href='#'>Updates</a>
                  <a href='#'>Help</a>
                  <button className="">
                    Get for free
                  </button>
                </nav>
              </div>
              
            </div>
          </div>

        </div>
  </header>
);
}
