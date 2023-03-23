import { useEffect, useMemo, useState } from 'react';

import './App.css'

function App({slides}) {
  const [slidesIndex, setSlidesIndex] = useState(0)
  const [prevButton, setPrevButton] = useState(false)
  const [nextButton, setNextButton] = useState(false)

  
  

useEffect(() => {
  if(slidesIndex === 0) {
    setPrevButton(true)
  }
  else {
    setPrevButton(false)
  }

  if(slidesIndex === slides.length - 1) {
    setNextButton(true)
  }
  else {
    setNextButton(false)
  }
}, [slidesIndex])

  

  const nextSlide = () => {    

    if(slidesIndex < slides.length -1)  {
      setSlidesIndex(slidesIndex + 1)
    }
    else {
      return;
    }
    
  }

  const prevSlide = () => {
    if(slidesIndex > 0) {
      setSlidesIndex(slidesIndex - 1)
    }
    
  } 
  

  const reset = () => {
    setSlidesIndex(0)
    

  }
 




  


  return (
    <div className="App">
      <div className='btn-group'>
      <button className='button' onClick={reset}  disabled={prevButton}>Reset</button>
      <button onClick={prevSlide} disabled={prevButton}>Prev</button>
      <button onClick={nextSlide} disabled={nextButton}>Next</button>
      </div>
      <div className="slider">
        <h2> {slides[slidesIndex].title}</h2>
        <p>{slides[slidesIndex].text}</p>
      </div>
    
      
    </div>
  )
}

export default App
