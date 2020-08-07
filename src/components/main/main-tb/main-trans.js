import React from 'react';
import './main-trans.scss'

const MainTrans = () => {
    return (
        <div className="wrap-table">
        <table className="main-table">
            <thead>
                <tr>
                    <th className="main-table-header">
                        <input 
                        type="checkbox"/>
                    </th>
                    <th className="main-table__header">Date</th>
                    <th className="main-table__header">Operation</th>
                    <th className="main-table__header">Amount</th>
                    <th className="main-table__header">Buy</th>
                    <th className="main-table__header">Reciever</th>
                </tr>
            </thead>
            <tbody className="table-hover">
                <tr>
                    <td className="main-table__hover">
                        <input 
                            type="checkbox" />
                    </td>
                    <td className="main-table__hover">2020-08-15 13:58</td>
                    <td className="main-table__hover">Buy and transfer</td>
                    <td className="main-table__hover">50 EUR</td>
                    <td className="main-table__hover"> 0.00445534 BTC</td>
                    <td className="main-table__hover">SpotLider Casino</td>
                </tr>
            </tbody>
        </table>
        </div>
    )

}

export {
    MainTrans
}