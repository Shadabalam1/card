import React from 'react'

const Card = () => {

  const data =[
    {
      pic: 'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',
      title: 'Amozon',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur totam deserunt tenetur.',
      stock:'true'
    },
    {
      pic: 'https://images.unsplash.com/photo-1592042221673-7320147c7482?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGUlMjB0dnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'apple',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ',
      stock:true

    },
    {
      pic: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2t8ZW58MHx8MHx8fDA%3D',
      title: 'Facebook',
      description: 'Lorem ipsum dolor sit amet consectetur ',
      stock:false

    }
  ]

  return (
    <div className=" w-full p-4 h-screen bg-zinc-200 flex justify-center gap-4 items-center ">
      
     {data.map((elem, index)=> (
      <div key={index} className=' w-52 h-fit bg-zinc-100  rounded-md overflow-hidden '>
      <div className=' w-52 h-32 bg-zinc-300 '>
        <img className='w-full h-full object-cover ' src={elem.pic} alt="" />
      </div>
      <div className=' w-full px-3 py-4 '>
        <h1 className='font-semibold'>{elem.title}</h1>
        <p className=' text-xs  mt-5'>{elem.description}</p>
        <h3 className={`' ${elem.stock ? "bg-blue-400" : "bg-red-400"} mt-2 p-2 text-xs rounded font-mono w-fit '`}>{elem.stock ? 'In stocK' : 'Out of stock'}</h3>
      </div>
      
     
      </div>
     ))}

    </div>
  )
}

export default Card
