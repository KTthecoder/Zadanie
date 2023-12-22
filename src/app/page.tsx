import HeroImg from '@/static/images/illustration-hero.svg'
import Image from 'next/image'
import { Rubik } from 'next/font/google'
import ExtensionBlock from '@/components/ExtensionBlock'
import ChromeIcon from '@/static/icons/logo-chrome.svg'
import FirefoxIcon from '@/static/icons/logo-firefox.svg'
import OperaIcon from '@/static/icons/logo-opera.svg'
import HeaderTitle from '@/components/HeaderTitle'
import HeaderText from '@/components/HeaderText'
import FaqItem from '@/components/FaqItem'
import FeaturesSection from '@/components/FeaturesSection'
import BtnMoreInfo from '@/components/BtnMoreInfo'

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function Home() {
  return (
    <section className={`${rubik.className} flex flex-col items-center pt-24 lg:pt-36`}>
      <section className='flex flex-col items-center justify-center md:flex-row-reverse md:w-full md:relative'>
        <article className='w-full items-center justify-center relative -z-10 flex md:absolute md:justify-end lg:max-w-[1440px]'>
          <div className='clipPath'></div>
          <Image src={HeroImg} alt='Hero Banner' className='relative md:w-[40%] md:max-w-[400px] bottom-10 md:bottom-0 lg:max-w-[600px] lg:w-[50%] xl:right-[2%]'/>
        </article>
        <article className='w-[85%] flex flex-col items-center justify-center mt-5 md:items-start md:w-[85%] lg:max-w-[1200px]'>
          <div className='flex flex-col w-full md:w-[350px] xl:w-[500px]'>
            <HeaderTitle title='A Simple Bookmark Manager' center={false}/>
            <HeaderText text='A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.' center={false}/>
            <div className='flex justify-center w-full mt-5 md:justify-start'>
              <button className={`rounded-md bg-[#5368DF] text-sm px-3 py-3 font-medium mr-3 btnShadow transitionText border-[#5368DF] md:hover:border-2 md:hover:bg-[#fff] md:hover:text-[#5368DF] border-2 box-content text-[#fff]`}>Get it on Chrome</button>
              <button className={`rounded-md bg-[#fff] text-sm px-3 py-3 font-medium mr-3 btnShadow transitionText border-[#fff] md:hover:border-2 md:hover:border-[#404146] md:hover:bg-[#fff] md:hover:text-[#404146] border-2 box-content text-[#404146]`}>Get it on Firefox</button>
            </div>
          </div>
        </article>
      </section>
      <FeaturesSection/>
      <section className='flex flex-col items-center justify-center mt-28 lg:mt-44'>
        <article className='w-[85%] flex flex-col items-center justify-center mt-10 lg:mt-36'>
          <HeaderTitle title='Download the extension' center={true}/>
          <HeaderText text="We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize." center={true}/>
        </article>
        <article className='flex flex-col mt-14 lg:flex-row lg:items-start'>
          <ExtensionBlock icon={ChromeIcon} title='Chrome' version='62' nr={1}/>
          <ExtensionBlock icon={FirefoxIcon} title='Firefox' version='55' nr={2}/>
          <ExtensionBlock icon={OperaIcon} title='Opera' version='46' nr={3}/>
        </article>
      </section>
      <section className='flex flex-col items-center md:w-[500px]'>
        <article className='w-[85%] flex flex-col items-center justify-center mt-28 md:w-full'>
          <HeaderTitle title='Frequently Asked Questions' center={true}/>
          <HeaderText text="Here are some of our FAQs. If you have any other questions you'd like answered please fell free to email us." center={true}/>
        </article>
        <section className='flex flex-col mt-10 w-[85%] md:w-full lg:w-[600px]'>
          <FaqItem title='What is Bookmark?' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A erat nam at lectus urna duis convallis. Tellus in hac habitasse platea. Vitae justo eget magna fermentum. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Vitae tortor condimentum lacinia quis.'/>
          <FaqItem title='How can I request a new browser?' text='Convallis a cras semper auctor. A arcu cursus vitae congue mauris rhoncus aenean vel. Magna sit amet purus gravida quis. Facilisi morbi tempus iaculis urna. Gravida arcu ac tortor dignissim convallis aenean. Quam quisque id diam vel.'/>
          <FaqItem title='Is there a mobile app?' text='Vitae purus faucibus ornare suspendisse sed nisi lacus. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Nisi vitae suscipit tellus mauris a diam maecenas sed. Ut consequat semper viverra nam. Leo vel orci porta non pulvinar neque. Felis donec et odio pellentesque diam volutpat commodo sed egestas.'/>
          <FaqItem title='What about other Chrominium browsers?' text='Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Habitasse platea dictumst vestibulum rhoncus.'/>
          <div className='flex items-center w-full justify-center mt-12'>
            <BtnMoreInfo/>
          </div>
        </section>
      </section>
    </section>
  )
}
