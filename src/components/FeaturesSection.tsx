'use client'
import React, { useState } from 'react'
import HeaderText from './HeaderText'
import HeaderTitle from './HeaderTitle'
import FeaturesLink from './FeaturesLink'
import Image from 'next/image'
import Banner1 from '@/static/images/illustration-features-tab-1.svg'
import Banner2 from '@/static/images/illustration-features-tab-2.svg'
import Banner3 from '@/static/images/illustration-features-tab-3.svg'
import BtnMoreInfo from './BtnMoreInfo'

const FeaturesSection = () => {
    const [screen, setScreen] = useState<1 | 2 | 3>(1)

    return (
        <section className='flex flex-col items-center md:w-full md:relative'>
            <article className='w-[85%] flex flex-col items-center justify-center mt-28 lg:mt-44'>
                <HeaderTitle title='Features' center={true}/>
                <HeaderText text='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.' center={true}/>
                <div className='flex border-t border-t-[#9194A1] flex-col w-full mt-10 md:flex-row md:justify-between md:border-t-transparent md:max-w-[600px] lg:max-w-[700px]'>
                    <FeaturesLink title='Simple Bookmarking' show={screen === 1 ? true : false} setScreen={setScreen} nr={1}/>
                    <FeaturesLink title='Speedy Searching' show={screen === 2 ? true : false} setScreen={setScreen} nr={2}/>
                    <FeaturesLink title='Easy Sharing' show={screen === 3 ? true : false} setScreen={setScreen} nr={3}/>
                </div>
            </article>
            <section className='flex flex-col items-center justify-center mt-28 md:flex-row md:items-start md:mt-24 md:w-[85%]'>
                <article className='w-full items-center justify-center relative -z-10 flex md:absolute md:justify-start md:w-[100%] lg:max-w-[1440px]'>
                    <div className='clipPathFeatures'></div>
                    {screen === 1 
                    ? <Image src={Banner1} alt='Banner One' className='relative bottom-10 w-[85%] md:w-[35%] md:max-w-[400px] md:left-10 lg:max-w-[520px] lg:w-[45%] xl:left-[6%] 2xl:max-w-[570px]'/>
                    : screen === 2 ? <Image src={Banner2} alt='Banner Two' className='relative bottom-10 w-[85%] md:w-[35%] md:max-w-[400px] md:left-10 lg:max-w-[410px] lg:bottom-0 lg:left-[13%] lg:w-[45%] xl:left-[16%] 2xl:max-w-[490px]'/>
                    : screen === 3 ? <Image src={Banner3} alt='Banner Three' className='relative bottom-10 w-[85%] md:w-[35%] md:max-w-[400px] md:left-10 lg:max-w-[410px] lg:bottom-0 lg:left-[13%] lg:w-[45%] xl:left-[16%] 2xl:max-w-[490px]'/> : null}
                </article>
                <article className='w-[85%] flex flex-col items-center justify-center mt-10 md:mt-0 md:items-end md:justify-end md:w-full lg:max-w-[1200px]'>
                    <div className='flex flex-col w-full md:w-[350px] xl:w-[530px]'>
                        {screen === 1 
                        ? <HeaderTitle title='Bookmark in one click' center={false}/>
                        : screen === 2 ? <HeaderTitle title='Intelligent search' center={false}/>
                        : screen === 3 ? <HeaderTitle title='Share your bookmarks' center={false}/> : null}
                        {screen === 1 
                        ? <HeaderText text='Organize your bookmarks however yo like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.' center={false}/>
                        : screen === 2 ? <HeaderText text='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.' center={false}/>
                        : screen === 3 ? <HeaderText text='Easily share your bookmarks and collections with others. Create a shearable link that you can send at the click of a button.' center={false}/>: null}
                        <div className='flex items-center w-full justify-center mt-12 md:justify-start md:mt-7'>
                            <BtnMoreInfo/>
                        </div>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default FeaturesSection