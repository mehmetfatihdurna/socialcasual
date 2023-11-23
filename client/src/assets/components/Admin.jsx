import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Admin() {

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  let adminUserName = "admin";
  let adminPassword = "admin1234";

  function handlePassword(event){
    setPassword(event.target.value);
  };

  function handleUserName(event){
    setUsername(event.target.value);
  };

  function loginControl(){
    if(adminPassword === password && adminUserName === username){
      console.log("Giriş Başarılı");
      navigate("/admin/duzenleme/sayfasi/q/q/q/t",{state:{isAdmin:'true'}});
    }else{
      console.log("Giriş Başarısız");
    }
  }

  return (
    <div>

      <div className="mt-8">



        <div className="grid grid-cols-12 gap-4 mt-10">

          <div className="block col-start-5 col-span-4 text-center">
            <h1 className="text-2xl text-white">Admin Sayfası</h1>
          </div>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Kullanıcı Adı</span>
            <input type="text" onChange={handleUserName} className="mt-0 block text-amber-200 text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <label className="block col-start-5 col-span-4">
            <span className="text-white">Şifre</span>
            <input type="password" onChange={handlePassword} className="mt-0 block text-amber-200 text-2xl bg-zinc-900 w-full px-0.5 border-0 border-b-2 border-amber-100 focus:ring-0 focus:border-amber-300" placeholder="" />
          </label>

          <div className="block col-start-5 col-span-4">
            <div className="grid grid-cols-6">
              <button onClick={loginControl} className="bg-zinc-700 hover:bg-zinc-500 text-white w-full col-start-2 col-span-4 h-12">Giris</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;