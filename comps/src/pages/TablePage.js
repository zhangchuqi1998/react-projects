import SortableTable from "../components/SortableTable";

function TablePage() {

    const data = [
        {name: 'Oranged', color: 'bg-orange-500', score: 5},
        {name: 'apple', color: 'bg-red-500', score: 3},
        {name: 'Orange', color: 'bg-yellow-500', score: 1},
    ];

    const config = [
        { label: 'Name', render: (fruit)=>fruit.name, sortValue: (fruit) => fruit.name},
        { label: 'Color', render: (fruit)=><div className={`p-3 m-2 ${fruit.color}`}></div>},
        { label: 'Score', render:(fruit)=>fruit.score, sortValue: (fruit) => fruit.score},
    ];

    const keyFn = (fruit) => {
        return fruit.name;
    };

    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn}/>
        </div>
    )
}

export default TablePage;