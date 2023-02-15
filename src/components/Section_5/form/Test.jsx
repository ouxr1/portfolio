import React, { useState } from 'react'

function Test() {
    
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')



    const [error,setError]=useState(false)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(firstNameName.length==0||lastName.length==0){
            setError(true)
        }
        console.log(firstName,lastName)
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={e=>setFirstName(e.target.value)}/>
            </div>
            {error&&firstName.length<=0?
            <label>First name can't be empty</label>:''}
            <div>
                <input onChange={e=>setLastName(e.target.value)}  />
            </div>
            {error&&lastName.length<=0?
            <label >
                last name can't be empty
            </label>:''}
            <div>
                <input onChange={e=>setEmail(e.target.value)}  />

            </div>
            {error&&email.length<=0?
            <label>
            email can't</label>:''}

            <div>
                <button>
                    Submit
                </button>
            </div>
        </form>
        
    </>
  )
}

export default Test