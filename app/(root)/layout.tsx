import SideBar from "@/components/Sidebar";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn ={
    firstName: 'Ese',
    lastName: 'Monday',
  }
  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn}/>
    <div className="flex size-full flex-col ">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={24} height={24} alt="Npay" />
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </div>
   
   </main>
  );
}
