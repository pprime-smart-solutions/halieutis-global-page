import Logo from './assets/pprime.png';

function App() {
    return (
        <div className='flex flex-col justify-center items-center h-screen -mt-36'>
            <img src={Logo} alt="Pprime Logo" className='w-[650px]' />
            <div className='-mt-20'>
                <a href='http://192.168.1.6:5001' className='border-4 border-[#06402B] text-[#06402B] px-20 py-4 rounded-full m-2 font-semibold hover:bg-[#06402B] hover:text-white transition-all'>
                    POil
                </a>
                <a href='http://192.168.1.6:5002' className='border-4 border-[#333A73] text-[#333A73] px-20 py-4 rounded-full m-2 font-semibold hover:bg-[#333A73] hover:text-white transition-all'>
                    PFish
                </a>
                <a href='http://192.168.1.6:5003' className='border-4 border-[#022213] text-[#022213] px-20 py-4 rounded-full m-2 font-semibold hover:bg-[#022213] hover:text-white transition-all'>
                    PBoiler
                </a>
                <a href='http://192.168.1.6:5004' className='border-4 border-[#0569FA] text-[#0569FA] px-20 py-4 rounded-full m-2 font-semibold hover:bg-[#0569FA] hover:text-white transition-all'>
                    PEnergy
                </a>
                <a href='http://192.168.1.6:5005' className='border-4 border-[#2E4769] text-[#2E4769] px-20 py-4 rounded-full m-2 font-semibold hover:bg-[#2E4769] hover:text-white transition-all'>
                    PWater
                </a>
            </div>
        </div>
    )
}

export default App
