import {Box, Heading} from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'

function App() {
  const links = ['Home', 'About', 'Contact', 'Login'];
  return (
    <Box>
      <Navbar links={links} />
      <Layout />
    </Box>
  )
}

export default App
