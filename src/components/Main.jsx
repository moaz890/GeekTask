import { BellFilled, CreditCardOutlined, FileTextFilled, FileTextTwoTone, SearchOutlined, StockOutlined, TagFilled } from '@ant-design/icons'
import { nanoid } from '@reduxjs/toolkit'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { activeClicked, clearActiveEvents } from '../services/helperFunctions'

const Main = () => {

    const { data } = useSelector(state => state.alerts);

    useEffect(() => {
        const alerts = document.querySelectorAll(".alerts li");
        activeClicked(alerts)
        return () => clearActiveEvents(alerts);
    }, [])

    return (
        <div className='main'>
            <div className="main-header">
                <h1>ALERTS</h1>
                <div className="form">
                    <form action="">
                        <input type="text" placeholder='Search By....' />
                        <SearchOutlined />
                    </form>
                </div>
                <a href="#">
                    <BellFilled />
                    <span className='noti-count'>6</span>
                </a>
            </div>
            <div className="main-body">
                {data &&
                    <ul className="alerts">
                        {data.map(alert =>
                            <li key={nanoid(5)}>
                                <div className={`alerts-item has-faq`}>
                                    <div className='alerts-item-name'>
                                        <TagFilled />
                                        {alert.name}
                                    </div>
                                    <div className='alerts-item-value'>
                                        <FileTextFilled />
                                        {alert.value}
                                    </div>
                                    <div className='alerts-item-stock'>
                                        <StockOutlined />
                                        {alert.state === 'o' ? <span className='orange'>-0.25 %</span> : <span className='green'>-0.25 %</span>}
                                    </div>
                                    <div className='alerts-item-risk'>
                                        <CreditCardOutlined />
                                        {alert.risk === 'h' ? 'High Risk' : 'Low Risk'}
                                    </div>
                                </div>
                                <div className="faq" >
                                    <p><span className="bold">$TSLA</span> just announced an aquistion on <span className="bold">$NFLX</span> at <span className="bold">$200B.</span></p>
                                    <p>This is an <a href="#" className='opportunity'>arbitrage opportunity</a> , with the max gain being %X if the deal closes but the possible risk is %y if the deal fails, if the deal success is % and therefore the recommended play is <a href="#" className="opportunity">long/short</a> $ABC</p>
                                </div>
                            </li>
                        )}
                    </ul>
                }
            </div>
        </div>
    )
}

export default Main
