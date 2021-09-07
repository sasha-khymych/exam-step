import Product from './Product';
import './home.css';



function Home() {
    return(
        <div className="home">
            <img className="home-image"
            src="https://21run.com/media/wysiwyg/banners/homepage/FMB/FMB-Mega2clone.jpg"
            alt=""/>
            <div className="home-row">
                <Product
                    id="12"
                    title="Running glasses"
                    price={12}
                    image="https://cdn.bike24.net/i/mb/d3/0c/d6/351732-01-d-753104.jpg"
                    
                />
                <Product
                    id="1"
                    title="UNDER ARMOUR HOVR MACHINA 2 "
                    price={150}
                    image="https://images.21run.com/product/D/S/DSC01810_1_fb66.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=76d9b2f3c6cf9e46f37ff62f76ed0901"
                />
                 <Product
                    id="2"
                    title="INOV-8 X-TALON 255"
                    price={127.95}
                    image="https://images.21run.com/product/D/S/DSC00656_1_5f48.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=51701afc89a232c8be7633e747a6a475"
                />
                <Product
                    id="3"
                    title="ASICS PRFM VISOR"
                    price={17.95}
                    image="https://images.21run.com/product/3/0/3013A278_001_1_333b.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=4598bcd6b9e167331720e15c19546357"
                />
            </div>
            <div className="home-row">
                <Product
                    id="4"
                    title="HYDRAPAK ULTRAFLASK 500ML"
                    price={17.95}
                    image="https://images.21run.com/product/A/H/AH151HP_3_1c86.jpeg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=b888e12f59ecfcff192f46608f332e69"
                />
                <Product
                    id="5"
                    title="NIKE DOUBLE POCKET FLASK BELT 3.0 20 OZ"
                    price={29.95}
                    image="https://images.21run.com/product/N/1/N1001639_082_0d93.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=9995ccc67e5aa425d4bd1de536a16f81"
                />
                 <Product
                    id="6"
                    title="GARMIN FORERUNNER 55"
                    price={199.99}
                    image="https://images.21run.com/product/1/_/1_326d.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=2cb75e17b91abef256aa0c961d959d54"
                />
                <Product
                    id="7"
                    title="POLAR VANTAGE M2"
                    price={301.90}
                    image="https://images.21run.com/product/9/0/90085160_1_2137.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=5adb0dc1591bed603ed9351159f71882"
                />
            </div>
            <div className="home-row">
                <Product
                    id="8"
                    title="SIS 6-PACK GO ISOTONIC ENERGY GEL ORANGE"
                    price={11.99}
                    image="https://images.21run.com/product/s/i/sis_6_pack_go_isotonic_energy_gel_orange_oranje_sis212001a_f0d3.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=f0ebad418840dfcff908019de12d8f2d"
                />
                <Product
                    id="9"
                    title="ODLO PERFORMANCE LIGHT CREW NECK T-SHIRT MEN"
                    price={35.50}
                    image="https://images.21run.com/product/1/8/188152_20782_Torso_Front_6fec.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=b9f86d4bac3425007647cc8e8957f9af"
                />
                <Product
                    id="10"
                    title="ODLO BLACKCOMB LONG TIGHTS"
                    price={69.95}
                    image="https://images.21run.com/product/1/9/196142_15000_1_91e6.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=f46529c2a5dc00a35aec8cf6ff6507a1"
                />
                <Product
                    id="11"
                    title="STANCE RUN FORREST RUN CREW"
                    price={15.75}
                    image="https://images.21run.com/product/A/4/A418D20RUNWHT_1_901a.jpg?auto=compress&fill=solid&fill-color=ffffff&fit=fillmax&h=1250&w=1250&s=ee2ad523ae2e5a3def58befe10a9cb00"
                />
            </div>        
        </div>
    ) 
}

export default Home