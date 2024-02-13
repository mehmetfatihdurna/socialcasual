import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewMenu() {
  const params = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // const prefix = "https://database.socialeskisehir.com.tr"
  const prefix = "http://localhost:3000"
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${prefix}/api/getCategories`);
      setData(response.data);
    }

    fetchData();
  }, []);

  function goToHome() {
    navigate("/");
  }

  function MenuWithName() {
    let heading = "";

    switch (params.name) {
      case 'burgerler':
        heading = "BURGERLER";
        break;
      case 'biralar':
        heading = "BİRALAR";
        break;
      case 'anayemek':
        heading = "ANA YEMEK";
        break;

      case 'kahvalti':
        heading = "KAHVALTI";
        break;
      case 'baslangiclar':
        heading = "BAŞLANGIÇLAR";
        break;
      case 'salatalar':
        heading = "SALATALAR";
        break;
      case 'wrapsandvicquesdilla':
        heading = "WRAP SANDVİÇ QUESDİLLA";
        break;
      case 'pizzalar':
        heading = "PİZZALAR";
        break;
      case 'tatlilar':
        heading = "TATLILAR";
        break;
      case 'sicakbar':
        heading = "SICAK BAR";
        break;
      case 'alkolsuzicecekler':
        heading = "ALKOLSÜZ İÇECEKLER";
        break;
      case 'digeralkolluicecekler':
        heading = "DİĞER ALKOLLÜ İÇECEKLER";
        break;
      case 'globalkokteyller':
        heading = "GLOBAL KOKTEYLLER";
        break;
      case 'imzakokteyller':
        heading = "İMZA KOKTEYLLER";
        break;
      case 'viskiler':
        heading = "VİSKİLER";
        break;
      case 'cinvevodka':
        heading = "CİN VE VODKA";
        break;
      case 'kampanyalar':
        heading = "KAMPANYALAR";
        break;
      default:
        heading = "Başlık"
        break;
    }

    function SubMenu() {
      let keys = Object.keys(data);
      let liste = [];

      keys.forEach((key, j) => {
        let sublist = [];

        if (key === heading) {
          data[key].forEach((value, i) => {
            sublist.push(
              <div key={i} className="bg-white overflow-hidden dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-lg p-6 rounded-lg">
                <div className="flex flex-row justify-between">
                  <div>
                    <summary className="text-sm text-slate-900 dark:text-white font-semibold select-none">
                      {value[0]}
                    </summary>
                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                      <p>{value[2]}</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="text-white text-2xl">{value[1]}</div>
                  </div>

                </div>
              </div>
            );
          });

          liste.push(
            <div key={Math.random() * 1000} className='grid grid-cols-1 gap-3'>
              {sublist}
            </div>)
        }
      });

      return liste;
    }

    return (

      <div className="conatiner px-3">
        <div className='grid grid-cols-1 gap-1'>
          <div className="border bg-slate-900 border-gray-200 rounded-lg shadow dark:border-gray-700">

            <div name="name" className="flex flex-row items-end p-5">
              <button onClick={goToHome}>
                <svg
                  className='w-8 h-8'
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={500}
                  zoomAndPan="magnify"
                  viewBox="0 0 375 374.999991"
                  height={500}
                  preserveAspectRatio="xMidYMid meet"
                  version={1.0}
                >
                  <defs>
                    <clipPath id="28a422f0a1">
                      <path
                        d="M 46 89 L 329 89 L 329 356.972656 L 46 356.972656 Z M 46 89 "
                        clipRule="nonzero"
                      />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#28a422f0a1)">
                    <path
                      fill="#ffffff"
                      d="M 327.316406 210.046875 L 193.535156 91.875 C 190.0625 88.808594 184.859375 88.808594 181.390625 91.875 L 47.609375 210.046875 C 46.625 210.917969 46.058594 212.171875 46.058594 213.488281 L 46.058594 352.476562 C 46.058594 355.011719 48.113281 357.0625 50.644531 357.0625 L 144.6875 357.0625 C 147.214844 357.0625 149.269531 355.011719 149.269531 352.476562 L 149.269531 263.703125 C 149.269531 253.578125 157.480469 245.367188 167.609375 245.367188 L 207.316406 245.367188 C 217.445312 245.367188 225.652344 253.578125 225.652344 263.703125 L 225.652344 352.476562 C 225.652344 355.011719 227.707031 357.0625 230.238281 357.0625 L 324.277344 357.0625 C 326.808594 357.0625 328.863281 355.011719 328.863281 352.476562 L 328.863281 213.488281 C 328.863281 212.171875 328.300781 210.917969 327.316406 210.046875 "
                      fillOpacity={1}
                      fillRule="nonzero"
                    />
                  </g>
                  <path
                    fill="#ffffff"
                    d="M 364.171875 164.195312 L 211.671875 30.171875 C 197.824219 18 177.097656 18 163.25 30.171875 L 10.753906 164.195312 C 3.234375 170.804688 2.863281 182.386719 9.941406 189.464844 C 16.410156 195.929688 26.785156 196.257812 33.644531 190.214844 L 175.34375 65.410156 C 182.269531 59.308594 192.65625 59.308594 199.582031 65.410156 L 341.28125 190.214844 C 348.140625 196.257812 358.519531 195.929688 364.984375 189.464844 C 372.0625 182.386719 371.6875 170.800781 364.171875 164.195312 "
                    fillOpacity={1}
                    fillRule="nonzero"
                  />
                </svg>

              </button>

              <h5 name="name" className="mx-auto text-2xl font-bold tracking-tight text-black dark:text-white text-center">{heading}</h5>


            </div>
          </div>

          {/* open modifier Start */}
          <SubMenu />

          {/* <div className="bg-white overflow-hidden dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-lg p-6 rounded-lg">
            <div className="flex flex-row justify-between">
              <div>
                <summary className="text-sm text-slate-900 dark:text-white font-semibold select-none">
                  MUSHROOM BURGER
                </summary>
                <div className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                  <p>The mug is round. The jar is rouThe jar is roundThe jar is round</p>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-white text-2xl">80TL</div>
              </div>

            </div>
          </div> */}

          {/* open modifier end  */}
        </div>
      </div>);
  };

  return (
    <MenuWithName />
  )
}

export default NewMenu;