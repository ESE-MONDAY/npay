import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatAmount } from '@/lib/utils'

const BankCard = ({account,userName, showBalance=true}: CreditCardProps) => {
  return (
    <div className='flex flex-col w-full '>
        <Link href="/" className="bank-card" >
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-16 font-semibold text-white'>{account.name || userName}</h1>
                    <p className='font-ibm-plex-serif text-white font-black'>
                        {formatAmount(account.currentBalance || 0)}
                    </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <h1 className='text-12 font-semibold text-white'>{userName}</h1>
                        <h2 className='text-12 font-semibold text-white'>
                            **/** 
                        </h2>
                    </div>
                    <p className='tracking-[1.1px] text-14 font-semibold text-white'>
                    ●●●● ●●●● ●●●● <span className="text-16">{account?.mask}</span>
                    </p>

                </article>
            </div>
            <div className='bank-card_icon'>
                <Image src="/icons/Paypass.svg" width={20} height={24} alt='pay'  />
                <Image src="/icons/mastercard.svg" width={45} height={32} alt='Visa' className='ml-5'  />

            </div>
            <Image src="/icons/lines.svg" height={190} width={316} className='absolute top-0' alt='lines' />
        </Link>
        </div>
  )
}

export default BankCard