import React , {useState} from 'react'
import {MdSend} from "react-icons/md"

const Expenseform = ({addcharge,onadd,alert,edit}) => {
     const [charge,setcharge] = useState('')
     const [amount,setamount] = useState('')

     const onsubmit = (e) =>{
        e.preventDefault()
        if(!charge){
            alert('add budget')
            return

        }
        if(charge !== "" && amount > 0){
            alert({type:'success',text:"item added"})


        }
        else{
            alert({type:'danger',text:`charge cant be empty and amount cant be zero`})

        }
    
        addcharge({charge,amount})
        setcharge('')
        setamount('')
    
    }



    return <form onSubmit={onsubmit}>
<div className="form-center">
    <div className="form-group">
    <label htmlFor="charge">charge</label>
    <input type="text" 
    className="form-control"
     id="charge"
     name="charge"
     value={charge}
     placeholder="e.g rent"
     onChange={(e)=>{setcharge(e.target.value)}}/>
    
    </div>
<div className="form-group">
    <label htmlFor="amount">amount</label>
    <input type="number" 
    className="form-control"
     id="amount"
     name="amount"
     value={amount}
     placeholder="e.g 100"
     onChange={(e)=>{setamount(e.target.value)
}}
     />
    
    </div>
    </div>
    <button type="submit" onClick={addcharge,onadd} className="btn">{edit ? 'edit' : 'submit'} <MdSend className="btn-icon"/></button>
    
    </form>
       
}

export default Expenseform
