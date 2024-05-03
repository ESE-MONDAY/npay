'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const MobileNav = ({user}: any) => {
  const pathName = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
      <SheetTrigger>
        <Image src="/icons/hamburger.svg" width={24} height={24} alt="Menu"  className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side="left" className='border-none bg-white'>
      <nav className='flex flex-col'>
            <Link href='/' className=' gap-1 px-4 cursor-pointer flex items-center '>
                <Image src="/icons/logo.svg" alt="Npay" width={24} height={24}  /> 
                <h1 className='text-20 text-black-1 font-ibm-plex-serif font-bold'>Npay</h1>
            </Link>
            <div className='mobilenav-sheet'>
              <SheetClose asChild >
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                      {sidebarLinks.map((link) =>{
                      const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`); 
                      return (
                        <SheetClose asChild key={link.route}>
                          <Link  href={link.route} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient' : isActive})} >
                            <Image src={link.imgURL} alt={link.label} width={18} height={18} className={cn({'brightness-[3] invert-0' : isActive})}/>
                              <p className={cn('text-14 text-black-2 font-semibold' ,{'!text-white': isActive})}>
                                  {link.label}
                              </p>
                              </Link>
                        </SheetClose>
                          )
                  })}
                  USER
                </nav>
              </SheetClose>
              FOOTER

            </div>
           
            
            USER
        </nav>

      </SheetContent>
    </Sheet>
    </section>

  )
}

export default MobileNav