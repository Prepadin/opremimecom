
import { Button } from "@/components/ui/button"
import Image from "next/image";

export const LandingTutos = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
          Snimite fotografiju i redizajnirajte svoj enterijer za nekoliko sekundi koristeći veštačku inteligenciju
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
          Da li želite da transformišete svoj dom iznutra? Naša prelepa Opremi Me unutrašnja AI funkcija je ovde
          pomoći. Omogućava vam da renovirate svoj prostor u različitim stilovima, osiguravajući da izgleda spektakularno. Možete redizajnirati
          unutrašnjost sa lakoćom.
          </p>
          {/* <Button size="lg" className="bg-[#6C5CE7] hover:bg-[#5A4BD1]">
            Inizia Subito
          </Button> */}
        </div>
        {/* <div className="aspect-[4/3] w-full"> */}
          {/* <BeforeAfterSlider
            beforeImage="@/images/room4.jpg"
            afterImage="@/images/room4lux.png"
          /> */}
             <div className="aspect-[4/3] w-full relative overflow-hidden"  >
          <Image
            src="/roomgo.png"
            width={400}
            height={200}
            alt="Before redesign"
            className="object-cover"
            objectFit="cover"
            priority
          />
          </div>
      </div>
      <div className="text-center mb-16 space-y-12">
        {/* <p className="text-purple-600 font-medium">FALLO IN SECONDI INVECE DI GIORNI</p> */}
        <h1 className="text-4xl md:text-5xl font-bold ">
          <span className="text-purple-600">Opremi Me može pomoći vama i vašoj kompaniji da uštedite novac </span>
          <span className="text-white">Vreme i novac. Počnite danas.</span>
        </h1>
      </div>
    </section>
  )
}

