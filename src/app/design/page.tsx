"use client"

import { useState } from "react";
import { AnimScroll, Icone } from "../components"
import Image from "next/image";




type DesignProps = {
    id:number,
    description: string,
    image: string,
    select: number,
  setSelect: React.Dispatch<React.SetStateAction<number>>


}

const design = [
    {
        id:1,
        description:"herosection d'un aquarium fictif",
        image:"/aquaria.png"
    },
    {   
        id:2,
        description:"dashboard version light de mon projet les piliers",
        image:"/dashboardlight.png"
    },
    {
        id:3,
        description:"dashboard version dark de mon projet les piliers",
        image:"/dashboarddark.png"
    },
    {
        id:4,
        description:"herosection d'un outil fictif de football",
        image:"/footlab.png"
    },
    {
        id:5,
        description:"herosection d'un faux saas de concentration et de productivite",
        image:"/focusflouze.png"  
    },
    {
        id:6,
        description:"landing page d'un faux saas d'organisation digital",
        image:"/digitlab.png"
    },
]


function DesignCard({id, description, image, setSelect  }: DesignProps) {

    return (
        <>
        <div className=" lg:col-span-4 relative w-full aspect-[16/9] border-[1px] border-white rounded-[8px] "
        style={{ backgroundImage: `url(${image})`,
                backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
            }}
        >
          <div className=" hidden  lg:flex lg:flex-col items-center gap-[10px] justify-end py-[16px] px-[24px] transition-all duration-200 ease-in-out opacity-100 lg:opacity-0 lg:hover:opacity-100 absolute w-full h-full bg-gradient-to-b from-white/0 via-40% via-violet-500/40 to-violet-500">
                <p className="text-[16px] font-bold">{description}</p>
                <button onClick={() => setSelect(id)} className="flex rounded-[8px] border-[1px] border-white px-3 py-1">Aggrandir</button>
          </div>
                
        </div>
        
        </>
    )

}




   





export default function Home() {

        const [select, setSelect] = useState<number>(0)


    return(
        <>
        <div className=" h-auto bg-black grid  grid-cols-12 px-[32px] py-[32px] text-center ">
            <AnimScroll className="col-span-full mt-32 flex flex-col gap-[48px] ">
                <div className="flex flex-col gap-[32px] col-span-full">
            <p className="text-[32px] font-bold">Ma Galerie de Design</p>
            <p className="text-[16px] font-semibold">
                 Curieux de mes competences en Ui ou simplement chercheur de modele/exemple pour votre projet ?
                  voici la galerie de mes maquettes favorites</p>
                </div>
                <div className="lg:grid lg:grid-cols-12 lg:grid-rows-2 flex flex-col gap-[32px] lg:h-full">
                    {design.map((item, idx) => {
                        return (
                            <DesignCard key={item.description + idx} id={item.id} description={item.description} image={item.image} select={select} setSelect={setSelect} />
                        )
                    })
                
                    }

                    {
                        select && <div  className="z-50 w-full h-full fixed inset-0 flex flex-row items-center justify-center top-0 aspect-[16/9] gap-[32px]  bg-black/60 py-[32px] ">

                                   
                                   <button onClick={() => setSelect(prev => prev === 1 ? 6 : prev-1)} className=""> <Icone icone="weui:arrow-outlined" className="hidden text-white w-[128px] h-[64px] rotate-180" /></button>

                                    <div className="relative w-[80vw] max-w-4xl aspect-[16/9] rounded-[16px] overflow-hidden border border-white">
                                            {design.map(item => {
                                                return select === item.id &&  <Image
                                                            key={item.id}
                                                            src={item.image}
                                                            alt={item.description}
                                                            fill
                                                            sizes="80vw"
                                                            className="  object-cover"
                                                            priority={true}

                                                        />
                                            })}


                                  
                                  
                    

                    </div>
                    <button onClick={() => setSelect(prev => prev === 6 ? 1 : prev+1)}><Icone icone="weui:arrow-outlined" className="text-white w-[128px] h-[64px]" /></button>
                     <button onClick={() => setSelect(0)} className="justify-self-end self-start "><Icone icone="akar-icons:cross" className="  self-start    h-[48px] w-[48px]" /></button>
                    </div>}


                </div>

            </AnimScroll>

            
        </div>
        
        </>
    )
}

 