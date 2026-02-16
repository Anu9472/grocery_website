import React from 'react'

const Button = (props) => {
  return (
    
   <button className=" bg-gradient-to-r from-orange-400 to-orange-500 px-8 py-3 text-white rounded-lg font-semibold shadow-lg text-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer">
  {props.content}
</button>

   
   
  )
}

export default Button
