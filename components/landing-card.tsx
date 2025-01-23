import { Users, MessageCircle, Layout, HardHat, Home, TreePine, Upload, MousePointer, Wand2 } from "lucide-react"
import { IconCard } from "@/components/icon-card"
import { StepCard } from "@/components/step-card"

export const LandingCard = () => (
  
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Brzo i lako{" "}
            <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">
            Unutrašnja AI tehnologija
            </span>
          </h1>

          {/* User Groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12 ">
            <IconCard icon={Users} title="VI, VAŠA PORODICA, VAŠI PRIJATELJI" />
            <IconCard icon={MessageCircle} title="ONLINE ZAJEDNICA" />
            <IconCard icon={Layout} title="DIZAJNER ENTERIJERA" />
            <IconCard icon={HardHat} title="ARHITEKTE, KUĆOGRADITELJI" />
            <IconCard icon={Home} title="AGENCIJE ZA NEKRETNINE" />
            <IconCard icon={TreePine} title="PEJZAŽI, BAŠTANI" />
          </div>
        </section>

        {/* How to Use Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-violet-600 font-semibold">LAKO JE DIZAJNIRANJE VAŠEG DOMA UZ AI</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
            Kako koristiti Opremi Me u <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">3 jednostavna koraka</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number={1}
              icon={Upload}
              title="Upload"
              description="Otpremite svoju sliku bilo koje vrste sobe"
            />
            <StepCard
              number={2}
              icon={MousePointer}
              title="Customize"
              description="Prilagodite tip sobe, prilagođena uputstva, način dizajna i stil"
            />
            <StepCard
              number={3}
              icon={Wand2}
              title="Generate"
              description="Generišite nove ideje za ukrašavanje i dizajn za nekoliko sekundi"
            />
          </div>
        </section>
      </main>
    </div>
  )


