import React, {Component } from 'react'
import Home from './Home';
import SanPham from './SanPham'
import Contact from './Contact'
import ChitietSanPham from './ChiTietSanPham'
import Cart from './Cart'
import Quanlisanpham from './Quanlisanpham'
import ActionProducts from './ActionProducts'
import Search from './Search'
 const  routes=[
     {
        path:'/',
        exact:true,
        main:()=><Home/>
    },
    {
        path:'/Products',
        exact:true,
        main:()=><SanPham/>
    },
    {
        path:'/Contact',
        exact:true,
        main:()=><Contact/>
    },

    {
        path:'/ChitietSanPham/:id/',
        exact:true,
        main:({history, match})=> <ChitietSanPham history={history} match ={match}/>
    },
    {
        path:'/Cart',
        exact:true,
        main:({history, match})=> <Cart history={history} match ={match}/>
    },
    {
        path:'/Quanlisanpham',
        exact:true,
        main:({history, match})=> <Quanlisanpham history={history} match ={match}/>
    },
    {
        path:'/ActionProducts/add',
        exact:true,
        main:({history, match})=> <ActionProducts history={history} />
    },
    {
        path:'/ActionProducts/:id/edit',
        exact:true,
        main:({history, match})=> <ActionProducts history={history} match ={match}/>
    },
    {
        path:'/Search',
        exact:true,
        main:({history, match})=> <Search history={history} match ={match}/>
    },
    {
        path:'/Sort',
        exact:true,
        main:({history, match})=> <Search history={history} match ={match}/>
    },
    
];
export default routes;