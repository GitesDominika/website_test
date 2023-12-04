import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = { lat: 52.2297, lng: 21.0122 };

function GoogleMapApi() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <GoogleMap
            center={center}
            zoom={12}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
                styles: [
                    {
                        featureType: 'all',
                        elementType: 'all',
                        stylers: [
                            {
                                saturation: -100,
                            },
                            {
                                lightness: 33,
                            },
                            {
                                visibility: 'simplified',
                            },
                        ],
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [
                            {
                                color: '#333333', // Kolor dróg
                            },
                        ],
                    },
                ],
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
            }}
        >
            {/* Twoje markery i inne elementy na mapie */}
        </GoogleMap>
    );
}