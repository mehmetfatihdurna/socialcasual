// 'use server';
// import meals from '../meals';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Menu() {
    const [data, setData] = useState([]);

    // const prefix = "https://database.socialeskisehir.com.tr"
    const prefix = "http://localhost:3000"
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${prefix}/api/getCategories`);
            setData(response.data);
        }

        fetchData();
    }, []);

    // let liste = Object.keys(data);
    // console.log(liste);





    function read_list() {

        let keys = Object.keys(data);
        let liste = [];

        keys.forEach((key, j) => {
            let sublist = [];
            data[key].forEach((value, i) => {
                sublist.push(
                    <div key={i} className="flex justify-between text-white mt-1">
                        <div>{value[0]}</div>
                        <div>{value[1]}</div>
                    </div>
                );
            });
            liste.push(
                <div key={j} className='mb-7'>
                    <h2 className='text-amber-300 text-2xl'>{key}</h2>
                    {sublist}
                </div>
            );
        });

        return liste;

        // let subList;
        // let liste = meals.map((values, i) => {

        //     subList = Object.values(values).map((value, x) => {
        //         let gecicilist = value.map((a) => {
        //             return (
        //                 <div key={Math.random() * 100} className="flex justify-between mt-2">
        //                     <li className="">{a[0]}</li>
        //                     <div className="">{a[1]}</div>
        //                 </div>
        //             );
        //         })
        //         return (
        //             <div key={Math.random() * 1000} className="mt-6">
        //                 <h2 className="text-amber-300 text-2xl">{Object.keys(values)[x]}</h2>
        //                 {gecicilist}
        //             </div>
        //         );
        //     });
        //     return (
        //         <div key={Math.random() * 1000}>
        //             <ul className="text-white">
        //                 {subList}
        //             </ul>
        //         </div>
        //     );

        // });

        // return liste;
    }
    return (
        <div style={{}}>
            {read_list()}
        </div>);
}

export default Menu;