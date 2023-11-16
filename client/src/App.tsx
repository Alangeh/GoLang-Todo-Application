import { Box } from '@mantine/core'
import './App.css'

export const ENDPOINT = 'http://localhost:4000'

const fetcher = (url: string) =>
 fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

function App() {

  return <Box> Hello world</Box>;

}

export default App;
