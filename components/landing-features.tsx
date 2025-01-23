'use client'
import { Home, Image, Settings, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'


export const LandingFeatures = () => {
  const features = [
    {
      icon: <Home className="w-12 h-12 text-purple-500" />,
      title: "Interior & Exterior Image Generation",
      description: "Dobijte ideje za dekoraciju za svaki kutak vašeg doma. Iznutra i spolja.",
    },
    {
      icon: <Image className="w-12 h-12 text-blue-400" />,
      title: "High-Quality Images",
      description: "Preuzmite slike generisane veštačkom inteligencijom u kristalno čistom kvalitetu.",
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      title: "Unlimited AI Ideas",
      description: "Koristite veštačku inteligenciju Spazio Unico da generišete neograničene AI ideje za svoj dom.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-400" />,
      title: "Fast Image Rendering",
      description: "Nabavite svoju prvu sliku generisanu veštačkom inteligencijom za 60 sekundi ili manje.",
    },
  ]

  const { isSignedIn } = useAuth()

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        {/* <h2 className="text-purple-600 font-medium mb-4">CARATTERISTICHE PRIME SUL MERCATO</h2> */}
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-purple-600">Naš program je sve što vam treba ! </span>
          <span className="text-gray-900">AI Opremi Me </span>
          {/* <span className="text-purple-600">Attrezzo</span> */}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-3">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
        Generišite redizajn veštačke inteligencije
        </Link>
        </Button>
      </div>
    </section>
  )
}

