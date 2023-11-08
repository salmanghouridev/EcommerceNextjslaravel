"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Header from "../../components/Header/page";
import Footer from "../../components/Footer/page"
import Banner from "../../components/Banner/page"
import Recentproducts from "../../components/Recentproducts/page"
import Category from "../../components/Category/page"
import Bestselling from "../../components/Bestselling/page"
import Advatise from "../../components/Advatise/page"
import Ourproducts from "../../components/Ourproducts/page"
import Newarrival from "../../components/Newarrival/page"


export default function Home() {
  

  return (
   <>
   

   <Banner/>
   <Recentproducts/>
   <Category/>
    <Bestselling/>
    <Advatise/>
    <Ourproducts/>
    <Newarrival/>
   </>
  );
}
