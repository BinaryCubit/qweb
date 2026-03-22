import React from 'react'
import SubNav from '@/components/SubNav'
import { AboutHero } from '@/components/about/hero'
import { Pedagogy } from '@/components/about/pedagogy'
import { StandFor } from '@/components/about/standfor'
import Footer from '@/components/Footer'


export default function AboutUs() {
    return (
        <>
            <SubNav />
            <AboutHero />
            <StandFor />
            <Pedagogy />
            <Footer />
        </>

    )
}
