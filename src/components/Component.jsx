import React, {useState} from 'react'
import TitleWithButton from './titleWithButton/TitleWithButton'
import AddExpenseModal from './addExpenseModal/AddExpenseModal';

const Component = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  function handleClose() {
    setShowModal(false);
  }
  function handleOpen() {
    setShowModal(true);
    console.log('called');
  }
  function handleCloseBudgetModal() {
    setShowBudgetModal(false);
  }
  function handleOpenBudgetModal() {
    setShowBudgetModal(true);
    console.log('called');
  }
    // let style={
    //   backgroundColor:'black',
    //   color:'white'
    // }
  return (
    <div className='flex justify-end items-start'>
      {/* <div className='ml-5 m-2'><h1 className='font-bold text-lg'>Home</h1></div> */}
      <div className='flex items-start'>
      {/* <div className=''><TitleWithButton color={'red-500'} textColor={'red-500'} /></div> */}
      <div className=''><TitleWithButton style={{backgroundColor:'#228B22',color:'white'}} buttonName={'Add Budget'} handleOpenBudgetModal={handleOpenBudgetModal} handleCloseBudgetModal={handleCloseBudgetModal} showBudgetModal={showBudgetModal}/></div>
      <div className=''><AddExpenseModal style={{backgroundColor:'#FF4433',color:'white'}} buttonName={'Add Expense'} handleOpen={handleOpen} handleClose={handleClose} showModal={showModal}/></div>
      </div>
      
    </div>
  )
}

export default Component;
