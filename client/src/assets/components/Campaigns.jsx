import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Shoes from "./Shoes";

function Campaigns() {

    const [data, setData] = useState();

    const prefix = "http://localhost:3000";

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${prefix}/api/getKampanyalar`);
            setData(response.data);
        }

        fetchData();
    }, []);

    function CampaignCarousel() {

        function next(i) {
            if (i === data.length-1) {
                return 1;
            } else {
                return i + 2;
            }
        }

        function prev(i) {
            if (i === 0) {
                return data.length;
            } return i;

        }
        if (data != undefined) {
            let liste = data.map((value, i) => {
                return (
                    <div key={i} id={`slide${i + 1}`} className="carousel-item relative w-full">
                        <Shoes name={value.name} description={value.description} price={value.price}></Shoes>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${prev(i)}`} className="btn btn-circle">❮</a>
                            <a href={`#slide${next(i)}`} className="btn btn-circle">❯</a>
                        </div>
                    </div>)
            })
            return liste;
        }


    }


    return (

        <div className=" flex flex-col justify-center p-1 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-900 dark:border-gray-700">

            <div className="carousel w-full">
                <CampaignCarousel />
            </div>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <Shoes name="Burgerler" description="İndirimde"></Shoes>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Shoes></Shoes>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Campaigns;