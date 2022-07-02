import React from "react"
import { CalendarIcon, CogIcon, UserGroupIcon, ViewBoardsIcon,ChartSquareBarIcon } from '@heroicons/react/outline'

function Sidebar(){
    return (
        <div className="sidebar_container">
          {/* <h1 className="sidebar_header">To Do List</h1>
          <ul className="sidebar_items">
            <li className="sidebar_list">
            <UserGroupIcon className="icon"/>
                    Manage
            </li>
            <li className="sidebar_list">
                <ViewBoardsIcon className="icon" />
                Board
            </li>
            <li className="sidebar_list">
                <CalendarIcon className="icon" />
                 Calender
            </li>
            <li className="sidebar_list">
            <ChartSquareBarIcon className="icon" />
                 Report
            </li>
            <li className="sidebar_list settings">
            <CogIcon className="icon" />
                 Settings
            </li>
          </ul> */}
        </div>
    )
}
export default Sidebar