import React from 'react';
import { useSelector } from "react-redux";
import {selectDisplay} from '../redux/slices/displayCountrySlice'

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay)
  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>

        <table className='overview-table'>
            <tbody>
            <tr>
                <td>Borders:</td>
                <td>{currentDisplay ? currentDisplay.borders.map((el, i, arr)=> 
                    i+1===arr.length ? `${el}` : `${el}, `) : 'N/A'}</td>
            </tr>
            <tr>
                <td>Capital: </td>
                {currentDisplay.capital.map((el)=> (
                    <td key={el}>{el}</td>
                ))}
            </tr>
            <tr>
                <td>Population: </td>
                <td>{currentDisplay.population}</td>
            </tr>
            <tr>
                <td>Continents: </td>
                {currentDisplay.continents.map((el)=> (
                    <td>{el}</td>
                ))}
            </tr>
            <tr>
                <td>Independent: </td>
                <td>{currentDisplay.independent ? 'true' : 'false'}</td>
            </tr>
            <tr>
                <td>Landlocked: </td>
                <td>{currentDisplay.landlocked ? 'true' : 'false'}</td>
            </tr>
            <tr>
                <td>Member of UN: </td>
                <td>{currentDisplay.unMember ? 'true' : 'false'}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Overview