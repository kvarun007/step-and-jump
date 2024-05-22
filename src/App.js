import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect} from 'react';
import Modal from './modal';
import Form from './components/form';
import Result from './components/result';

function App() {
  const [value, setValue] = useState(new Date());
  const [formInput, setFormInput] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    //console.log(value);
  }, [value]);

  function handleCreateEvent(){
    console.log(value);
    handleOpen();
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    
    
    
    
  
  return (
    <>
    <header className='w-80 h-12 border mx-auto rounded-md bg-cwhite border-cwhite'>
      <div className='my-2 mr-2 text-right'>
        <button className='border w-16 rounded-md text-sm bg-white border-cwhite py-1' onClick={(e)=>{setValue(new Date())}}>Today</button>
        <button className='border w-28 text-sm bg-green rounded-md text-cwhite ml-1 py-1' onClick={(e) => {handleOpen()}}>Create Event</button>
      </div>
      
    </header>
    <div className='border w-80 mx-auto mt-2 border-cwhite bg-cwhite min-h-full'>
      <div className='w-64 mx-auto mt-4'>
        <Calendar onChange={setValue}  value={value} />
      </div>
      <div>
      <Modal isOpen={open} onClose={handleClose}>
        <>
          <Form keys={value} onClose={handleClose}/>
        </>
      </Modal>
      </div>
      <Result steps={localStorage.getItem(value +"1")} jumps={localStorage.getItem(value +"2")}/>
    </div>

    <div> 
      
    </div>
  
    </>
    

    
  );
}

export default App;
