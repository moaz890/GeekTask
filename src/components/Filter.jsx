import { HeartFilled } from '@ant-design/icons'
import React, { cloneElement, useEffect } from 'react'
import { activeClicked, clearActiveEvents } from "../services/helperFunctions"
const Filter = () => {

    function clearSpecifiedFilters(e) {
        const filtersSpace = document.querySelector(".specified-filters-space");
        filtersSpace.innerHTML = '';
    }

    useEffect(() => {
        const filterFields = document.querySelectorAll(".filters-fields li");
        const filtersSpace = document.querySelector(".specified-filters-space");
        filterFields.forEach(filter => {
            filter.addEventListener("click", function (e) {
                const span = e.target.closest("li").querySelector(".field");
                const closeTag = document.createElement("span")
                closeTag.classList.add("close");
                closeTag.innerHTML = 'x';
                const clone = span.cloneNode(true);
                clone.appendChild(closeTag);
                filtersSpace.appendChild(clone)
            });
        });
    }, []);

    useEffect(() => {
        const filtersSpace = document.querySelector(".specified-filters-space");
        function removeFilter(e) {
            if (e.target.className === 'close') {
                e.target.parentElement.remove();
            }
        }
        filtersSpace.addEventListener("click", removeFilter);
        return () => filtersSpace.removeEventListener("click", removeFilter)
    }, [])

    
    useEffect(() => {
        const marketFilters = document.querySelectorAll(".market-filters li");
        activeClicked(marketFilters);
        return () => clearActiveEvents(marketFilters)
    }, [])

    useEffect(() => {
        const riskFilters = document.querySelectorAll(".risk-filters li");
        activeClicked(riskFilters);
        return () => clearActiveEvents(riskFilters)
    }, [])

    useEffect(() => {
        const strategyFilters = document.querySelectorAll(".strategy-filters li");
        activeClicked(strategyFilters);
        return () => clearActiveEvents(strategyFilters)
    }, [])

    useEffect(() => {
        const assetFilters = document.querySelectorAll(".asset-filters li");
        activeClicked(assetFilters);
        return () => clearActiveEvents(assetFilters)
    }, [])

    return (
        <div className='filter'>
            <h1>Filters</h1>
            <div className="specified-filters">
                <div className="specified-filters-header">
                    <h4>Filters Applied</h4>
                    <button className="clear-filters" onClick={clearSpecifiedFilters}>clear</button>
                </div>
                <div className="specified-filters-space">

                </div>
            </div>
            <div className="filters-space">
                <h3>Stock</h3>
                <div className="form">
                    <form action="">
                        <input type="text" placeholder='$Ticket' />
                    </form>
                </div>
                <div className="filters-industry">
                    <h3>Industry</h3>
                    <div className="filters-industry-fields">
                        <ul className="filters-fields">
                            <li data-field='Health care'><i className="fa-solid fa-heart-pulse"></i> <span className='field'>Health Care</span></li>
                            <li data-field='Materials'><i className="fa-solid fa-recycle"></i> <span className='field'>Materials</span></li>
                            <li data-field='Energy'><i className="fa-solid fa-bolt"></i> <span className="field">Energy</span></li>
                            <li data-field='Consumer Discretionary'><i className="fa-solid fa-indent"></i> <span className='field'>Consumer Discretionary</span></li>
                            <li data-field='Consumer Staples'><i className="fa-solid fa-cart-shopping"></i> <span className='field'>Consumer Staples</span></li>
                            <li data-field='Reat Estate'><i className="fa-solid fa-home"></i> <span className='field'>Real Estate</span></li>
                        </ul>
                        <ul className="filters-fields">
                            <li data-field='IT'><i className="fa-solid fa-wrench"></i> <span className='field'>IT</span></li>
                            <li data-field='communication'><i className="fa-solid fa-comments"></i> <span className='field'>Communications</span></li>
                            <li data-field='Industrials'><i className="fa-solid fa-industry"></i> <span className="field">Industrials</span></li>
                            <li data-field='Utilities'><i className="fa-solid fa-screwdriver-wrench"></i> <span className='field'>Utilities</span></li>
                            <li data-field='Financials'><i className="fa-brands fa-bitcoin"></i> <span className='field'>Consumer Staples</span></li>
                        </ul>
                    </div>
                </div>
                <div className="filters-categories">
                    <div className="market">
                        <h3>Market Cap</h3>
                        <ul className="market-filters">
                            <li data-market='Micro' className='active'><span className='outer'><span className="inner"></span></span> Micro</li>
                            <li data-market='Small'><span className='outer'><span className="inner"></span></span> Small</li>
                            <li data-market='Large'><span className='outer'><span className="inner"></span></span> Large</li>
                        </ul>
                    </div>
                    <div className="risk">
                        <h3>Risk Levels</h3>
                        <ul className="risk-filters">
                            <li data-level='Low' className='active'><span className='outer'><span className="inner"></span></span> Low Risk</li>
                            <li data-level='Mid'><span className='outer'><span className="inner"></span></span> Mid Risk</li>
                            <li data-level='High'><span className='outer'><span className="inner"></span></span> High Risk</li>
                        </ul>
                    </div>
                </div>
                <div className="more-filters">
                    <div className="strategy">
                        <h3>Strategy</h3>
                        <ul className="strategy-filters">
                            <li >Big Option Buys</li>
                            <li className='active'>Merger Arbitrage</li>
                            <li >Short Reports</li>
                            <li >More Strategies</li>
                        </ul>
                    </div>
                    <div className="asset">
                        <h3>Asset</h3>
                        <ul className="asset-filters">
                            <li >Stocks</li>
                            <li className='active'>Options</li>
                            <li >Features</li>
                            <li >More Assets</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className="apply-filters">Apply</button>
        </div>
    )
}

export default Filter
