"use client";

import { AnimatedHamburger } from "@/components/AnimatedHamburger";
import CardContainer from "@/components/CardContainer";
import Toolbar from "@/components/Toolbar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Home() {
  const [isActive, setActive] = useState(false);

  return (
    <div className="bg-gray-100 relative min-h-screen">
      <img 
        src="https://cdn.discordapp.com/attachments/1261172593835249738/1261832391018811512/Pl.png?ex=6694647d&is=669312fd&hm=4cf9da2525a08917f0f31dc8645506977d6143a74b03e87d88aa8b68bd2c3e73&" 
        alt="Logo"
        className="absolute top-5 left-5"
        style={{ width: 150 }}
      />
      <h2 className="absolute left-20 top-1/2 transform -translate-y-1/2 px-4 py-2" style={{ backgroundColor: '#357960', color: 'white', borderRadius: '8px' }}>
        <ArrowBackIosIcon />
        Swipe Left to Not Match
      </h2>

      <div className="flex min-h-screen flex-col items-center justify-between">
        <CardContainer />
      </div>

      <div className="fixed right-5 top-5">
        <AnimatedHamburger isActive={isActive} setActive={setActive} />
        <AnimatePresence mode="wait">
          {isActive && <Toolbar setActive={setActive} />}
        </AnimatePresence>
      </div>

      <h2 className="absolute right-20 top-1/2 transform -translate-y-1/2 translate-x--20 px-4 py-2" style={{ backgroundColor: '#357960', color: 'white', borderRadius: '8px' }}>
        Swipe Right to Match
        <ArrowForwardIosIcon />
      </h2>
    </div>
  );
}
