import { useEffect, useState } from 'react';
import { groups, userData } from '../data/mockup.js'
function Header() {
  const [members, setMembers] = useState([]); 
  const [selectedGroup, setSelectedGroup] = useState(1);  

  const getMembers = () => {
    let user = userData.filter((u, i) => u.groupId.includes(selectedGroup))
     setMembers(user)
  }
  useEffect(() => {
    getMembers()
  }, [])
  return (
    <div className="header flex items-center justify-between pt-[17px] pb-[15px] pl-[13px] pr-6 border-b-1 border-[#E5E5EA] shadow-[0px_-1px_0px_0px_#E5E5EA_inset]">
        <div className='flex relative'>
            {
                members.map((member, i) => {
                    return <div className='flex rounded-full sm:w-10 sm:h-10 w-7 h-7 overflow-hidden first:ml-0 -ml-[10px] border-2 border-white cursor-pointer'>
                        <img src={member.profile} alt={member.name}/>
                    </div>
                })
            }
        </div>                    
        <div className='flex flex-col justify-center items-center gap-1'>
            <div className='flex gap-2 items-center'>
                <img src={groups[0].icon} alt={'group name'} className='w-[18px] h-[18px]'/>
                <h6 className='text-sm leading-[18px] font-semibold'>{groups[0].name}</h6>
            </div>
            <span className='text-xs font-normal leading-[14px] text-[#666668]'>Last seen 45 minutes</span>
        </div>
        <div className='w-4 h-4 flex justify-center items-center cursor-pointer'>
            <svg width="16" height="3" viewBox="0 0 16 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.67157 2.32843 0 1.5 0C0.671573 0 0 0.67157 0 1.5C0 2.32843 0.671573 3 1.5 3Z" fill="#666668"/>
                <path d="M8 3C8.82843 3 9.5 2.32843 9.5 1.5C9.5 0.67157 8.82843 0 8 0C7.17157 0 6.5 0.67157 6.5 1.5C6.5 2.32843 7.17157 3 8 3Z" fill="#666668"/>
                <path d="M16 1.5C16 2.32843 15.3284 3 14.5 3C13.6716 3 13 2.32843 13 1.5C13 0.67157 13.6716 0 14.5 0C15.3284 0 16 0.67157 16 1.5Z" fill="#666668"/>
            </svg>
        </div>
    </div>
  );
}

export default Header;
