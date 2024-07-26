import React from 'react'
import "./Card.css"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
function Card({item,...props}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

  return (
    <div className='card'>
        <div>
      

      <Dialog
      className='ml-96 w-auto'
      open={open} handler={handleOpen}>
        <DialogHeader className='text-center'>{item.movieName}</DialogHeader>
        <DialogBody className='ml-20'>
          <img src={item.image} />
        </DialogBody>
        <DialogBody className='w-96'>
        {item.description}
      </DialogBody>
      <DialogBody className='w-96'>
        Tập: {item.episode}
      </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
      
          </div>
    <div class="" onClick={()=>{setOpen(true)}}  >
            <div 
            style={{
                background:` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url("${item.image}")`,
                height: "240px",
                backgroundRepeat: "repeat-y",

            }}>
                <div className="episode-title">

                <h5  className="movie-name">Episode: {item.episode}</h5>

                <h5 class="movie-name">{item.movieName}</h5>
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