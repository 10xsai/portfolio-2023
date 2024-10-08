import { SocialIcons } from './../components/SocialIcons'
import { MainHeader } from '../components/MainHeader'
import React, { useEffect, useRef } from 'react'
import type { NextPage } from 'next'
// import useSWR from 'swr'

import NavBar from '../components/NavBar'
import styles from '../styles/mainheader.module.scss'
import IconsComponent from 'components/IconsComponent'
import BreakComponent from 'components/BreakComponent'
import ProjectsComponent from 'components/projects/ProjectsComponent'
import MessageComponent from 'components/message/MessageComponent'
import { Footer } from 'components/Footer'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  const seoTitle = 'Portfolio | Sai Krishna'
  const seoDesc = 'I am full stack developer'
  const parentRef = useRef(null)

  const scrollFunction = () => {
    /*  @ts-ignore */
    parentRef.current.scrollIntoView()
  }

  // const fetcher = (url: RequestInfo | URL) => fetch(url).then(r => r.json())
  // const { data } = useSWR('/api/spotify', fetcher)
  // console.log(data)

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://10xsai.com`,
          description: seoDesc,
          site_name: 'Portfolio | Sai Krishna',
          images: [{ url: 'http://localhost:3000/api/og', width: 800, height: 400, alt: 'Sai Krishna | Full Stack Developer' }],
          type: 'website',
          locale: 'en_IN',
        }}
      />

      <main className={styles.header_container}>
        <NavBar />
        <MainHeader />
        <SocialIcons scrollFunction={scrollFunction} />
        <BreakComponent marginTop="4rem" />
        <IconsComponent />
        <ProjectsComponent />
        <BreakComponent marginTop="2rem" />
        {/* <MessageComponent ref={parentRef} /> */}

        <Footer />
      </main>
    </>
  )
}

export default Home
