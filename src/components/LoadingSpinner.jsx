import { CircularProgress } from "@mui/joy"
import classes from './LoadingSpinner.module.css'
const LoadingSpinner = () => {
    return <CircularProgress className='h-screen flex justify-center items-center' variant='plain' size='lg' />
}

export default LoadingSpinner