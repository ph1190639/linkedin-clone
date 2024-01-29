import React from 'react'
import './Widgets.css'
import { FaCircleInfo } from "react-icons/fa6";
import { MdFiberManualRecord } from "react-icons/md";


function Widgets() {

  const newsArticle = (heading, subtitles) => (
    <div className='widgets__article'>
      <div className='widgets__articleleft'>
      <MdFiberManualRecord className='custom-icon' />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitles}</p>
      </div>
      

    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <FaCircleInfo />

      </div>
      {newsArticle("Placement offers decline at IIMs", "Top news - 10k readers")}
      {newsArticle("LSEG to hire 100", "Top news - 10058 readers")}
      {newsArticle("How Indian travels plan abroad", "Top news - 1848 readers")}
      {newsArticle("How India's unicorns are faring", "Top news - 150 readers")}
    </div>
  )
}

export default Widgets;