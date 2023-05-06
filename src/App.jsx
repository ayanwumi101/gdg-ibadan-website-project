import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Box, Heading} from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Heading textAlign='center'>Welcome to GDG Ibadan Website</Heading>
    </Box>
  )
}

export default App
