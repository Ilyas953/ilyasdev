"use client"

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { Michroma } from "next/font/google";

import Link from "next/link";


const michroma = Michroma({
    style:"normal",
    weight: "400"
  });
  // ---------------------------------------------------- DECLA DES TYPES TYPESCRIPT-------------------------------------------------------------------------------------------
type SectionProps = {
  className?: string;
  children?: ReactNode;
  id?: string;
};

type IconeProps = {
    className?: string;
    icone: string
    isglow?: boolean
}




// ------------------------------------------------------------------------------- COMPOSANT POUR ICONE-------------------------------------------------------------------


export function Icone({className, icone, isglow}: IconeProps) {
    const MotionIcon = motion(Icon);

    return (
        <>
          { isglow && <MotionIcon
            icon={icone}
    animate={{
    boxShadow: [
      "0 0 8px rgba(139,92,246,0.9)",
      "0 0 32px rgba(139,92,246,1)",
      "0 0 8px rgba(139,92,246,0.9)"
    ]
  }}
  transition={{ duration:2, repeat: Infinity, ease: "easeInOut", times:[0,0.25,0,75] }}
  className={className} 

  /> }
        { !isglow && <Icon
            icon={icone} className={className} 

  /> }

        </>
    )

}

export function Staricon({className, icone}: IconeProps) {
    return (
        <>
        <Icone icone={icone} isglow={true} className={`absolute text-[#8b5cf6] w-[32px] h-[32px] ${className}`} />
        </>
    )
}

export function Cardicon({className, icone}: IconeProps) {
    return (
        <>
        <Icone icone={icone} isglow={false} className={` text-[#8b5cf6] w-[48px] h-[48px] ${className}`} />
        </>
    )
}





// -------------------------------------------------------------------- COMPOSANT POUR LE GLOW/animation -------------------------------------------------------------------------------


export function Glow({className, children}: SectionProps) {

    return (
        <>
        <motion.div animate={{
    boxShadow: [
      "0 0 8px rgba(139,92,246,0.9)",
      "0 0 32px rgba(139,92,246,1)",
      "0 0 8px rgba(139,92,246,0.9)"
    ]
  }}
  whileHover={{ y:-10, boxShadow: "0 0 32px rgba(139,92,246,0.8)" }}
  transition={{ boxShadow:{ duration:2, repeat: Infinity, ease: "easeInOut", times:[0,0.25,0,75]}, y: {duration: 0.5, ease: "easeOut"} }} className={className}>
            {children}
        </motion.div>
        </>
    )

}

export function AnimScroll({ className, children }: SectionProps) {

     const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


    return (
         <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }} className={`${className}`} >
        {children}
        </motion.div>
    )
}

// ------------------------------------------------------------------------- COMPOSANT POUR LES BOUTONS -------------------------------------------------------------------------


export function Bouton({ className, children }: SectionProps) {
  return (
    
      <Glow

        className={` z-50 flex flex-row gap-[10px] items-center text-[24px] px-5 py-[15px] bg-[#8b5cf6] rounded-[8px] ${className}`}>
      
        {children}
      </Glow>
    
  );
}

export function Bouton2({ className, children }: SectionProps) {
  return (
    
      <Glow
        className={` z-50 flex flex-row gap-[10px] items-center bg-violet-500/20 text-[24px] px-5 py-[15px]  rounded-[8px] ${className}`}>
      
        {children}
      </Glow>
    
  );
}

export function SecondBouton({ className, children }: SectionProps) {
    return (
        <>
        <motion.div
            initial={{y:0}}
            whileHover={{y:-10}}
            transition={{duration:0.5, ease:"easeOut"}}
        className={`flex flex-row gap-[10px] items-center text-[24px] px-5 py-[15px] border-white border-[1px] rounded-[8px] ${className}`}>
            {children}
        </motion.div>
        </>
    )
}


// ------------------------------------------------------------------------------- COMPOSANT DU LAYOUT ---------------------------------------------------------



export function Section({className, children, id}: SectionProps) {

        

    return (
        <>
        <section id={id} className={`${className} w-full lg:h-[100vh]   p-[32px] grid grid-cols-12  gap-[24px]`}>
        {children}
        </section>
        </>
    )
}



export function Header() {

    const [burger, setBurger] = useState<boolean>(false)

    return (
     <>
     <div className="w-full fixed px-[32px] py-[24px] top-0 left-0 z-50  flex flex-row items-center justify-between backdrop-blur-md  ">
        <p className={`text-2xl text-[#8b5cf6] ${michroma.className} `}>LiaysDev</p>
            <div className="hidden lg:flex flex-row gap-8 text-[16px] ">
                <Link href="/"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Accueil <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/design"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Mes Designs <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#projet"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Mes Projets <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
            </div>
            <Link href="/#contact"><Bouton className=" hidden lg:flex text-[16px]"><p className="text-[16px]">Demarrer un Projet</p></Bouton></Link>
        <button onClick={() => setBurger(true)}> <Icone icone="qlementine-icons:menu-burger-16" className={ `${ !burger ? 'opacity-100': 'opacity-0'}  lg:hidden w-[44px] h-11 text-[#8b5cf6]`} /></button>
        
     </div>

     {burger && <div className=" fixed h-screen z-80 w-full grid grid-cols-5 px-[32px] py-[24px] bg-black/85">
                <div className=" self-start flex flex-row items-end col-start-6"><button onClick={() => setBurger(false)}><Icone icone="akar-icons:cross" className="  w-[44px] h-11 text-[#8b5cf6]" /></button></div>
                 <div className=" row-start-1 mt-30 ml-10 col-span-full text-center items-center flex flex-col gap-8 text-[24px] font-semibold ">
                <Link href="/"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Accueil <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/design"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Mes Designs <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#projet"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Mes Projets <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#contact"><Bouton className=" w-full  text-[20px]"><p className="text-[20px]">Demarrer un Projet</p></Bouton></Link>
            </div>

                </div>
        
        }
     </>

    )
}






// ---------------------------------------------------------------------- LES CAAAARDS ----------------------------------------------------------------

export function Card({ className, children} : SectionProps) {


    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });



    return (
        <>
        <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      whileHover={{ y:-10, boxShadow: "0 0 32px rgba(139,92,246,0.8)" }}
      transition={{ duration: 0.6 }} className={` ${className} flex flex-col items-center  p-[24px] bg-[#2A2A2A] rounded-[24px] border-[1px]    border-[#8b5cf6] text-[24px]  `}>
            {children}
        </motion.div>
        </>
    )
        
        
    
}

export function SecondCard({ className, children} : SectionProps) {
    return (
        <>
        <Glow className={` ${className} flex flex-col items-center  p-[24px] bg-[#0a0a0f] rounded-[24px]      text-[24px]  `}>
            {children}
        </Glow>
        </>
    )
        
}
 

