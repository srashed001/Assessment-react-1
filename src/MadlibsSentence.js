import { Button } from "@mui/material"

const MadlibsSentence = ({reset, noun1, noun2, adj, color}) => {
    return (
        <>
        <h3>There was a {color} {noun1} who loved the {adj} {noun2}</h3>
        <Button variant="contained" onClick={reset}>Reset</Button></>
        
    )
}

export default MadlibsSentence