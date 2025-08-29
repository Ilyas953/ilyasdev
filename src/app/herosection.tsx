import {Bouton, AnimScroll, SecondBouton, Section} from "./components"

 
function HeroTitre() {
    return (
        <div className="flex flex-col gap-8 items-center">
                <h1 className=" text-[32px] lg:text-[48px] font-bold">Bonjour je suis Ilyas, Développeur web frontend et Web Designer</h1>
                <p className="text-2xl text-[#808080] font-semibold">Spécialisé dans la création de Landing Page et Dashboard Pro, Moderne et Responsive</p>
        </div>
    )
}

function HeroBouton() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 text-2xl">
           <a href="#contact"> <Bouton> Lancer Votre Projet</Bouton></a>
            <a href="#projet"><SecondBouton> Voir mes Creations</SecondBouton></a>
        </div>
    )
}

export function HeroSection() {

    return (
        <>
        <Section className="  bg-gradient-to-b from-[#1e1e1e] via-[#1e1e1e] via-60% to-[#8b5cf6]/80 grid-rows-5 lg:grid-rows-12 ">
        <AnimScroll className="flex flex-col items-center col-span-full lg:col-span-10 row-start-2 lg:col-start-2 lg:row-start-4 mb-10 text-center gap-12 ">
            <HeroTitre />
            <HeroBouton />
        </AnimScroll>
        </Section>
        </>
    )
}

