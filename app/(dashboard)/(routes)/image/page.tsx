'use client'


import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Image as ImageIcon, Sliders, X } from 'lucide-react'
import Image from "next/image"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"; // Replace with your actual library

interface RoomDescription {
  image: string
  description: string
}


export default function ImagePage() {
  
  const [loadingnow, updateLoadingStatus] = useState(false); // Renamed setLoading to updateLoadingStatus
  const [progress, setProgress] = useState(0);

  // const handleClick = () => {
  //   updateLoadingStatus(true); // Use the new name here
  //   setProgress(0);

  //   const interval = setInterval(() => {
  //     setProgress((prevProgress) => {
  //       if (prevProgress >= 100) {
  //         clearInterval(interval);
  //         updateLoadingStatus(false); // Use the new name here
  //         return 100;
  //       }
  //       return prevProgress + 100 / 25; // Increment progress every second
  //     });
  //   }, 1000); // Update every second
  // };

  
  
  
  
  const [file, setFile] = useState<File | null>(null)
  const [prompt, setPrompt] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  
  const [preview, setPreview] = useState<string | null>(null)

  const rooms: RoomDescription[] = [
    // {
    //   image: "/bed.jpg?height=50&width=50",
    //   description: "Elegantno namještena Art Deco spavaća soba s king size krevetom s geometrijskom posteljinom, raskošnom foteljom od baršuna i noćnim ormarićem s ogledalom koji odražava raskoš sobe. Art Deco inspirirana umjetnička djela dodaju dašak glamura"
    // },
    {
      image: "/bedroom_2.jpg?height=50&width=100",
      description: "Spavaća soba koja odiše francuskim seoskim šarmom s mekim tapeciranim krevetom, zidovima ukrašenim tapetama s cvjetnim motivima i vintage drvenim ormarom."
    },
    {
      image: "/din.jpg?height=200&width=300",
      description: "Ugodna blagovaonica koja dočarava bit rustikalnog šarma sa čvrstim drvenim seoskim stolom u svojoj jezgri, okruženom eklektičnom mješavinom neusklađenih stolaca. Antikni ormarić služi kao statement komad, a atmosfera je toplo osvijetljena nizom otkačenih Edisonovih žarulja koje vise sa stropa"
    },
    {
      image: "/dinning.jpg?height=200&width=300",
      description: "Blagovaonica koja utjelovljuje modernu eleganciju, ukorijenjena elegantnim, minimalističkim blagovaonskim stolom uparenim s elegantnim suvremenim stolcima. Umjetničke svjetiljke stvaraju žarišnu točku na katu, dok okolni minimalistički dekor osigurava da prostor djeluje otvoreno, prozračno i potpuno moderno."
    },
    {
      image: "/imga1.jpg?height=200&width=300",
      description: "Glamurozna glavna spavaća soba iz razdoblja Hollywood Regency koja se može pohvaliti plišanim uzglavljem, namještajem s ogledalima koji odražava eleganciju, raskošnim tkaninama bogatih tekstura i raskošnim zlatnim detaljima za dašak raskoši"
    },
    {
      image: "/living2.jpg?height=200&width=300",
      description: "Živahan dnevni boravak s tropskom tematikom, upotpunjen udobnim namještajem od ratana, velikim lisnatim biljkama koje donose vani, svijetlim jastucima za dodavanje boje i roletama od bambusa za kontrolu prirodnog svjetla"
    },
    {
      image: "/livingg.jpg?height=200&width=300",
      description: "Prihvaćajući modernu estetiku iz sredine stoljeća, elegantna dnevna soba ima antikni stolić za kavu od tikovine u središtu, nadopunjen klasičnim sunčanim satom na zidu i udobnim tepihom pod nogama kako bi se stvorila topla i primamljiva atmosfera."
    }
  ]



  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    }
  };

 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    setFile(file)
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

 

  const removeImage = () => {
    setSelectedImage(null); // Clear the selected image from state
  };

  // Token for authentication (replace with actual token or fetch it securely)
  const AUTH_TOKEN = "EJNVCNK42QFNIQALCMNOLENFLQ3JNQLJ";  // Replace with the actual token

  // Function to translate the prompt
  async function translatePrompt(inputText: string): Promise<string> {
    if (!inputText) return '';

    const res = await fetch('/api/translate', {
      method: 'POST',
      body: JSON.stringify({
        q: inputText,
        source: 'sr',  // Assuming Slovenian prompt needs to be translated to English
        target: 'en',
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    return data.translatedText;  // Assuming your API returns the translated text here
  }

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    updateLoadingStatus(true); // Start loading animation
    setProgress(0); // Reset progress
  
    let interval: NodeJS.Timeout | null = null; // Declare interval variable
  
    if (!prompt || !selectedImage) {
      alert("Please provide both prompt and image");
      setLoading(false);
      updateLoadingStatus(false); // Stop loading animation
      return;
    }
  
    try {
      // Step 1: Translate the prompt
      const translatedPrompt = await translatePrompt(prompt);
      console.log("Translated Prompt:", translatedPrompt);
  
      // Step 2: Call API route to check API limit and subscription
      const response = await axios.post('/api/design');
  
      if (response.status !== 200) {
        if (response.status === 429) {
          // API limit reached, redirect to settings page
          window.location.href = "http://localhost:3000/settings";
        } else {
          alert(response.data.error || "Failed to verify checks");
        }
        setLoading(false);
        updateLoadingStatus(false); // Stop loading animation
        return;
      }
  
      // Step 3: Start progress animation
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval!); // Clear interval when progress reaches 100%
            updateLoadingStatus(false); // Stop loading animation
            return 100;
          }
          return prevProgress + 100 / 20; // Increment progress every second
        });
      }, 1000);
  
      // Step 4: Generate the image with the translated prompt
      const formData = new FormData();
      formData.append("prompt", translatedPrompt);
      formData.append("image", selectedImage);
  
      const imageResponse = await axios.post(
        `https://23f1-46-122-68-255.ngrok-free.app/generate_design/?prompt=${translatedPrompt}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${AUTH_TOKEN}`,
          },
          responseType: "blob",
        }
      );
  
      // Create a temporary URL for the generated image
      const imageUrl = URL.createObjectURL(imageResponse.data);
      setGeneratedImage(imageUrl);
    } catch (error: any) {
      console.error("Error generating design:", error);
  
      if (error.response?.status === 429) {
        // API limit reached, redirect to settings page
        window.location.href = "http://localhost:3000/settings";
      } else {
        alert("Porabili ste vse credite. Za nadalno uporabo nadgradite svojo naročnino.");
      }
    } finally {
      setLoading(false);
      updateLoadingStatus(false); // Ensure loading animation stops
      if (interval) clearInterval(interval); // Clear the interval if it's still running
    }
  };


  // Add this new function to handle example image selection
  const handleExampleImageSelect = async (imageUrl: string, description: string) => {
    try {
      // Handle image selection
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], 'example-room.jpg', { type: 'image/jpeg' });
      setSelectedImage(file);
      
      // Set the prompt text
      setPrompt(description);
    } catch (error) {
      console.error('Error loading example image:', error);
    }
  };

  const handleRoomTypeChange = (value: string) => {
    setPrompt((prev) => `${value}${prev ? `, ${prev}` : ""}`);
  };

  const handleDesignStyleChange = (value: string) => {
    setPrompt((prev) => `${prev}${prev ? `, ${value}` : value}`);
  };

 

return (
     <>
  <div className="p-5">
    <h1 className="text-3xl font-bold mb-6 ">Generator opreme za sobu</h1>
    <div className="space-y-2">
          <label className="block text-base font-medium text-gray-700 flex items-center gap-1">Tip Sobe</label>
          {/* <Select defaultValue="" onValueChange={handleRoomTypeChange}>
            <SelectTrigger className="w-full bg-[#0D0B14] border-0 text-white">
              <SelectValue placeholder="Select room type" />  */}
               <Select
    defaultValue=""
    onValueChange={(value) => setPrompt((prev) => `${value}, ${prev.split(',').slice(1).join(',')}`.trim())}
  >
     <SelectTrigger className="w-full bg-[#0D0B14] border-0 text-white">
              <SelectValue placeholder="Izaberite tip sobe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Dnevna Soba">Dnevna Soba</SelectItem>
              <SelectItem value="Spavaća soba">Spavaća soba</SelectItem>
              <SelectItem value="Kuhinja">Kuhinja</SelectItem>
              <SelectItem value="Trpezarija">Trpezarija</SelectItem>
              <SelectItem value="Dečija soba">Dečija soba</SelectItem>
              <SelectItem value="Kancelarija">Kancelarija</SelectItem>
              </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 mt-4">
          <label className="block text-base font-medium text-gray-700 flex items-center gap-1">Dizajn Sobe</label>
          {/* <Select defaultValue="" onValueChange={handleDesignStyleChange}> */}
          <Select
    defaultValue=""
    onValueChange={(value) =>
      setPrompt((prev) => {
        const [roomType] = prev.split(','); // Extract the room type
        return `${roomType}, ${value}`.trim(); // Combine room type with new design style
      })
    }
  >
            <SelectTrigger className="w-full bg-[#0D0B14] border-0 text-white">
              <SelectValue placeholder="Izaberite tip stila" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moderan stil, elegantne linije, neutralni tonovi, geometrijski oblici, minimalna dekoracija doma, monohrom, bela, bež, siva, crna, drvo, staklo, metalni akcenti.">
              Moderne
              </SelectItem>
              <SelectItem value="svetli drveni podovi, prijatan tekstil, prigušeni pastelni tonovi, minimalistički nameštaj, funkcionalni dekor, prirodno svetlo, zeleni akcenti, meki beli zidovi, vuneni tepisi i jednostavan drveni nameštaj.">
              Skandinavski spokoj
              </SelectItem>
              <SelectItem value="izloženi zidovi od cigle, betonski podovi, čelične armature, otvorene police, neutralne sive, topli tonovi drveta, osvetljenje inspirisano starinom, kožni nameštaj, crni akcenti i veliki prozori">
              Industrijski šik
              </SelectItem>
              <SelectItem value="retro inspirisan nameštaj, sužene drvene noge, smeli geometrijski uzorci, akcenti živih boja, topli tonovi drveta, veliki prozori, minimalistički dekor, meki tekstil i elegantno osvetljenje.">
              Moderna sredinom veka
              </SelectItem>
              <SelectItem value="eklektičan nameštaj, slojeviti tekstil, akcenti makramea, zemljani tonovi, toplo osvetljenje, tkani tepisi, prirodni materijali, nisko sedenje, jastuci sa šarama i biljke u saksiji.">
              Bohemiska energija
              </SelectItem>
              <SelectItem value="sjajna završna obrada, prepoznatljivo osvetljenje, elegantan nameštaj, monohromatska paleta, vrhunski materijali, plišani tekstil, suptilni metali, čiste linije i apstraktna umetnička dela.">
              Modern Luke
              </SelectItem>
              <SelectItem value="neutralna paleta boja, nameštaj niskog profila, prirodno drvo, meke teksture, čiste linije, toplo osvetljenje, funkcionalni dekor, tatami, jednostavna keramika i osećaj mira.">
              Japanski minimalizam
              </SelectItem>
              <SelectItem value="nameštaj od drveta u nevolji, zidovi od lajsne, neutralni tonovi, meki tekstil, udobni tepisi, starinski dekor, otvorene police, prirodno svetlo, vrata štale i osvetljenje u vintage stilu.">
              Rustikalna seoska kuća
              </SelectItem>
              <SelectItem value="otvoreni tlocrt, visoki plafoni, veliki prozori, sirovine poput cigle i betona, moderan nameštaj, neutralni tonovi, crni metalni akcenti, minimalistički dekor i smela umetnička dela.">
              Urbano potkrovlje
              </SelectItem>
              <SelectItem value="bujno zelenilo, prirodno drvo, nameštaj od ratana, živopisni uzorci, meki beli zidovi, umetnička dela sa tropskom tematikom, toplo osvetljenje, prozračne zavese i akcenti od bambusa.">
              Tropsko povlačenje
              </SelectItem>
              <SelectItem value="Nežna plava, peščano-bež, beljeno drvo, prirodne teksture, lagane tkanine, nautički dekor, pletene korpe, vazdušne zavese, akcenti od naplavljenog drveta i puno prirodnog svetla.">
              Primorski mir
              </SelectItem>
              </SelectContent>
          </Select>
        </div>
    <form onSubmit={handleSubmit} className="mb-6 grid  ">
      <div className="space-y-2 mt-4">
        <label className="block text-base font-medium text-gray-700 ">Dizajn teksta:</label>
       
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Opišite svoje preferencije dizajna"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      {/* <div>
        <p>Primer:</p>
    <p className="block text-sm font-medium text-gray-700 ">Elegantno opremljena spalnica v slogu Art Deco z veliko zakonsko posteljo in zrcalno nočno omarico, ki odraža razkošje sobe. Umetniška dela, navdihnjena z Art Deco, dodajo pridih glamurja. </p>
        
   </div> */}
     
 
    </form>
    </div>
    <div className="h-full w-full max-w-6xl mx-auto p-4 pb-20">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Card 1: Upload Image (Inside Form) */}
    <Card className="h-90 flex flex-col">
      <form onSubmit={handleSubmit} className="h-full flex flex-col justify-between">
        <CardContent className="p-4 h-full flex flex-col justify-between">
          {selectedImage ? (
            <div className="relative h-full">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center h-full cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <Upload className="w-12 h-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Umetnite sliku sobe</p>
              <p className="text-sm text-gray-400 mt-2">- ili -</p>
              <p className="text-sm text-blue-500">Kliknite i prikvačite sliku sobe</p>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
          )}
               <button
  type="submit"
  disabled={loading}
  className={`mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
    loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
  }`}
>
  {loadingnow ? `Generiranje, pričekajte ... ${Math.round(progress)}%` : 'Generisati'}
</button>
        </CardContent>
      </form>
    </Card>

    {/* Card 2: Generated Image Output */}
    <Card className="h-90 flex flex-col">
      <CardContent className="p-4 h-full flex flex-col justify-between">
        {generatedImage ? (
          <div className="h-full flex flex-col">
            <img
              src={generatedImage}
              alt="Generated Design"
              className="w-full h-full object-cover rounded-lg"
            />
            <a
              href={generatedImage}
              download="generated_image.jpg"
              className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Preuzmi sliku
            </a>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg h-full flex items-center justify-center">
            <p className="text-sm text-gray-500">Generirana slika</p>
          </div>
        )}
      </CardContent>
    </Card>
  </div>
</div>
<div className="container mx-auto p-4">
      <h1 className="text-xl  mb-6">Opći primjeri:</h1>
      {/* <ScrollArea className="h-[800px] rounded-lg border p-4"> */}
        {rooms.map((room, index) => (
          <Card key={index} className="mb-4">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Image
                  src={room.image}
                  alt={`Room design ${index + 1}`}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full md:w-1/6"
                />
                <div className="w-full md:w-2/3">
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <Button 
                    onClick={() => handleExampleImageSelect(room.image, room.description)}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Isprobajte ga
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      {/* </ScrollArea> */}
    </div>
   
</>
  );
}