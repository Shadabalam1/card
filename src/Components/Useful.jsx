import React, { useState } from 'react'

const Useful = () => {

  const [val, setVal] = useState([
    {name: 'riyan', age:'22'},
    {name: 'nikhat', age:'20'},
    {name: 'ahmed', age:'23'}
  ])

  const onclickk = ()=> {setVal( ()=> val.map(item =>item.name ==='riyan' ? ({name: 'riyan', age:12}) : item) );}
  return (
    <>
      <div>
      
        {val.map((item)=> (
          <>
          <h1>{item.name}</h1> 
          <h1>{item.age}</h1></>
          ))}

          <button onClick={onclickk} className='bg-fuchsia-800 py-2 px-3 text-white rounded'> click</button>
      </div>
      
    </>
  )
}

export default Useful
 