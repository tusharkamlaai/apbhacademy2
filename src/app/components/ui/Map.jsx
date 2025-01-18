'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet without SSR
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const useMapEvent = dynamic(() => import('react-leaflet').then((mod) => mod.useMapEvent), { ssr: false });
let L;
if (typeof window !== 'undefined') {
    L = require('leaflet');
}

const Map = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isMapFocused, setIsMapFocused] = useState(false);

    const storeLocations = [
        { lat: 16.5151, lng: 80.6321, name: "MCA Vijayawada, Asian Paints, Sy-448/2, Dno: 54-11-12n, 4th Floor, Sai Odessey Building, Gurunanak Colony Road, Vijayawada - 520008" },
        { lat: 16.5062, lng: 80.6480, name: "MCA Vijayawada" },
        { lat: 13.6288, lng: 79.4192, name: "MCA Tirupati" },
        { lat: 17.6868, lng: 83.2185, name: "MCA Vizag" },
        { lat: 12.9592, lng: 77.5896, name: "FCA Bangalore Lalbagh, Asian Paints Colour Academy, #7/2, 2nd floor, 2nd Cross, Lalbagh Road, Bangalore - 560027" },
        { lat: 12.9716, lng: 77.5946, name: "MCA Peenya" },
        { lat: 19.1066, lng: 72.9285, name: "FCA Mumbai,Asian Paints Colour Academy, Rare building 1st floor, Mahajan Mills Compound, LBS Marg, HMPL Surya Nagar, Vikhroli West, Mumbai, Maharashtra 400079" },
        { lat: 19.0190, lng: 72.8445, name: "MCA Dadar" },
        { lat: 19.0235, lng: 73.1122, name: "MCA Panvel" },
        { lat: 23.0225, lng: 72.5714, name: "FCA Ahmedabad, Asian Paints Colour Academy, 2nd Floor BVR EK, Opp. Hotel Inder Residency, Gujarat College corner, Ellisbridge, Ahmedabad - 380006" },
        { lat: 23.0225, lng: 72.5714, name: "MCA Ahmedabad" },
        { lat: 21.1702, lng: 72.8311, name: "FCA Surat, Unit No.401-403, Shivalik Avenue, Besides Reliance Mall, Udhana Darwaja, Ring Road, Surat - 395002." },
        { lat: 22.3039, lng: 70.8022, name: "MCA Rajkot" },
        { lat: 28.4089, lng: 77.3178, name: "MCA Faridabad" },
        { lat: 30.8328, lng: 77.0728, name: "MCA Parwanoo" },
        { lat: 32.7266, lng: 74.8570, name: "MCA-Jammu" },
        { lat: 25.5941, lng: 85.1376, name: "FCA Patna, Asian Paints Colour Academy, Asha Aracada 3rd Floor Anishabad, Patna, Bhiar, Pincode - 800002" },
        { lat: 25.5941, lng: 85.1376, name: "MCA Patna, MCA Patna 2" },
        { lat: 23.3441, lng: 85.3096, name: "MCA Ranchi" },
        { lat: 9.9312, lng: 76.2673, name: "FCA Cochin, Asian Paints Colour Academy, 'Omkar' Building, 1st & 2nd Floor, AsariParambu Road, Edapally, Cochin - 682024" },
        { lat: 8.5241, lng: 76.9366, name: "FCA Trivandrum, Artech Meenakshi Plaza, 3rd Floor, Opp W & C Hospital Thycaud, Trivandrum - 695014" },
        { lat: 8.5241, lng: 76.9366, name: "MCA Trivandrum" },
        { lat: 11.8745, lng: 75.3704, name: "MCA Kannur" },
        { lat: 22.7196, lng: 75.8577, name: "FCA Indore, Asian Paints Colour Academy, Shekhar Central 1st floor, AB Road Palasia Square, Indore (MP) Pincode - 452001" },
        { lat: 22.7196, lng: 75.8577, name: "MCA Indore" },
        { lat: 23.2599, lng: 77.4126, name: "MCA Bhopal" },
        { lat: 28.6538, lng: 77.1252, name: "FCA Kirti Nagar, Asian Paints Colour Academy, 38/2, 2nd Floor, DLF Industrial Area, Kirti Nagar, Delhi - 110015" },
        { lat: 28.5897, lng: 77.2909, name: "FCA Mayur Vihar, Asian Paints Colour Academy, A-5 Acharya Niketan Market, Mayur Vihar Phase-1 New Delhi-110091" },
        { lat: 26.1445, lng: 91.7362, name: "FCA Guwahati, Asian Paints Color Academy, 4Th Floor, Kaym Plaza Near Kar Bhawan, Assam - 781006" },
        { lat: 26.1445, lng: 91.7362, name: "MCA Guwahati (NE1), MCA Guwahati (NE2)" },
        { lat: 20.2961, lng: 85.8245, name: "FCA BHUBANESHWAR, MAYADHARA COMPLEX, Saheed Nagar, Bhubaneswar, KHURDHA, ODISHA -751007" },
        { lat: 20.2961, lng: 85.8245, name: "MCA Bhubaneshwar" },
        { lat: 20.4625, lng: 85.8828, name: "MCA Cuttack" },
        { lat: 21.2514, lng: 81.6296, name: "MCA Raipur" },
        { lat: 30.7333, lng: 76.7794, name: "FCA CHANDIGARH, SCO NO. 3039-3040, Sector 22-D, Chandigarh - 160022" },
        { lat: 30.2109, lng: 74.9455, name: "MCA Bhatinda" },
        { lat: 30.9000, lng: 75.8573, name: "MCA Ludhiana" },
        { lat: 26.9124, lng: 75.7873, name: "FCA Jaipur, Asian Paints Colour Academy, 2nd floor, Prem Tower, Devi Nagar, Jaipur, Rajasthan - 302019" },
        { lat: 26.9124, lng: 75.7873, name: "MCA Jaipur" },
        { lat: 28.0229, lng: 73.3119, name: "MCA Bikaner" },
        { lat: 24.5854, lng: 73.7125, name: "MCA Udaipur" },
        { lat: 12.2958, lng: 76.6394, name: "MCA Mysore" },
        { lat: 12.2958, lng: 76.6394, name: "FCA Mysore" },
        { lat: 22.7804, lng: 86.2000, name: "MCA Jamshedpur" },
    ];

    useEffect(() => {
        setIsMounted(true);

        if (L) {
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });
        }
    }, []);

    if (!isMounted) return null;

    const MapFocusHandler = () => {
        useMapEvent('click', () => {
            setIsMapFocused(true);
        });

        useMapEvent('mouseout', () => {
            setIsMapFocused(false);
        });

        return null;
    };

    return (
        <>
            <div className='text-center lg:mt-[4rem] mt-[4rem]'>
                <span className='block text-gray-700 text-2xl mb-8 font-semibold'>Our Presence</span>
            </div>
            <div className='justify-center flex py-3'>
                <MapContainer center={[20.5937, 78.9629]} zoom={5} className='lg:h-[70vh] lg:w-[80%]  h-[50vh] w-[80%]' scrollWheelZoom={isMapFocused}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {storeLocations.map((location, index) => (
                        <Marker key={index} position={[location.lat, location.lng]}>
                            <Popup>{location.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    );
};

export default Map;
