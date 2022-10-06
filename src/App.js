import React from "react"
import './App.css';
import logo from "./logo.svg"
import data from "./data.json"

export function App() {

  const dataWeekRounded = data.map((element) => {
    return (Math.round(element.amount))
  })

  const max = Math.max(...dataWeekRounded)

  const dataWeekRoundedToPercent = dataWeekRounded.map((element)=>{
    return(Math.round((element*100)/max)-1)
  })

  const dataWeek = data.map((element) => {
    return element.amount
  })

  const totalAmount = (dataWeek.reduce((previousValue, currentValue) => { return previousValue + currentValue }, 0)).toFixed(2)

  return (
    <main>
      <div className="top-div">
        <div className="amount-div">
          <h2 className="myBalance">My Balance</h2>
          <p className="myBalanceAmount">€921.48</p>
          <img className="logoImage" src={logo} alt="logo"></img>
        </div>
        <div className="graphs-div">
          <h1>Spending - Last 7 days</h1>
          <div className="chart-div">
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[0]}` }} className="bar-1"></div>
            <div className = "moneyDisplay1"style={{"--valueForMoneyDisplay": `${100 - dataWeekRoundedToPercent[0]}`}}>€{dataWeek[0]}</div>
            <p>Mon</p>
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[1]}` }} className="bar-2"></div>
            <div className = "moneyDisplay2"style={{"--valueForMoneyDisplay": `${100- dataWeekRoundedToPercent[1]}`}}>€{dataWeek[1]}</div>
            <p>Tue</p>
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[2]}` }} className="bar-3"></div>
            <div className = "moneyDisplay3"style={{"--valueForMoneyDisplay": `${100- dataWeekRoundedToPercent[2]}`}}>€{dataWeek[2]}</div>
            <p>Wed</p>
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[3]}` }} className="bar-4"></div>
            <div className = "moneyDisplay4"style={{"--valueForMoneyDisplay": `${100- dataWeekRoundedToPercent[3]}`}}>€{dataWeek[3]}</div>
            <p>Thurs</p>
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[4]}` }} className="bar-5"></div>
            <div className = "moneyDisplay5"style={{"--valueForMoneyDisplay": `${100- dataWeekRoundedToPercent[4]}`}}>€{dataWeek[4]}</div>
            <p>Fri</p>
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[5]}` }} className="bar-6"></div>
            <div className = "moneyDisplay6"style={{"--valueForMoneyDisplay": `${100- dataWeekRoundedToPercent[5]}`}}>€{dataWeek[5]}</div>
            <p>Sat</p>
            <div style={{ "--value": `${110 - dataWeekRoundedToPercent[6]}` }} className="bar-7"></div>
            <div className = "moneyDisplay7"style={{"--valueForMoneyDisplay": `${100- dataWeekRoundedToPercent[6]}`}}>€{dataWeek[6]}</div>
            <p>Sun</p>
          </div>
          <p className="divider"></p>
          <div className="spend-div">
            <h2 className="totalMonth">Total this month</h2>
            <p className="totalMoney">€{totalAmount}</p>
            <p className="percentage">+2.4%</p>
            <p className="fromLastMonth">from last month</p>
          </div>
        </div>
      </div>
    </main>
  )
}