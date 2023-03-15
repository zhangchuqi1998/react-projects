import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go"; 

function Accordion({ items }) {

    const [expandedIndex, setExpendedIndex] = useState(-1); 
    

    const renderedItem = items.map((item, index)=>{

        const isExpanded = index ===  expandedIndex;

        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => setExpendedIndex(index)}>
                   
                    {item.label}
                     {icon}
                </div>
                {isExpanded && <div className="border-b p-5" onClick={() => setExpendedIndex(-1)}>{item.content}</div>}
            </div>
        );
        

        
    });


    return (
        <div className="border-x border-t rounded">{renderedItem}</div>
    )
}

export default Accordion;