import Button from "../components/Button";
import {GoBell} from 'react-icons/go'

function ButtonPage() {

    const hanbdleClick = () => {
        console.log('click!!');
    }

    return (
        <div>
            <div><Button primary rounded onClick={hanbdleClick}> <GoBell />Click!</Button></div>
            <div><Button secondary>Buy now</Button></div>
            <div><Button success>see deal</Button></div>
            <div><Button danger outline>hide</Button></div>
            <div><Button>delete</Button></div>
        </div>
        
    )
}

export default ButtonPage;