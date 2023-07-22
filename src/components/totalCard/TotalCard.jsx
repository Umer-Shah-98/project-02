import React from 'react'
import CategoryCard from '../categoryCard/CategoryCard'
import UncategorizedIcon from '../../assets/uncategorized-icon.png'
import { useBudgets } from '../budgetContext/BudgetContext'
import { currencyFormatter } from '../../utils'

export default function TotalCard (props) {
    let progressStyle={
        width:150,
        height:150,
        // position: 'absolute',
        left: 150,
        marginLeft: 50,
       }
  const {budgets,expenses} =useBudgets()
  const amount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const max = budgets.reduce(
    (total, budgets) => total + budgets.max,
    0
  );
  if(max===0)return null
 let  progress=(amount*100)/max
 let title=(<div>
    <div className='flex justify-around mb-3'><div className='mr-5 w-4 h-4 text-center rounded-sm' style={{background:'#D3D3D3'}}></div><div><h1>Available : <span>{currencyFormatter.format(max-amount)}</span></h1></div></div>
    <div className='flex'><div className='mr-5 w-4 h-4 text-center rounded-sm' style={{background:'#FF0800'}}></div><div><h1>Expenses : <span>{currencyFormatter.format(amount)}</span></h1></div></div>
 </div>);
 let available=(<div className='text-center'><h1 className='font-semibold'>Available</h1><span className='font-bold'>{currencyFormatter.format(max-amount)}</span><div className='mt-2'><span className='font-semibold'>Spent</span></div></div>);
  return (
    <>
    <div style={{height:200}} className="grid m-5 grid-cols-[70%_25%]">
          {/* <div className="total-card"> */}
      <CategoryCard trailColor={'#D3D3D3'} style={progressStyle} size={{width:550,height:200}} amount={amount} max={max} title={title} {...props} progress={progress.toFixed(2)} color={'#FF0800'} info={{marginLeft:100}} available={available}/>
          
          <div className="flex flex-col gap-4">
            <div style={{height:92}} className="w-full bg-white rounded-lg">
    <div className='m-4 ml-8'>
        <div>
        <h1 className='text-lg font-bold'>Monthly Budget</h1>
        <div className='mt-2'>
        <span className='font-bold m-3 text-green-600'>{currencyFormatter.format(max)}</span>
        </div>
        </div>
    </div>
            </div>
            <div style={{height:92}} className="w-full  bg-white rounded-lg">
            <div className='m-4 ml-8'>
        <div>
        <h1 className='text-lg font-bold'>Total Expenses</h1>
        <div className='mt-2'>
        <span className='font-bold m-3 text-green-600'>{currencyFormatter.format(amount)}</span>
        </div>
        </div>
    </div>
            </div>
          </div>
          </div>
      </>
  )
}
