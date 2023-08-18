import { CircularProgress } from "@mui/joy"
import classes from './LoadingSpinner.module.css'
const LoadingSpinner = () => {
    return <CircularProgress className={classes.spinner} variant='plain' size='lg' />
}

export default LoadingSpinner