import Header from "./Header"
import Enter from "./Enter"
export default function App() {
    return (
        <>
        <Header />
        <Enter img={{ 
                        src: "https://scrimba.com/links/travel-journal-japan-image-url",
                        alt: "Mount Fuji" 
                    }}
                    title="Mount Fuji"
                    country="Japan"
                    googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                    text= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                    />
        <Enter img={{ 
                        src: "https://scrimba.com/links/travel-journal-australia-image-url",
                        alt: "Sydney Opera House"
                    }}
                    title="Sydney Opera House"
                    country="Australia"
                    googleMapsLink="https://maps.app.goo.gl/Zr17SCrsJeCEKMd36"
                    text= "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
                    /> 
        <Enter img={{ 
                        src: "https://scrimba.com/links/travel-journal-norway-image-url",
                        alt: "Geirangerfjord" 
                    }}
                    title="Geirangerfjord"
                    country="Norway"
                    googleMapsLink="https://maps.app.goo.gl/fhkJuBhmFDv47tiB7"
                    text= "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."/>
        </>
    )
}