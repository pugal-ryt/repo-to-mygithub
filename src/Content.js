import React from 'react'

export const Content = () => {

    function handleNameChange() {
        
        const names = ["Learn", "Earn", "Grow"];
        const int = Math.floor(Math.random()*3);
        return names[int];
      }

  return (
    <div>
    
     <p>lets {handleNameChange()} Money</p>
    </div>
  )
}
