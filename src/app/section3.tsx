import {Card,  Section, AnimScroll,  Bouton, Glow} from './components'
import Link from 'next/link'



const Projet = [
    {
        
        titre: "ZenCoach",
        description: "landing page pour un coach sportif fictif, mon premier reel projet",
        image: "/ZenPage.png",
        stack: "react, nextjs, tailwind, figma",
        lien: "https://zencoach3.netlify.app"
    },

     {
        titre: "Les Piliers",
        description: "Les piliers est un Saas de developpement personnel avec un dashboard, une todo list et une liste d'objectif ",
        image: "/EnCours.png",
        stack: "react, nextjs, tailwind, figma",
        lien: ""
    },

     {
        titre: "FindMyAi",
        description: "FindMyAi est un outil web avec un chat ia integre te permettant de trouver l'ia adapte a ton besoin ",
        image: "/EnCours.png",
        stack: "react nextjs tailwind figma",
        lien: ""
    }
]


type PortraitProps = {
    image: string,
    titre: string,
    description: string,
    lien?:string
    stack:string
}

function PortraitCard({image, titre, description, stack, lien}: PortraitProps) {

    function Description() {

        return (
        <div className=' w-full flex flex-col text-xl items-center text-center gap-6 '>
            <p className='text-[32px] font-bold'>{titre}</p>
            <p>stack utilise : {stack}</p>
            <p className='text-[#808080]  '>{description}</p>
        </div>
        )
    }



    return (
        <>
        <Card className=' lg:col-span-4 gap-8 h-[649px] lg:h-[577px]'> 
        <div className={` relative rounded-[24px] top-0 h-[40%] w-full   `}
             style={{ backgroundImage: `url(${image})`,
                backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
            }}
        > <Glow className='w-full h-full absolute rounded-[24px] bg-gradient-to-b from-violet-500/0 via-violet-500/10 to-violet-500/80'> </Glow></div>
        <Description />
        <Bouton>{ lien ? <a href={lien} target='_blank'>Voir le Projet</a>: "En Cours"}</Bouton>
        </Card>
        </>
    )
}

function Projects() {

    return (
        <>
        <div className=' flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center'>
            {
                Projet.map((proj , idx) => {
                    return (
                        <PortraitCard key={proj.titre +idx} titre={proj.titre} image={proj.image} description={proj.description} stack={proj.stack} lien={proj.lien} />
                    )
                })

            }
        </div>
        </>
    )
}

export function Section3() {

    return(
        <>
        <Section id="projet" className=' bg-gradient-to-r from-violet-500 via-[#121212] via-40% to-[#121212] text-center lg:pb-[48px]   '>
            <AnimScroll className=' col-span-full flex flex-col items-center gap-[32px] '>
                <p className='font-bold text-[32px]'>Mes Projets et Creations</p>
        <Projects />
        <p className='font-semibold text-[32px]'>Mes Designs</p>
        <Bouton className='mb-10' ><Link href='/desogm' className='text-[20px]'>Voir Ma Galerie de Design</Link></Bouton>
        </AnimScroll>
        </Section>
        </>
    )
}