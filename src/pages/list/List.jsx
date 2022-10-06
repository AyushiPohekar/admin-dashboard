import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './list.css';
import Datatable from '../../components/datatable/Datatable';


const List = () => {
  return (
    <div className='sidelist'>
      <Sidebar/>
      <div className="sidelistContainer">
        <Navbar/>
       <Datatable/>
      </div>
    </div>
  )
}

export default List