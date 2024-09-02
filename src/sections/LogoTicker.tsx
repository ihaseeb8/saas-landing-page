import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png"
import echoLogo from "@/assets/logo-echo.png"
import celesialLogo from "@/assets/logo-celestial.png"
import pulseLogo from '@/assets/logo-pulse.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from "next/image"
import { motion } from "framer-motion";
 
export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">

          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt={"acme Logo"} className="logo-ticker-image" />
            <Image src={quantumLogo} alt={"quantum Logo"} className="logo-ticker-image" />
            <Image src={echoLogo} alt={"echo Logo"} className="logo-ticker-image" />
            <Image src={celesialLogo} alt={"celesial Logo"} className="logo-ticker-image" />
            <Image src={pulseLogo} alt={"pulse Logo"} className="logo-ticker-image" />
            <Image src={apexLogo} alt={"apex Logo"} className="logo-ticker-image" />
        </div>
        </div>
      </div>
    </div>
  )
