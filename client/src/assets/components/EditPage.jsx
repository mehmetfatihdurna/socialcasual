import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function EditPage() {

  const navigate = useNavigate();

  // gelen verileri almak için
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();

  //urlden gelen veriyi almak için
  const { state } = useLocation();
  const { id } = state; // Read values passed on state

  // const prefix = "https://database.socialeskisehir.com.tr"
  const prefix = "http://localhost:3000"

  //Gelen verileri tutan dict
  let dictionary = {};

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${prefix}/api/getOne/${id}`);;
      const data = response.data;

      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setCategory(data.category);
    }

    fetchData();


  }, []);

  function eventHandler(event) {
    switch (event.target.name) {
      case "name":
        dictionary[event.target.name] = encodeURIComponent(event.target.value);
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
      const response = await axios.patch(`${prefix}/api/update/${id}`, JSON.stringify(dictionary));
      navigate("/admin/duzenleme/sayfasi/q/q/q/t",{state:{isAdmin:'true'}});

    } catch (error) {
      console.error(error);
    }
  }









  return (
    <div>

      <div className="mt-8">



        <div className="grid grid-cols-12 gap-4 mt-10">

          <div className="block col-start-5 col-span-4 text-center">
            <h1 className="text-2xl text-white">Edit Sayfası</h1>
          </div>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Ürün Adı</span>
            <input name="name" onChange={eventHandler} type="text" defaultValue={name} style={{'background-color': '#5E4E48'}} className="mt-0 block text-white text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Kategori</span>
            <input name="category" onChange={eventHandler} type="text" defaultValue={category} style={{'background-color': '#5E4E48'}} className="mt-0 block text-white text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Açıklama</span>
            <input name="description" onChange={eventHandler} type="text" defaultValue={description} style={{'background-color': '#5E4E48'}} className="mt-0 block text-white text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Fiyat</span>
            <input name="price" type="text" onChange={eventHandler} defaultValue={price} style={{'background-color': '#5E4E48'}} className="mt-0 block text-white text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
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

export default EditPage;