import React from 'react';
import reactDom from 'react-dom';
import Cards from './Cards'
import "./index.css"
import data from "./Data"

reactDom.render(
  <>
  <h1 className='heading'>List of top 10 netflix series</h1>
  {data.map((val)=>{
    return <Cards 
      key={val.id}
      imgscr={val.imgscr}
      category={val.category}
      sname={val.sname}
      links={val.links}
    />
  })};
  </>
,document.getElementById('root')
)