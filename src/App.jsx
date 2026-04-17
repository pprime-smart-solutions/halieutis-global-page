import Logo from "./assets/pprime.png";
import POil from "./assets/POil.svg";
import PFish from "./assets/PFish.svg";
import PBoiler from "./assets/PBoiler.svg";
import PEnergy from "./assets/PEnergy.svg";
import PWater from "./assets/PWater.svg";
import PSense from "./assets/PSense.svg";
import PDever from "./assets/PDever.svg";
import Humidification from "./assets/Humidification 1.svg";
import Hub from "./assets/PDever Hub.svg";
import Box from "./assets/PDever Box.svg";
import Desinfection from "./assets/desinfection.svg";
import PTrackFruit from "./assets/FruitTrack 2.svg";

function App() {
    const allapps = [
        { name: "PDever BOX", logo: Box, ipPort: "194.164.76.81:8049", width: 100 },
        { name: "PDever Cloud", logo: PDever, ipPort: "194.164.76.81:8044", width: 110 },
        { name: "PTrack Fruit", logo: PTrackFruit, ipPort: "194.164.76.81:8043", width: 110 },
        { name: "Desinfection", logo: Desinfection, ipPort: "194.164.76.81:8048", width: 110 },
        { name: "PEnergy", logo: PEnergy, ipPort: "194.164.76.81:8041", width: 170 },
        { name: "POil", logo: POil, ipPort: "194.164.76.81:8042", width: 140 },
        { name: "PFish", logo: PFish, ipPort: "194.164.76.81:8045", width: 150 },
        { name: "PSense", logo: PSense, ipPort: "194.164.76.81:8046", width: 150 },
        { name: "PWater", logo: PWater, ipPort: "194.164.76.81:8047", width: 150 },
    ];

    // Split apps into chunks of 4
    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const appRows = chunkArray(allapps, 4);
    // const appRows = chunkArray(sidiKacemtabletApps, 3);
    // const appRows = chunkArray(sidiKacemcofferetApps, 3);

    return (
        <div className="flex flex-col justify-center items-center h-screen -mt-32">
            <img src={Logo} alt="Pprime Logo" className="w-[600px]" />
            <div className="flex flex-col justify-between items-center -mt-38">
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
