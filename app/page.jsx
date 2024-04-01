import Image from "next/image";
import Cards from "./components/Cards";
export default function Home() {
  return (
    <div>
      <main className="flex grid grid-cols-1 justify-center md:flex  z-[-1]">
        <div className="hidden md:flex relative md:grid md:grid-cols-1">
          <Image src="/Banner.png" width={1920} height={727} alt="banner" />
          <Image
            className="md:flex absolute top-0 right-0 mt-10 mb-12 mr-28"
            src="/offert.png"
            width={439}
            height={437}
            alt="offer"
          />
          <div className="hidden md:flex">
            <Cards
              info={[
                {
                  title: "Citrate Mag",
                  data: "240 Cápsulas | 800 Mg ",
                  price: "$273.00",
                  discount: "$134",
                },
                {
                  title: "Citrate Mag",
                  data: "240 Cápsulas | 800 Mg ",
                  price: "$273.00",
                  discount: "$134",
                },
                {
                  title: "Citrate Mag",
                  data: "240 Cápsulas | 800 Mg ",
                  price: "$273.00",
                  discount: "$134",
                },
                {
                  title: "Citrate Mag",
                  data: "240 Cápsulas | 800 Mg ",
                  price: "$273.00",
                  discount: "$134",
                },
              ]}
            />
          </div>
        </div>

        <div className="md:hidden z-[-2]">
          <Image
            className=""
            src="/Banner.png"
            width={330}
            height={330}
            alt="banner"
          />
        </div>
        <div className="bg-zinc-100 pt-5 pb-5 z-[-2] md:hidden">
          <Image src="/offert.png" width={300} height={200} alt="Offertas" />
        </div>
        <div className="md:hidden">
          <Cards
            info={[
              {
                title: "Citrate Mag",
                data: "240 Cápsulas | 800 Mg ",
                price: "$273.00",
                discount: "$134",
              },
              {
                title: "Citrate Mag",
                data: "240 Cápsulas | 800 Mg ",
                price: "$273.00",
                discount: "$134",
              },
              {
                title: "Citrate Mag",
                data: "240 Cápsulas | 800 Mg ",
                price: "$273.00",
                discount: "$134",
              },
              {
                title: "Citrate Mag",
                data: "240 Cápsulas | 800 Mg ",
                price: "$273.00",
                discount: "$134",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}
