import React, { useEffect, useState } from 'react';
import upDownIcon from '../../assets/icons/ArrowsDownUp.png';
import avatar from '../../assets/image/unsplash_rDEOVtE7vOs.png'

const TableThree = () => {
    const [isAsc, setAsc] = useState(true);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch(`https://server-table-assignment-ooloi-labs.vercel.app/users?user=${isAsc ? 'asc' : 'desc'}&&city=${isAsc ? 'asc' : 'desc'}&&email=${isAsc ? 'asc' : 'desc'}&&joiningDate=${isAsc ? 'asc' : 'desc'}&&role=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
            })
    }, [isAsc])



    function handleEvenOdd(number) {
        if (number % 2 === 0) {
            return 'even'
        }
        else {
            return 'odd'
        }
    }







    const handleEmail = () => {
        setAsc(!isAsc);
    }
    const handleJoiningDate = () => {
        setAsc(!isAsc);
    }
    const handleRole = () => {
        setAsc(!isAsc);
    }
    return (
        <div>
            format two
            <div className="overflow-x-auto ">
                <table className="table w-[920px] h-[320px]">

                    <thead>
                        <tr>



                            <th className='
                            normal-case
                            w-[220px]
                            h-[40px]
                            pl-[10px]
                            py-[8px]
                            borders
                             bg-white
                            '>
                                <div className='flex items-center'>
                                    <p className='text-[14px] text-[#383838] font-semibold'>Email Address</p>
                                    <img onClick={handleEmail} className='w-[15px] cursor-pointer hover:scale-105 h-[15px] ml-[10px] ' src={upDownIcon} alt="" />
                                </div>
                            </th>
                            <th className='
                            normal-case
                            w-[175px]
                            h-[40px]
                            pl-[10px]
                            py-[8px]
                            borders
                             bg-white
                            '>
                                <div className='flex items-center'>
                                    <p className='text-[14px] text-[#383838] font-semibold'>Joining Date</p>
                                    <img onClick={handleJoiningDate} className='w-[15px] cursor-pointer hover:scale-105 h-[15px] ml-[10px] ' src={upDownIcon} alt="" />
                                </div>
                            </th>
                            <th className='
                            normal-case
                            w-[175px]
                            h-[40px]
                            pl-[10px]
                            py-[8px]
                            borders
                             bg-white
                            '>
                                <div className='flex items-center'>
                                    <p className='text-[14px] text-[#383838] font-semibold'>Role</p>
                                    <img onClick={handleRole} className='w-[15px] cursor-pointer hover:scale-105 h-[15px] ml-[10px] ' src={upDownIcon} alt="" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            userData.map((user, idx) =>

                                <tr key={idx}>

                                    <td className={
                                        `
                                         normal-case
                            w-[220px]
                            h-[40px]
                            pl-[10px]
                            py-[8px]
                            borders
                             ${handleEvenOdd(idx + 1) === 'even' ? 'bg-white' : 'bg-[#F5F5F5]'}
                                        `
                                    }>
                                        <p className='text-[14px] link text-[#0071CC]  ml-[10]  font-[400]'>{user.email}</p>
                                    </td>
                                    <td className={
                                        `
                             normal-case
                            w-[175px]
                            h-[40px]
                            pl-[10px]
                            py-[8px]
                            borders
                             ${handleEvenOdd(idx + 1) === 'even' ? 'bg-white' : 'bg-[#F5F5F5]'}`
                                    }>
                                        <p className='text-[14px]  ml-[10]  font-[400] text-[#383838]'>{user.joiningDate}</p>
                                    </td>
                                    <td className={
                                        `
                                           normal-case
                            w-[175px]
                            h-[40px]
                            pl-[10px]
                            py-[8px]
                            borders
                             ${handleEvenOdd(idx + 1) === 'even' ? 'bg-white' : 'bg-[#F5F5F5]'}`
                                    }>
                                        <p className='text-[14px]  ml-[10]  font-[400] text-[#383838]'>{user.role}</p>
                                    </td>
                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableThree;