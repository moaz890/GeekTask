import React from 'react'
import logo from "../images/logo-04.png";
import avatar from "../images/avatar.png"
import { BellFilled, AreaChartOutlined, StockOutlined, PicCenterOutlined, SettingFilled, FolderOpenFilled } from '@ant-design/icons';
const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="menu">
                    <li className='available'>
                        <a href="#">
                            <BellFilled />
                            <div className="text">Alerts</div>
                        </a>
                    </li>
                    <li className='available'>
                        <a href="#">
                            <PicCenterOutlined />
                            <div className="text">Training</div>
                        </a>
                    </li>
                    <li className='not-available'><a href="#"><SettingFilled /><div className="text">Automation</div></a></li>
                    <li className='not-available'><a href="#"><FolderOpenFilled /><div className="text">Portfolio</div></a></li>
                    <li className='not-available'><a href="#"><AreaChartOutlined /><div className="text">Trading</div></a></li>
                </ul>
                <div className="profile">
                    <div className="info">
                        <img src={avatar} alt="" />
                        <div className="text">
                            <div className="name">Moni Roy</div>
                            <div className="state">Begginer</div>
                        </div>
                    </div>
                    <div className="suite-version text">Street Suite . 2.0</div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
