import React from 'react'
import AddCard from '../components/AddCard'
import MainCarousel from '../components/MainCarousel'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './Home.css'
function Home() {
    return (
        <div className="home">
        	
            <MainCarousel/>
            <div className="home__row">
                <AddCard title={"Upgrade your home"} image={["https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B00OT9CS5S_186x116._SY116_CB417134289_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B08345R1ZW_186x116._SY116_CB417134289_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/WFH_186x116._SY116_CB417134289_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/B01N5KIHWN_186x116._SY116_CB417134288_.jpg"]}/>
                <AddCard title={"Everyday essentials"} image={["https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_4._SY116_CB431329535_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_1._SY116_CB431329533_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_2._SY116_CB431329535_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HPC/GW/Desktop-Qc-1x_3._SY116_CB431329535_.jpg"]}/>
                <AddCard title={"Amazon Brands & more"} image={["https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"]}/>
            </div>
            <div className="home__row">
                <AddCard title={"20%-70% off | Daily essentials"} image={['https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_2._SY116_CB433219942_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_3._SY116_CB433219942_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_1._SY116_CB433219942_.jpg', 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/1x_4._SY116_CB433219942_.jpg']} />
                <AddCard title={"Home essentials | Amazon Brands & more"} image={["https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg"]} />
                <AddCard title={"Amazon Brands & more"} image={["https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/Mixer_B07RYL7NSH_Asins_186x116._SY116_CB409842842_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GWTransition/2-4_186x116._SY116_CB433910795_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2020/GatewayNK/PC/spb_186x116._SY116_CB433889053_.jpg"]}/>
                <AddCard title={"Automotive essentials | Up to 60% off"} image={["https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_372x232._SY116_CB405083904_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Tyre_372x232._SY116_CB405083904_.jpg", "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Pressurewasher_372x232._SY116_CB405083904_.jpg","https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Protective_gear_372x232._SY116_CB405083904_.jpg"]} />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home
