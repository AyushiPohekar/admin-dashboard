import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.css';

const New = ({inputs,title}) => {
  const[file,setFile]=useState("");
  return (
    <div className='newPage'>
      <Sidebar/>
      <div className='newPageContainer'> <Navbar/>
      <div className="newtop">
        <h1 className='newTitle'>{title}</h1>
      </div>
      <div className="newbottom">
        <div className="newbottomleft">
          <img src={file?URL.createObjectURL(file):'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt='' className='newimage'/>
        </div>
        <div className="newbottomright">
          <form>
           <div className="newformInput">
              <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className='foldericon'/></label>
              <input type='file'  id='file' style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}className='newInput'/>
            </div>
            {inputs.map((input)=>
            (
              <div className="newformInput" key={input.id}>
              <label>{input.label}</label>
              <input type={input.type} placeholder={input.placeholder} className='newInput'/>
            </div>

            )
            
            )}
           
            
            <button>Send</button>
          </form>
        </div>
      </div>
      
      </div>
   </div>
  )
}

export default New