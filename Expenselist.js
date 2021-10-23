import React from 'react'
// eslint-disable-next-line
import Expenseitem from "./Expenseitem"
import {MdDelete} from 'react-icons/md'
const Expenselist = ({expenses,ondelete,delall}) => {
    return (
        <>
        <ul className="list">
            {expenses.map((e)=>{
            return <Expenseitem key={e.id} exp={e} ondelete={ondelete}/>            


            })}
        </ul>
        {expenses.length > 0 && <button onClick = { () => delall()} className="btn">
            clear expenses
            <MdDelete className="btn-icon"></MdDelete>
            </button>}
        </>
    )
}

export default Expenselist
