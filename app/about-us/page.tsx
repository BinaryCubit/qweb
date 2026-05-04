import { AboutHero } from '@/components/about/hero'
import { Pedagogy } from '@/components/about/pedagogy'
import { StandFor } from '@/components/about/standfor'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


export default function AboutUs() {
    return (
        <>
            <Header />
            <AboutHero />
            <StandFor />
            <Pedagogy />
            <Footer />
        </>

    )
}
