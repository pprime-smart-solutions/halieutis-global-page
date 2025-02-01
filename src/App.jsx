import Logo from './assets/pprime.png';

function App() {
    return (
        <div className='flex flex-col justify-center items-center h-screen -mt-52'>
            <img src={Logo} alt="Pprime Logo" className='w-[750px]' />
            <div className=''>
                <a href='http://192.168.1.6:5001' className='border-4 border-[#06402B] text-[#06402B] bg-white text-xl px-20 py-10 rounded-3xl m-2 font-semibold transition-all'>
                    POil
                </a>
                <a href='http://192.168.1.6:5002' className='border-4 border-[#333A73]  text-[#333A73] bg-white text-xl px-20 py-10 rounded-3xl m-2 font-semibold transition-all'>
                    PFish
                </a>
                <a href='http://192.168.1.6:5003' className='border-4 border-[#022213]  text-[#022213] bg-white text-xl px-20 py-10 rounded-3xl m-2 font-semibold transition-all'>
                    PBoiler
                </a>
                <a href='http://192.168.1.6:5004' className='border-4 border-[#F4CE14]  text-[#F4CE14] bg-white text-xl px-20 py-10 rounded-3xl m-2 font-semibold transition-all'>
                    PEnergy
                </a>
                <a href='http://192.168.1.6:5005' className='border-4 border-[#2E4769]  text-[#2E4769] bg-white text-xl px-20 py-10 rounded-3xl m-2 font-semibold transition-all'>
                    PWater
                </a>
            </div>
        </div>
    )
}

export default App;