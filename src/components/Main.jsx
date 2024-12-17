import React from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { Context } from '../context/Context'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';

const Main = ({setMobileMenu}) => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const { user } = useUser();

    const notify = ()=>{
        toast.error("Oops! You haven't login yet.",{position: "bottom-right",autoClose: 3000,})
    }

    return (
        <div className='main flex-1 flex-col min-h-screen pb-[15vh] relative'>
            <div className="nav flex justify-between items-center px-6 py-4 text-gray-600 text-lg">
            <img onClick={()=> setMobileMenu(true)} src={assets.menu_icon} alt="Menu" className='menu w-5 ml-2 cursor-pointer sm:hidden' />

                <p className="text-3xl font-semibold">Gemini</p>

                <SignedOut>
                    <SignInButton className="text-sm py-2 px-4 bg-gray-900 text-neutral-200 rounded-full" />
                </SignedOut>
                <SignedIn>
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "w-10 h-10"
                            }
                        }} />
                </SignedIn>
            </div>

            <div className="main-container max-w-4xl mx-auto">

                {
                    !showResult ? <>
                        <div className="greet my-12 text-gray-400 text-[35px] sm:text-5xl font-medium px-5">
                            <p><span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent font-semibold">Hello, {user ? user.firstName+"." : " Dev."}</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
                            <div className="card h-52 p-4 bg-gray-100 rounded-lg relative hover:bg-gray-200 cursor-pointer">
                                <p className="text-gray-600 text-base leading-6">Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass Icon" className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2" />
                            </div>
                            <div className="card h-52 p-4 bg-gray-100 rounded-lg relative hover:bg-gray-200 cursor-pointer">
                                <p className="text-gray-600 text-base leading-6">Breifly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb Icon" className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2" />
                            </div>
                            <div className="card h-52 p-4 bg-gray-100 rounded-lg relative hover:bg-gray-200 cursor-pointer">
                                <p className="text-gray-600 text-base leading-6">Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message Icon" className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2" />
                            </div>
                            <div className="card h-52 p-4 bg-gray-100 rounded-lg relative hover:bg-gray-200 cursor-pointer">
                                <p className="text-gray-600 text-base leading-6">Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code Icon" className="w-9 p-1 bg-white rounded-full absolute bottom-2 right-2" />
                            </div>
                        </div>
                    </> : <div className="result px-[5%] max-h-[73vh] overflow-y-scroll scrollbar-hide">
                        <div className="result-title my-10 flex items-center gap-5">
                            {
                                user ? <img src={user.imageUrl} alt="" className="w-10 h-10 rounded-full" /> : <img src={assets.user} alt="" className="w-10 h-10 rounded-full" />
                            }
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data flex items-start gap-5">
                            <img src={assets.gemini_icon} alt="" className="w-10 h-10 rounded-full" />
                            {
                                loading ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div> : <p className='text-[17px] font-light leading-relaxed' dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>}

                <div className="main-bottom mt-8 px-5 py-2.5 absolute w-full max-w-[900px] m-auto bottom-0 bg-white">
                    <div className="search-box flex items-center gap-4 py-2 px-4 bg-gray-100 rounded-full">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" className="w-[95%] sm:flex-1 bg-transparent outline-none text-md sm:text-lg p-2" />
                        <div className="flex items-center gap-3">
                            <img onClick={() => user ?  onSent() : notify()} src={assets.send_icon} alt="Send Icon" className="w-6 cursor-pointer" />
                        </div>
                    </div>
                    <p className='bottom-info mt-2 text-xs text-center text-gray-500 font-light'>
                        Gemini may display inaccurate information, including about people, so double-check its response. Your privacy and Gemini apps.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main