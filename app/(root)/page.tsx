import React, { use } from 'react'
import Header from '@/components/Header'
import BalanceBox from '@/components/BalanceBox'
import RecentTransactions from '@/components/Transactions'
import RightSideBar from '@/components/RightSideBar'
const HomePage = () => {
  const user = {
    firstName: 'Ese',
    lastName: 'Monday',
    email: 'mondayese8@gmail.com',
    fullName: 'Ese Monday',
    totalBanks : 0,
    totalBalance : 278.89,
    banks: [
      {
        $id: 1,
        bankName: 'Access Bank',
        accountNumber: '0123456789',
        currentBalance: 278.89,
        accountType: 'Savings Account',
        mask : '1234'
      },
      {
        $id: 2,
        bankName: 'GT Bank',
        accountNumber: '0123456789',
        currentBalance: 278.89,
        accountType: 'Savings Account',
        mask: '1234'
      }
    ]
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
    <RecentTransactions/>
    </div>
    <RightSideBar user={user} transactions={[]} banks={user.banks} />
   </section>
  )
}

export default HomePage