import Logo from "./assets/pprime.png";
import POil from "./assets/POil.svg";
import PFish from "./assets/PFish.svg";
import PEnergy from "./assets/PEnergy.svg";
import PWater from "./assets/PWater.svg";
import PSense from "./assets/PSense.svg";
import PDever from "./assets/PDever.svg";
import Box from "./assets/PDever Box.svg";
import Desinfection from "./assets/desinfection.svg";
import PTrackFruit from "./assets/FruitTrack 2.svg";
import PHealth from "./assets/phealth.svg";

function App() {
    const allapps = [
        { name: "PDever BOX", logo: Box, ipPort: "194.164.76.81:8049", width: 100 },
        { name: "PDever Cloud", logo: PDever, ipPort: "194.164.76.81:8044", width: 110 },
        { name: "PTrack Fruit", logo: PTrackFruit, ipPort: "194.164.76.81:8043", width: 110 },
        { name: "Desinfection", logo: Desinfection, ipPort: "194.164.76.81:8048", width: 110 },

        { name: "PEnergy", logo: PEnergy, ipPort: "194.164.76.81:8041", width: 170 },
        { name: "POil", logo: POil, ipPort: "194.164.76.81:8042", width: 120 },
        { name: "PFish", logo: PFish, ipPort: "194.164.76.81:8045", width: 140 },

        { name: "PSense", logo: PSense, ipPort: "194.164.76.81:8046", width: 150 },
        { name: "PWater", logo: PWater, ipPort: "194.164.76.81:8047", width: 150 },
        { name: "PHealth", logo: PHealth, ipPort: "", width: 115 },
    ];

    // Rows: 4 logos, then 3, then 3
    const chunkByRowSizes = (array, rowSizes) => {
        let offset = 0;
        return rowSizes.map((size) => {
            const row = array.slice(offset, offset + size);
            offset += size;
            return row;
        });
    };

    const appRows = chunkByRowSizes(allapps, [4, 3, 3]);

    return (
        <div className="flex flex-col justify-center items-center h-screen -mt-28">
            <img src={Logo} alt="Pprime Logo" className="w-[600px]" />
            <div className="flex flex-col justify-between items-center -mt-48">
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
