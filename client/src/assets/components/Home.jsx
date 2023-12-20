import { Link } from "react-router-dom";
import Footer from "./Footer";
import Campaigns from "./Campaigns";

export default function Home() {
  return (
    <div className="container flex flex-col justify-center mx-auto">
      {/* <div className='flex flex-row justify-center p-7'>
        <img src="/img/SocialCasual2020son.png" className='object-contain' alt="socialcasual" />
      </div> */}

      <div className=" flex flex-row justify-center p-7 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

        <img className="rounded-t-lg" src="/img/SocialCasulsonhal.png" alt="" />

      </div>

      {/* <div className=" flex flex-col justify-center p-1 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">
        <div className="text-white text-3xl text-center p-5 font-bold">KAMPANYALAR</div>
      </div> */}
      <Campaigns/>

      <div className='grid grid-cols-2 gap-4'>

        {/* KAHVALTI */}
        <Link to={"/specificmenu/kahvalti"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/kahvaltı.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">KAHVALTI</h5>

          </div>
        </Link>
        {/* KAHVALTI */}

        {/* SICAK BAR */}
        <Link to={"/specificmenu/sicakbar"} className=" bg-white border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/sıcakbar.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">SICAK BAR</h5>

          </div>
        </Link>
        {/* SICAK BAR */}


        {/* BAŞLANGIÇLAR */}
        <Link to={"/specificmenu/baslangiclar"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/başlangıçlar.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">BAŞLANGIÇLAR</h5>

          </div>
        </Link>
        {/* BAŞLANGIÇLAR */}

        {/* ALKOLSUZ İÇECEKLER */}
        <Link to={"/specificmenu/alkolsuzicecekler"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/alkolsuzicecekler.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">ALKOLSÜZ İÇECEKLER</h5>

          </div>
        </Link>
        {/* ALKOLSUZ İÇECEKLER */}

        {/* ANA YEMEK */}
        <Link to={"/specificmenu/anayemek"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/anayemek.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">ANA YEMEK</h5>

          </div>
        </Link>
        {/* ANA YEMEK */}

        {/* BİRALAR */}
        <Link to={"/specificmenu/biralar"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/biralar.png" alt="" />

          <div className="p-5">

            <h5 className="block mb-2 text-xl font-bold tracking-tight dark:text-white text-center">BİRALAR</h5>

          </div>
        </Link>
        {/* BİRALAR */}

        {/* SALATALAR */}
        <Link to={"/specificmenu/salatalar"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/salatalar.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">SALATALAR</h5>

          </div>
        </Link>
        {/* SALATALAR */}

        {/* İMZA KOKTEYLER */}
        <Link to={"/specificmenu/imzakokteyller"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/imzakokteyller3.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">İMZA KOKTEYLLER</h5>

          </div>
        </Link>
        {/* İMZA KOKTEYLER */}

        {/*BURGERLER */}

        <Link to={"/specificmenu/burgerler"} name="name" className="flex flex-col border bg-slate-900 border-gray-200 rounded-lg shadow dark:border-gray-700 hover:opacity-50">

          <img className="rounded-t-lg" src="/img/hamburger.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white text-center">BURGERLER</h5>


          </div>
        </Link>

        {/*BURGERLER */}

        {/*GLOBAL KOKTEYLLER */}

        <Link to={"/specificmenu/globalkokteyller"} name="name" className="flex flex-col border bg-slate-900 border-gray-200 rounded-lg shadow dark:border-gray-700 hover:opacity-50">

          <img className="rounded-t-lg" src="/img/globalkokteyller.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white text-center">GLOBAL KOKTEYLLER</h5>


          </div>
        </Link>

        {/*GLOBAL KOKTEYLLER */}

        {/* PİZZALAR */}
        <Link to={"/specificmenu/pizzalar"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/pizzalar.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">PİZZALAR</h5>

          </div>
        </Link>
        {/* PİZZALAR */}

        {/* CİN VE VODKA */}
        <Link to={"/specificmenu/cinvevodka"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/cinvevodka.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">CİN VE VODKA</h5>

          </div>
        </Link>
        {/* CİN VE VODKA*/}


        {/* WSQ */}
        <Link to={"/specificmenu/wrapsandvicquesdilla"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/wsq.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">WRAP SANDVİÇ QUESDİLLA</h5>

          </div>
        </Link>
        {/* WSQ */}


        {/* VİSKİLER */}
        <Link to={"/specificmenu/viskiler"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/whisky.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">VİSKİLER</h5>

          </div>
        </Link>
        {/* VİSKİLER */}



        {/* TATLILAR */}
        <Link to={"/specificmenu/tatlilar"} className=" bg-white border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/tatlılar.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">TATLILAR</h5>

          </div>
        </Link>
        {/* TATLILAR */}





        {/* DİGER ALKOLLU İCECEKLER */}
        <Link to={"/specificmenu/digeralkolluicecekler"} className="border hover:opacity-50 border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

          <img className="rounded-t-lg" src="/img/digeralkolluicecekler.png" alt="" />

          <div className="p-5">

            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white text-center">DİĞER ALKOLLÜ İÇECEKLER</h5>

          </div>
        </Link>
        {/* DİGER ALKOLLU İCECEKLER */}



      </div>

      <Footer></Footer>

    </div>
  )
}
