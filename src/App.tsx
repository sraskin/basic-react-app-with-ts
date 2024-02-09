import ListGroup from './components/ListGroup'
import Button from './components/Button'
import Alert from './components/Alert'
import { useState } from 'react'

function App() {
   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
   const handleSelectItem = (item: string) => {
      console.log(item)
   }
   const [alertVisible, setAlertVisibility] = useState(false)
   return (
      <div>
         {alertVisible && (
            <Alert onClose={() => setAlertVisibility(false)}>
               This is a primary alert—check it out!
            </Alert>
         )}
         <ListGroup
            items={items}
            headings='List of Items'
            onSelectItem={handleSelectItem}
         />
         <Button onClick={() => setAlertVisibility(true)}>Click me</Button>
      </div>
   )
}

export default App
