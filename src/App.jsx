import Logo from './assets/pprime.png';
import POil from './assets/POil.svg';
import PFish from './assets/PFish.svg';
import PBoiler from './assets/PBoiler.svg';
import PEnergy from './assets/PEnergy.svg';
import PWater from './assets/PWater.svg';
import PSense from './assets/PSense.svg';
import PDever from './assets/PDever.png';

function App() {
    return (
        <div className='flex flex-col justify-center items-center h-screen -mt-32'>
            <img src={Logo} alt="Pprime Logo" className='w-[750px]' />
            <div className='flex flex-col justify-between items-center -mt-28'>
                <div className='flex justify-baseline items-center'>
                    <a href='http://192.168.1.10:8024' className='m-12 p-3 rounded-md'>
                        <img src={PFish} alt="" width={150} />
                    </a>
                    <a href='http://192.168.1.10:8022' className='m-8 p-3 rounded-md'>
                        <img src={PEnergy} alt="" width={170} />
                    </a>
                    <a href='http://192.168.1.10:8020' className='m-8 p-3 rounded-md'>
                        <img src={PBoiler} alt="" width={150} />
                    </a>
                    <a href='http://192.168.1.10:8021' className='m-8 p-3 rounded-md'>
                        <img src={POil} alt="" width={140} />
                    </a>
                </div>
                <div className='flex justify-between items-center'>
                    <a href='http://192.168.1.10:8023' className='m-8 p-3 rounded-md'>
                        <img src={PWater} alt="" width={150} />
                    </a>
                    <a href='http://192.168.1.10:8026' className='m-8 p-3 rounded-md'>
                        <img src={PSense} alt="" width={150} />
                    </a>
                    <a href='http://192.168.1.10:8025' className='m-8 p-3 rounded-md'>
                        <img src={PDever} alt="" width={110} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App;