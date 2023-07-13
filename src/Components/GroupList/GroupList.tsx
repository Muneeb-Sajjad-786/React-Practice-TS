import { useState } from "react"
// import styles from './GroupList.module.css'
// import "../../App.css"
import styled from 'styled-components'

interface ListItemProps {
  act : string ;
}

const List = styled.ul`
list-style: none;
padding: 0;
`;


const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.act === "true" ? "blue" : "none")};
`

interface Props {
  items: string[];
  Heading: string;
  onSelectedItem: (item: string) => void;
}


function GroupList ({items, Heading, onSelectedItem}: Props) {



   const [selectedIndex, setSelectedIndex] = useState(0)

  
  
    return <>


  <h1>{Heading}</h1>
  
<List style={{background:"yellow"}}>
  {items.length === 0 && <p>Item not Found</p>}
  {items.map((item:string, index:number)=>

  
  <ListItem
 
  act = { (index === selectedIndex ) ? "true" : "false"}
  
  key={item}
   className = {selectedIndex === index ? "list-group-item active" : "list-group-item"}
   onClick={ () => {
     setSelectedIndex(index);
     onSelectedItem(item);

     
    }
  }
    >
    {item}
    </ListItem>)}
</List>
    
    </>
}


export default GroupList

