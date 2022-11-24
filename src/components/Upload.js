import React, { useState } from 'react'

const Upload = (props) => {
  const [file, setFile] = useState('')

  const handleChange = (e) => {
    const data = e.target.files[0]
    setFile(data)
  }
  return (
    <div>
      <input type="file" onChange={handleChange} />
      {file &&

        <div>
          <span>{file.name}</span>
          <img src={URL.createObjectURL(file)} />
        </div>
      }
    </div>
  )
}
export default Upload;