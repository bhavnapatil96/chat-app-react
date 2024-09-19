import { useEffect, useState } from 'react';
import moment from 'moment';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { groups, userData, messages } from '../data/mockup.js'

function MessageBubble() {
    const [loggedInUser, setLoggedInUser] = useState('3')
    const [selfMessages, setSelfMessages] = useState([]);
    const [groupMessages, setGroupMessages] = useState([]);

    useEffect(() => {
        const userMsgs = messages.filter((msg, i) => msg.from)
                        .sort((a,b) => moment(a.time).format('YYYYMMDD') - moment(b.time).format('YYYYMMDD'));
        setSelfMessages(userMsgs);
    }, [])
    const getUserDetail = (fromId) => {
        return userData.find((u,i) => u.id == fromId)
    }
    return (
        <div className='p-4 flex flex-col gap-5 h-full flex-1 overflow-auto'>
                <span className='w-full block text-xs font-normal leading-[14px] text-[#666668] text-center'>{moment().format('DD/MM/YYYY')}</span>
                <div className='flex flex-col gap-4'>
                    {
                        selfMessages.map((msg, i) => {
                            let user = getUserDetail(msg.from)
                            return <div className={clsx( msg.from == loggedInUser ? 'self flex gap-2': 'group flex gap-2')}>
                                <div className='h-max relative'>
                                    {msg.from !== loggedInUser && <img src={user.profile} alt={user.name} className='w-8 h-8 rounded-full overflow-hidden'/>}
                                    {msg.from !== loggedInUser && <div className='status w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-white'></div>}
                                </div>
                                <div className={clsx( msg.from == loggedInUser ? 'self max-w-[45%] bg-[#007AFF] ml-auto min-h-[39px] py-1 px-2 rounded-md w-max flex gap-2 relative before:content-[""] before:absolute before:top-0 before:-right-[8px] before:border-r-[12px] before:border-r-transparent before:border-t-[12px] before:border-t-[#007AFF]': 'group max-w-[45%] flex flex-col bg-[#F2F2F7] mr-auto min-h-[39px] py-1 px-2 rounded-md w-max relative before:content-[""] before:absolute before:top-0 before:-left-[8px] before:border-l-[12px] before:border-l-transparent before:border-t-[12px] before:border-t-[#F2F2F7] after:content-[""] after:absolute after:bottom-0 after:')}>
                                    
                                        
                                {msg.from !== loggedInUser && <span className='w-full text-xs font-normal leading-[14px] text-[#666668]'>{user.dept}</span>}
                                
                                    <p className={clsx(msg.from == loggedInUser ? 'text-sm font-normal leading-5 text-white' : 'text-sm font-normal leading-5 text-[#2C2C2E]')} >{ msg.text }</p>
                                    <div className='flex mt-auto gap-1 items-center'>
                                        <span className={clsx( msg.from == loggedInUser ? 'text-xs font-normal leading-[14px] text-white mt-auto' : 'text-xs font-normal leading-[14px] text-[#666668] mt-auto text-right')}>{ moment(msg.time).format('hh:mm A') }</span>
                                        {
                                        msg.from == loggedInUser && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
                                            <path d="M11.7931 1.00047L4.63338 8.87898L1.142 5.53966" stroke="#81E299" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.7401 1.00006L9.57997 8.87898L6.98385 6.42009" stroke="#81E299" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        }
                                        </div>
                                </div>
                                </div>
                        })
                    }
                </div>
        </div>
    );
  }
  
  export default MessageBubble;
  