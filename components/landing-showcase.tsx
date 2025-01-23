import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export const LandingShowcase = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-24">
      {/* Fill The Room Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#7C3AED]">Napunite sobu</span> <span className="text-white">sa nameštajem i dekoracijama</span>
          </h2>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-white">Mobili e Decorazioni</h3> */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Da li ste se ikada zapitali kako bi vaš dom izgledao sa nameštajem koji želite? Fill The Room omogućava AI da pruži bilo šta
            tip sobe. Možete isprobati različite konfiguracije dok ne pronađete savršenu. Ukrasite praznu sobu sa
            nameštaj sa HomeDesignsAI. Radovi za gradnju ili prazne prostore.
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/roomgo1.png"
              alt="Empty room with white walls and wooden flooring"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </CardContent>
        </Card>
      </section>

      {/* Decor Staging Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/roomgo2.png"
              alt="Modern room with purple sofa and industrial shelving"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </CardContent>
        </Card>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#7C3AED]">Postavljanje nameštaja</span> <span className="text-white">i Vitrina nameštaja</span>
          </h2>
          {/* <h3 className="text-3xl md:text-4xl font-bold text-white">Vetrina di mobili</h3> */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Izložite svoj nameštaj i dekoracije u mnogim stilovima pomoću Decor Staging. Možete videti kako bi vaše stvari izgledale
            pogledajte sve vrste različitih dizajna, kao profesionalni dekorater. Izložite bilo koji nameštaj ili druge predmete
            objekata.
          </p>
        </div>
      </section>
    </div>
  )
}

