import { Badge, Container } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ResMenu from './responsevmenu/ResMenu';
// mui icons
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import CompareIcon from '@mui/icons-material/Compare';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
// import PersonIcon from '@mui/icons-material/Person';


function Navbar() {

    const pages = [
        {id:1,name:'صفحه اصلی' , icon: <HomeIcon />, class:''},
        {id:2,name:'فروشگاه' , icon: <StoreIcon />, class:''},
        {id:3,name:'جزئیات پرداخت' , icon: <PaymentIcon />, class:''},
        {id:4,name:'مقایسه محصول' , icon: <CompareIcon />, class:''},
        {id:6,name:'وبلاگ' , icon: <CoPresentIcon />, class:''},
        {id:7,name:'درباه ما' , icon: <InfoIcon />, class:''},
        {id:8,name:'تماس با ما' , icon: <CallIcon />, class:''},
        {id:9,name:'ورود / ثبت نام' , icon: <PersonIcon /> , class:'hidden'},
      ]
  return (
<nav className='shadow p-3'>
    <Container maxWidth='xl'>
    <div className="flex items-center justify-between gap-4 lg:gap-40 py-6">
              {/* resposev menu */}
              <div className="lg:hidden leading-none z-10">
                    <div className='block xl:hidden'>
                        <ResMenu pages={pages}/>
                    </div>
              </div>

              <div className="flex items-center lg:flex-1 gap-8">
                {/* logo */}
                  <div><a href="/"><img src="./imgs/Logo/logo.png" alt="logo" /></a></div>
                  {/* input search */}
                  <div className="hidden lg:block w-3/4">
                      <div className="relative">
                        <input type="text" placeholder="جستجو کنید در ترازو ..." className="w-full placeholder:text-sm p-3" /> 
                        <button className="absolute top-3 left-2 rounded-r-none">
                            <SearchIcon />
                        </button>
                      </div>
                    </div>
              </div>

              <div className="flex items-center gap-6">
                  {/* login */}
                  <div className="hidden lg:block">
                    <a href="/" className='hidden md:block'>ورود / ثبت نام</a>
                  </div>
                
                  
                  {/* userbasket */}
                  <div className="indicator">
                      <a href="/" className="p-1">
                        <Badge badgeContent={1} color="success">
                            <ShoppingCartIcon />
                        </Badge>
                     </a>
                  </div>


              </div>
          </div>


    <div className="flex justify-between items-center pb-4">
        {/* search menu in responsev mode */}
        <div className="block lg:hidden w-full">
            <div className="relative">
                <input type="text" placeholder="جستجو کنید در ترازو ..." className="w-full placeholder:text-sm p-3" /> 
                <button className="absolute top-3 left-2 rounded-r-none">
                    <SearchIcon />
                </button>
            </div>
        </div>
            {/* menu in lg */}
        <div className="flex items-center gap-8">
                <div className="hidden lg:block">
                      <ul className="flex gap-x-10">
                        {pages.map((page)=>(
                            <li key={page.id} className={page.class}><a href="/">{page.name}</a></li>
                        ))}
                      </ul>
                </div>
        </div> 
    </div>
    </Container>    
</nav>
  )
}

export default Navbar


