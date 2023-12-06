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


const distanceTextStyle = {
    margin: '0 20px',
    backgroundColor: '#EED433',
    fontWeight: 'bold',
    height: '60px',
    width: '265px',
    padding: '10px', // Dodatkowe wypełnienie dla lepszego wyglądu
    display: 'flex',
    alignItems: 'center',  // Center vertically
    justifyContent: 'center',  // Center horizontally

};
const priceTextStyle = {
    margin: '0 0 0 60px',
    backgroundColor: '#D20024',
    color: '#FFFFFF',
    fontWeight: 'bold',
    height: '60px',
    width: '265px',
    padding: '10px', // Dodatkowe wypełnienie dla lepszego wyglądu
    display: 'flex',
    alignItems: 'center',  // Center vertically
    justifyContent: 'center',  // Center horizontally
};

const center = { lat: 52.2297, lng: 21.0122 };


function Calculator() {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
    })

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

    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [calculatedPrice, setCalculatedPrice] = useState(null);

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
        console.log(distance)

        const distanceValue = parseFloat(distance);
        const cenaZaKilometr = 2.54;
        const obliczonaCena = distanceValue * cenaZaKilometr;

        // Ustaw obliczoną cenę w stanie
        setCalculatedPrice(obliczonaCena);

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
            h='90vh'
            w='100vw'
        >

            <Box position='absolute' left={0} top={0} h='90%' w='100%'>
                {/* Google Map Box */}
                <GoogleMap center={center} zoom={12} mapContainerStyle={{ width: '100%', height: '90%' }} options={mapOptions} onLoad={map => setMap(map)}>
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
                <HStack spacing={6}>
                    <Autocomplete><Input type='text' placeholder='POCZĄTEK' ref={originRef} /></Autocomplete>
                    <Autocomplete><Input type='text' placeholder='KONIEC' ref={destianationRef} /></Autocomplete>

                    <ButtonGroup>
                        <Button marginRight={24} colorScheme='red' type='submit' onClick={calculateRoute}>OBLICZ</Button>
                        <IconButton aria-label='center back' icon={<FaLocationArrow />} isRound onClick={() => {map.panTo(center)}}/>
                        <IconButton aria-label='center back' icon={<FaTimes />} onClick={clearRoute}/>
                    </ButtonGroup>
                </HStack>
            </Box>
            <Box position='absolute' left={0} bottom={0} h='11rem' w='100%' bgColor='white' zIndex='10' >
                <Flex spacing={0} mt={2} justifyContent='center' >
                    <Text style={distanceTextStyle}>ODLEGŁOŚĆ:&nbsp;{distance} </Text>
                    <Text style={distanceTextStyle}>SZACOWANY CZAS:&nbsp;{duration} </Text>
                    <Text style={priceTextStyle}>PRZYBLIŻONY KOSZT:&nbsp;{calculatedPrice !== null && !isNaN(calculatedPrice) ? `${calculatedPrice.toFixed(2)} zł` : ''}</Text>
                </Flex>
                <Text mt='6' textAlign='center'>Prezentowane koszty są szacunkowe, zależne od ostatecznego czasu trwania podróży i wybranej trasy. </Text>
            </Box>
        </Flex>
    )
}

export default Calculator