import React , {useState} from 'react'
// eslint-disable-next-line
import Expenselist from './components/Expenselist'
import Expenseform from './components/Expenseform'
import Alert        from './components/Alert'
import { v4 as uuid } from 'uuid';
import './App.css';



function App() {
  // const initialexpenses = 
const [expenses,setExpenses]= useState([

  {id: uuid(),charge:"rent", amount:0 },
    {id:uuid(),charge:"car",amount:10},
    {id:uuid(),charge:"gas",amount:10}
])
const [showaddtask,setshowaddtask]=useState(true);
const [alert,setAlert]=useState({show:false})
const [edit,setEdit]=useState(false)
const [id,setId]=useState(0)
//handle alert
const handlealert = ({type,text}) =>{
  setAlert({show:true,type,text})
  //set timer to dissapear alert
  setTimeout(() => {
    setAlert({show:false})
  }, 3000);

};
//deleteall
const delall = () => {
  console.log("inside")
  setExpenses([])
  handlealert({type:'danger',text:'all items deleted'})
}
//delete task
const deletetask = (id) => {
  console.log("inside")
setExpenses(expenses.filter((expense)=>expense.id !== id))
handlealert({type:'danger',text:'item deleted'})

}
//edit
// const handleedit = (id) => {
//   let e=expenses.find((item)=>item.id === id)
//   let{charge,amount} = e;
//   setcharge(charge)
//   setamount(amount)
//   setEdit(true)
//   setId(id)
//   //to place in same order in list

// }

  const addcharge = (task) => {
  const id = Math.floor(Math.random() * 10000 )+ 1
  const newtask= {id,...task}
  setExpenses([...expenses,newtask])
  
  
}





  return (
    <div>
    {alert.show && <Alert type={alert.type} text={alert.text}/>}
           <Alert/>
    <div className="App">
      <h1>Budget Calculator. </h1>
      <main className="App">
      <Expenseform addcharge={addcharge} alert={handlealert} onadd={()=>setshowaddtask(!showaddtask)} />
      <Expenselist expenses={expenses} ondelete={deletetask} delall={delall}/>
      </main>

      
      
    </div>
    <h1>total spending: <span className="total">
    $ {expenses.reduce((acc,curr)=>{
     return (acc += parseInt(curr.amount));
    },0)}
  </span>
     </h1>
     </div>
  );
}

export default App;
