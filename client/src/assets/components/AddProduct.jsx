import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {

  // const prefix = "https://database.socialeskisehir.com.tr"
  const prefix = "http://localhost:3000"

  const navigate = useNavigate();
  let dictionary = {
    name: "",
    category: "",
    description: "",
    price: ""
  };

  function eventHandler(event) {
    switch (event.target.name) {
      case "name":
        dictionary[event.target.name] = encodeURIComponent(event.target.value);
        console.log(dictionary);
        break;

      case "category":
        dictionary[event.target.name] = encodeURIComponent(event.target.value);
        break;

      case "price":
        dictionary[event.target.name] = encodeURIComponent(event.target.value);
        break;

      case "description":
        dictionary[event.target.name] = encodeURIComponent(event.target.value);
        break;
      default:
        break;
    }
  }

  async function save() {

    try {
      const response = await axios.post(`${prefix}/api/post`, JSON.stringify(dictionary));
      navigate("/admin/duzenleme/sayfasi/q/q/q/t", { state: { isAdmin: 'true' } });

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>

      <div className="mt-8">



        <div className="grid grid-cols-12 gap-4 mt-10">

          <div className="block col-start-5 col-span-4 text-center">
            <h1 className="text-2xl text-white">Yeni Ürün</h1>
          </div>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Ürün Adı</span>
            <input name="name" onChange={eventHandler} type="text" className="mt-0 block text-amber-200 text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Kategori</span>
            <input name="category" onChange={eventHandler} type="text" className="mt-0 block text-amber-200 text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Açıklama</span>
            <input name="description" onChange={eventHandler} type="text" className="mt-0 block text-amber-200 text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Fiyat</span>
            <input name="price" onChange={eventHandler} type="text" className="mt-0 block text-amber-200 text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <div className="block col-start-5 col-span-4">
            <div className="grid grid-cols-6">
              <button onClick={save} className="bg-zinc-700 hover:bg-zinc-500 text-white w-full col-start-2 col-span-4 h-12">Kaydet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;