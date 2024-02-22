import React from 'react'
import { useState } from 'react'

const CreateForm = ({onCreate}) => {
    const initialState = {
        name: "",
        hobby: "",
        agama: ""
      }
      // const [name, setName] = useState("")
      const [data, setData] = useState(initialState)
      const {name, hobby, agama} = data
      // const [name, setName] = useState('')
      const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
        // console.log(name)
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        onCreate(data)
        setData(initialState)
      }
      return (
        
        <>
          <form onSubmit={handleSubmit} className="" action="" method="">
            <label for="name">Nama</label>
            <input
              type="text"
              onChange={handleChange}
              value={name}
              name='name'
            />
             <label for="hobby">Hobby</label>
            <input
              type="text"
              onChange={handleChange}
              value={hobby}
              name='hobby'
            />
             <label for="agama">agama</label>
            <input
              type="text"
              onChange={handleChange}
              value={agama}
              name='agama'
            />
            <input type="submit"/>
            {/* <button>Submit</button> */}
          </form>
        </>
      );
}

export default CreateForm