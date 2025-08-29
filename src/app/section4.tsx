import {Bouton, Section, AnimScroll, Icone, Bouton2} from "./components"

export function Section4() {

    return (
        <>
        <Section id="contact" className=" contact h-[100vh] w-full bg-gradient-to-t lg:bg-gradient-to-r from-violet-500/80 via-[#121212] via-20% to-[#121212]">
            <AnimScroll className="col-span-full flex flex-col items-center gap-[64px] text-center lg:row-start-2 mb-20">
                <div className="flex flex-col gap-[48px] lg:row-start-3">
                    <p className="text-[32px] font-bold">Entrons en Contact !</p>
                    <p className="text-[24px] font-semibold">Vous avez un projet ou une idée ? n&apos;hésitez pas a me contacter !</p>
                </div>
                <div className="w-full lg:w-auto flex flex-col gap-[48px]">

                    <a href="mailto:liaysdev@gmail.com?subject=Demande%20de%20site%20web&body=Bonjour%20Ilyas,%0AJe%20souhaite%20discuter%20avec%20toi%20pour%20la%20création%20d%27un%20site%20web.%0AVoici%20quelques%20détails%20:%0A">
                        <Bouton className="w-full  justify-center">
                        <Icone icone="material-symbols:mail" className="text-white w-[32px] h-[32px]" />
                        <p className="text-[24px]">liaysdev@gmail.com</p>
                    </Bouton></a>
                    <a href="https://www.linkedin.com/in/ilyas-benamara-522bb4380" target="_blank"><Bouton className="w-full justify-center">
                          <Icone icone="mdi:linkedin" className="text-white w-[32px] h-[32px]" />
                        <p className="text-[24px]">linkedin</p></Bouton></a>


                   <a href="https://discord.gg/dsrn74yuFK" target="_blank"> <Bouton2 className="w-full justify-center">
                          <Icone icone="ic:baseline-discord" className="text-violet-500 w-[32px] h-[32px]" />
                        <p className="text-[24px]">Discord</p></Bouton2></a>

                </div>

            </AnimScroll>
        </Section>
        </>
    )
}