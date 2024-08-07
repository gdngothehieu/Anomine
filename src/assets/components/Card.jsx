import React from 'react'
import "./Card.css"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import Banner from './Banner';
function Card({onClickMovieCard,item,...props}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

  return (
    
    <div className='card'>
        <div>      
          </div>
    <div class="" onClick={()=>{onClickMovieCard(item)}}  >
            <div 
            className='movie-card'
            style={{
                background:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("${item.image}")`,
                backgroundRepeat: "no-repeat",
                height: "240px",
                maxWidth: "1200px"
            }}>
                <div className="episode-title">

                <p  className="episode">Episode: {item.episode}</p>

                <p className="movie-name">{item.movieName}</p>
                </div>


            </div>
            <div class="h-6">

            </div>
        <div class="px-5 pb-5">
          
            <div class="flex items-center mt-2.5 mb-5">

            </div>
        </div>
    </div>
    </div>
  )
}

export default Card