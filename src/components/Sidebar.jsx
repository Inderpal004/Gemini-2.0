import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets';
import { Context } from '../context/Context';

const Sidebar = ({ closeMenu, mobileMenu }) => {

    const [expanded, setExpanded] = useState(true);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const handleSidebar = () => {
        setExpanded(prev => !prev);
    }

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        closeMenu();
        await onSent(prompt);
    }

    return (
        <div className={`sidebar fixed top-0 left-0 transition-all duration-500 z-20 min-h-screen bg-gray-100 p-4 flex flex-col justify-between 
            ${mobileMenu ? 'w-full translate-x-0' : 'w-0 -translate-x-[400%]'}
            sm:static sm:translate-x-0 sm:w-auto sm:z-auto`}>
            <div className="top">

                <div className="flex justify-between">
                    <img onClick={handleSidebar} src={assets.menu_icon} alt="Menu" className='invisible menu w-5 h-5 ml-2 cursor-pointer sm:visible' />
                    <img onClick={() => closeMenu()} src={assets.close_icon} alt="close" className='visible menu w-8 ml-2 cursor-pointer sm:invisible' />
                </div>


                <div onClick={() => { newChat(); closeMenu() }} className="new-chat mt-6 flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-xl text-gray-500 cursor-pointer sm:mt-12">
                    <img src={assets.plus_icon} alt="New Chat" className="w-5" />
                    {expanded ? <p>New Chat</p> : null}
                </div>

                <div className="recent flex flex-col animate-fade-in mt-8">
                    {expanded ? <p className='recent-title mb-5'>Recent</p> : null}

                    {
                        prevPrompts.length === 0 ? (
                            <div className="recent-entry flex items-start gap-2 px-4 py-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300">
                                <img src={assets.message_icon} alt="Message" className="w-5" />
                                {expanded ? <p>No Recent Entry</p> : null}
                            </div>
                        ) : prevPrompts.map((item, index) => {
                            return (
                                <div key={index} onClick={() => loadPrompt(item)} className="recent-entry flex items-start gap-2 px-4 py-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300">
                                    <img src={assets.message_icon} alt="Message" className="w-5" />
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className="bottom flex flex-col">
                <div className="bottom-item recent-entry flex items-start gap-2 px-4 py-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300">
                    <img src={assets.question_icon} alt="Help" className="w-5" />
                    {expanded ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry flex items-start gap-2 px-4 py-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300">
                    <img src={assets.history_icon} alt="Activity" className="w-5" />
                    {expanded ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry flex items-start gap-2 px-4 py-2 rounded-full text-gray-800 cursor-pointer hover:bg-gray-300">
                    <img src={assets.setting_icon} alt="Settings" className="w-5" />
                    {expanded ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar