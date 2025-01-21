


'use client'
import Image from 'next/image'

import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import TypewriterComponent from 'typewriter-effect'
import Script from "next/script";
import { Button } from '@/components/ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <>
      <head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-7RQ6ZCJCS1`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7RQ6ZCJCS1', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      </head>
    <div className="text-white font-bold py-32 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Opremite svoj dom iz snova</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                'Luksuzno.',
                'Estetski.',
                'Funkcionalan.',
                'Moderno.',
                'Minimalistički.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="text-sm md:text-xl font-light text-zinc-400">
      U samo dva klika i uz pomoć umjetne inteligencije pretvorite svoje ideje u profesionalne interijere.
      </div>

      <div className="">
        <Button
          variant="premium"
          className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          asChild
        >
          <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          Generirajte besplatno
          </Link>
        </Button>
      </div>

      {/* <div className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
   
    </>
  )
}
