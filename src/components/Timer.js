
export default function Timer({minutes, seconds}) {
   
    return (  
      <div className='timer'>
        {minutes > 9 ? minutes : `0${minutes}`} 
        :
        {seconds > 9 ? seconds : `0${seconds}`}
      </div>
      )
  
    }