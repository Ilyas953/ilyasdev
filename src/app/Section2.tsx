
import {Card, SecondCard, Section, AnimScroll, Cardicon} from './components'




function CardDev1() {

    return (
        <>
        <Card className='w-full h-fit gap-12 lg:flex-row'>
            <div className='flex flex-row items-center gap-6'>
            <Cardicon icone='material-symbols:code' />
            <p className='text-2xl font-bold'>Developpement</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-8 w-full'>
            <SecondCard className='w-full gap-4'>
                     <Cardicon icone='mdi:react' />
                     <p className='font-semibold'>React</p>
                     <p className='text-[#808080]'>Maitrise: Avancee</p>
            </SecondCard>
             <SecondCard className='w-full gap-4'>
                     <Cardicon icone='ri:nextjs-fill' />
                     <p className='font-semibold'>next</p>
                     <p className='text-[#808080]'>Maitrise: Standard</p>
            </SecondCard>
             <SecondCard className='w-full gap-4'>
                     <Cardicon icone='mdi:tailwind' />
                     <p className='font-semibold'>TailwindCss</p>
                     <p className='text-[#808080]'>Maitrise: Avancee</p>
            </SecondCard>

            </div>
        </Card>
        </>
    )
}

function CardDev2() {

    return (
        <>
        <Card className='w-full  gap-12 lg:flex-row'>
            <div className='flex flex-row items-center gap-6'>
            <Cardicon icone='material-symbols:palette' />
            <p className='text-2xl font-bold'>UI/UX Design</p>
            </div>
            <div className='flex flex-col items-center gap-8 w-full lg:flex-row'>
            <SecondCard className='w-full gap-4'>
                     <Cardicon icone='solar:figma-bold' />
                     <p className='font-semibold'>Figma</p>
                     <p className='text-[#808080]'>Maitrise: Avancee</p>
            </SecondCard>
             <SecondCard className='w-full gap-4'>
                     <Cardicon icone='ic:baseline-smartphone' />
                     <p className='font-semibold'>Design Mobile</p>
                     <p className='text-[#808080]'>Maitrise: Avancee</p>
            </SecondCard>
             <SecondCard className='w-full gap-4'>
                     <Cardicon icone='ion:color-fill' />
                     <p className='font-semibold'>Regle de l&apos;UI</p>
                     <p className='text-[#808080]'>Maitrise: Avancee</p>
            </SecondCard>

            </div>
        </Card>
        </>
    )
}
export function Section2() {

    return (
        <>
        
        <Section className='bg-gradient-to-b from-[#8b5cf6] via-[#121212] to-[#121212] w-full  text-center '>
           <AnimScroll className='flex flex-col items-center gap-[48px] col-span-full '>
            <h2 className='font-bold text-3xl'>Mes Compétences Techniques et Créatives</h2>
            <div className=' w-full flex flex-col gap-[32px] lg:gap-[128px]'>
            <CardDev1 />
            <CardDev2 />
            </div>
           </AnimScroll>
        </Section>
        </>
    )
}