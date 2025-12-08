import Logo from "./assets/pprime.png";
import POil from "./assets/POil.svg";
import PFish from "./assets/PFish.svg";
import PBoiler from "./assets/PBoiler.svg";
import PEnergy from "./assets/PEnergy.svg";
import PWater from "./assets/PWater.svg";
import PSense from "./assets/PSense.svg";
import PDever from "./assets/PDever.png";
import Humidification from "./assets/Humidification 1.svg";
import Hub from "./assets/PDever Hub.svg";
import Box from "./assets/PDever Box.svg";
import Desinfection from "./assets/Desinfection.svg";
import PTrackFruit from "./assets/FruitTrack 2.svg";

function App() {
    const allapps = [
        { name: "Humidification", logo: Humidification, ipPort: "194.164.76.81:8010", width: 140 },
        { name: "PDever HUB", logo: Hub, ipPort: "194.164.76.81:8011", width: 110 },
        { name: "PDever BOX", logo: Box, ipPort: "194.164.76.81:8012", width: 110 },
        { name: "Desinfection", logo: "", ipPort: "194.164.76.81:8013", width: 110 },

        { name: "PFish", logo: PFish, ipPort: "194.164.76.81:8014", width: 150 },
        { name: "PBoiler", logo: PBoiler, ipPort: "194.164.76.81:8016", width: 150 },
        { name: "POil", logo: POil, ipPort: "194.164.76.81:8017", width: 140 },

        { name: "PWater", logo: PWater, ipPort: "194.164.76.81:8018", width: 150 },
        { name: "PSense", logo: PSense, ipPort: "194.164.76.81:8019", width: 150 },
        { name: "PEnergy", logo: PEnergy, ipPort: "194.164.76.81:8015", width: 170 },
        { name: "PDever Cloud", logo: PDever, ipPort: "194.164.76.81:8020", width: 110 },
        { name: "PTrack Fruit", logo: PTrackFruit, ipPort: "194.164.76.81:8021", width: 110 }
    ];


    const sidiKacemtabletApps = [
        { name: "PWater", logo: PWater, ipPort: "194.164.76.81:8018", width: 150 },
        { name: "PSense", logo: PSense, ipPort: "194.164.76.81:8019", width: 150 },
        { name: "PEnergy", logo: PEnergy, ipPort: "194.164.76.81:8015", width: 170 },
        { name: "PDever Cloud", logo: PDever, ipPort: "194.164.76.81:8020", width: 110 },
        { name: "PTrack Fruit", logo: PTrackFruit, ipPort: "194.164.76.81:8021", width: 120 }
    ]

    const sidiKacemcofferetApps = [
        { name: "Humidification", logo: Humidification, ipPort: "localhost:8010", width: 150 },
        { name: "Desinfection", logo: Desinfection, ipPort: "localhost:8013", width: 140 },
        { name: "PDever BOX", logo: Box, ipPort: "localhost:8012", width: 120 },
    ]


    const TropheeClimatiqueApps = [
        { name: "PFish", logo: PFish, ipPort: "194.164.76.81:8014", width: 150 },
        { name: "POil", logo: POil, ipPort: "194.164.76.81:8017", width: 115 },
        { name: "PWater", logo: PWater, ipPort: "194.164.76.81:8018", width: 150 },
        { name: "PSense", logo: PSense, ipPort: "194.164.76.81:8019", width: 150 },
        { name: "PEnergy", logo: PEnergy, ipPort: "194.164.76.81:8015", width: 150 },
    ];


    const allTabletApps = [
        { name: "PWater", logo: PWater, ipPort: "194.164.76.81:8041", width: 150 },
        { name: "PSense", logo: PSense, ipPort: "194.164.76.81:8042", width: 150 },
        { name: "PEnergy", logo: PEnergy, ipPort: "194.164.76.81:8043", width: 150 },
        { name: "POil", logo: POil, ipPort: "194.164.76.81:8044", width: 115 },
        { name: "PFish", logo: PFish, ipPort: "194.164.76.81:8045", width: 150 },
        { name: "PDever Cloud", logo: PDever, ipPort: "194.164.76.81:8034", width: 110 },
        { name: "PTrack Fruit", logo: PTrackFruit, ipPort: "194.164.76.81:8035", width: 120 }
    ]

    // Split apps into chunks of 4
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const appRows = chunkArray(allTabletApps, 4);
    // const appRows = chunkArray(sidiKacemtabletApps, 3);
    // const appRows = chunkArray(sidiKacemcofferetApps, 3);

    return (
        <div className="flex flex-col justify-center items-center h-screen -mt-32">
            <img src={Logo} alt="Pprime Logo" className="w-[600px]" />
            <div className="flex flex-col justify-between items-center -mt-28">
                {appRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-baseline items-center">
                        {row.map((app, index) => (
                            <a
                                key={index}
                                href={`http://${app.ipPort}`}
                                className="m-8 p-3 rounded-md"
                            >
                                <img
                                    src={app.logo}
                                    alt={app.name}
                                    width={app.width}
                                />
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
