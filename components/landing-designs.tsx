import Image from "next/image"

export const LandingDesgns = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="text-center mb-16 space-y-4">
        <p className="text-purple-600 font-medium">URADITE TO ZA SEKUNDE UMJESTO DANA</p>
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-purple-600">Opremi Me u jednom prostoru je za </span>
          <span className="text-white">Vlasnici kuća i profesionalci</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Personal Use Section */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/for-whom-1.png"
              alt="Person using home design app on mobile phone"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            Lična upotreba <span className="text-purple-600">01</span>
            </h2>
            <p className="text-zinc-400">
            Otkrijte  <span className="text-purple-600">stil dekoracije</span> koji odgovara vašim željama i
            generišite neograničene kreativne i realistične koncepte za unutrašnje i spoljašnje prostore vašeg doma.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Home decoration AI",
              "AI kućni nameštaj",
              "Uradi sam kućne dekoracije",
              
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm hover:bg-purple-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Professional Use Section */}
        <div className="space-y-6">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/for-whom-2.png"
              alt="Professional working at desk with laptop"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
            Profesionalna upotreba <span className="text-blue-400">02</span>
            </h2>
            <p className="text-zinc-400">
            Ostavite odličan prvi utisak na potencijalne klijente pokazujući im koliko vaš rad može da uradi{" "}
              <span className="text-blue-400">poboljšajte svoj dom i uštedite vreme</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Dizajner enterijera",
              "Architects",
              "Kućni graditelji",
              "Agencije za nekretnine",
              "Proizvođači nameštaja",
              "Preduzetnici",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 text-blue-400 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

