import React from 'react'
import {MdEdit,MdDelete} from 'react-icons/md'
const Expenseitem = ({exp,ondelete}) => {
    return (
        <li className="item" >
            <div classname="info">
                <span className="expense">{exp.charge}</span>
                <span className="amount"> ${exp.amount}</span>
                </div>
                <div>
                    <button className="edit-btn" aria-label="edit button">
                    <MdEdit/>
                    </button>
                    <button onClick={()=> ondelete(exp.id)} className="clear-btn" aria-label="delete button">
                    <MdDelete/>
                    </button>
                </div>
        </li>
    )
}

export default Expenseitem
