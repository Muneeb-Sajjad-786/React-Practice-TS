import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button/Button";
import GroupList from "./Components/GroupList"
import ShowAlert from "./Components/ShowAlert";
import CalenderIcon from "./Components/CalenderIcon";
import Like from "./Components/Like";



function App () {
  let items = ['San Fransisco', 'Chicago', 'Paris', 'Berlin']

  const handleSelectItem = (item: string) => {
    console.log(item);
    
  }

  let [showAlert, hideAlert] = useState(false)

  return <>
    < GroupList items = {items} Heading = 'Cities' onSelectedItem = {handleSelectItem} />

    
   
    <Alert>
       <div>Hello <span> World </span>  </div>
    </Alert>
   
    { showAlert === true &&
    <ShowAlert hideAlert= {()=>{hideAlert(false)}} />
  }

      <Button color="primary"  onClick={()=> {hideAlert(true)}}/>
    
    <CalenderIcon />

    <Like onClick = {() => {console.log("clicked");
    }} />

  </>

}


export default App