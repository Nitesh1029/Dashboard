import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsArrowDown, BsInbox, BsPrescription, BsHeptagonFill, BsHexagon, BsHexagonFill, BsHexagonHalf, BsFillHexagonFill, BsFillHouseExclamationFill, BsKeyFill, BsHeptagon, BsHeadphones } from 'react-icons/bs'

function SideBar() {
    return (
        <div className='sidebar'>
            <aside>
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <BsHexagonFill className='icon_header' />Dashboard
                    </div>
                </div>

                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>
                        <a href=''>
                            <BsKeyFill className='icon' />Dashboard
                        </a>
                    </li>

                    <li className='sidebar-list-item'>
                        <a href=''>
                            <BsFillArchiveFill className='icon' />Product
                        </a>
                    </li>

                    <li className='sidebar-list-item'>
                        <a href=''>
                            <BsPeopleFill className='icon' />Customer
                        </a>
                    </li>

                    <li className='sidebar-list-item'>
                        <a href=''>
                            <BsInbox className='icon' /> Income
                        </a>
                    </li>

                    <li className='sidebar-list-item'>
                        <a href=''>
                            <BsPrescription className='icon' />Promote
                        </a>
                    </li>

                    <li className='sidebar-list-item'>
                        <a href=''>
                            <BsHeadphones className='icon' />Help
                        </a>
                    </li>
                </ul>

            </aside>
            
        </div>

    )
}

export default SideBar
