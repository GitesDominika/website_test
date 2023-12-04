import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    IconButton,
    Input, SkeletonText,
    Text,
} from '@chakra-ui/react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer,} from '@react-google-maps/api';
import { useRef, useState } from 'react'


const center = { lat: 52.2297, lng: 21.0122 };

function GoogleMapApi() {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const mapOptions = {
        styles: [
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {visibility: 'on',},
                    {color: '#D3D3D3',},
                ],
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels',
                stylers: [
                    { visibility: 'on' }, // Włącza etykiety dzielnic miasta
                ],
            },
            {
                featureType: 'road',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' }, // Wyłącza oznaczenia dróg
                ],
            },
            {
                featureType: 'landscape',
                elementType: 'on',
                stylers: [
                    {color: '#ffffff',},
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    { color: '#D3D3D3' }, // Ustawia kolor wody (rzeki) na czarny
                ],
            },

            {
                featureType: 'poi',
                elementType: 'park',
                stylers: [
                    { visibility: 'off' }, // Wyłącza oznaczenia parków
                ],
            },
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' },
                ],
            },
            {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' },
                ],
            },
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                    { saturation: -100 },
                    {lightness: 33,},
                ],
            },
        ],
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
    };

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destianationRef = useRef()

    if (!isLoaded) {
        return <SkeletonText/>
    }

    async function calculateRoute() {
        if (originRef.current.value === '' || destianationRef.current.value === '') {
            return
        }

        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destianationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destianationRef.current.value = ''
    }

    return (
        <Flex
            position='relative'
            flexDirection='column'
            alignItems='center'
            h='80vh'
            w='100vw'
        >
            <Box position='absolute' left={0} top={0} h='100%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap center={center} zoom={12} mapContainerStyle={{ width: '100%', height: '100%' }} options={mapOptions} onLoad={map => setMap(map)}>
                    {center && <Marker position={center}  />}{directionsResponse &&<DirectionsRenderer directions={directionsResponse}
                    options={{polylineOptions: {strokeColor: '#0088ff', strokeDashStyle: 'dotted', strokeDasharray: '2, 6', strokeWeight: 6,},}}/>}
                </GoogleMap>




            </Box>

            <Box
                p={4}
                borderRadius='lg'
                mt={4}
                bgColor='white'
                shadow='base'
                minW='container.md'
                zIndex='0'
            >
                <HStack spacing={12}>
                    <Autocomplete><Input type='text' placeholder='POCZĄTEK'  ref={originRef} /></Autocomplete>
                    <Autocomplete><Input type='text' placeholder='KONIEC' ref={destianationRef} /></Autocomplete>

                    <ButtonGroup>
                        <Button marginRight={24} colorScheme='red' type='submit' onClick={calculateRoute}>
                            OBLICZ
                        </Button>
                        <IconButton
                            aria-label='center back'
                            icon={<FaTimes />}
                            onClick={clearRoute}
                        />
                    </ButtonGroup>
                </HStack>
                <HStack spacing={12} mt={4} justifyContent='space-between'>
                    <Text>ODLEGŁOŚĆ:{distance} </Text>
                    <Text>SZACOWANY CZAS:{duration} </Text>
                    <IconButton
                        aria-label='center back'
                        icon={<FaLocationArrow />}
                        isRound
                        onClick={() => {
                            map.panTo(center)
                        }}
                    />
                </HStack>
            </Box>
        </Flex>
    )
}

export default GoogleMapApi