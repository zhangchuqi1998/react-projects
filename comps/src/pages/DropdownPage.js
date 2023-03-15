import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {

    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    };

    const options = [
        {label: 'red', value: 'Red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ]

    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelection} />
        </div>
    )
       
    
}

export default DropdownPage;