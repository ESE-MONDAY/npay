import React, { use } from 'react'
import Header from '@/components/Header'
import BalanceBox from '@/components/BalanceBox'
const HomePage = () => {
  const user = {
    fullName: 'Ese Monday',
    email: '',
    totalBanks : 0,
    totalBalance : 278.89,
  }
  return (
   <section className='home '>
    <div className='home-content'>
    <header className='home-header'>
    <Header 
      type="greeting" 
      title="Welcome" 
      user={user?.fullName || "Guest"} 
      subtext="Access and Manage your account and transactions efficiently" />
      <BalanceBox
        accounts={[]}
        totalBalance={user?.totalBalance || 0}
        totalBanks={user?.totalBanks || 0}
      
      />
    </header>
    </div>
   </section>
  )
}

export default HomePage