import className from "classnames";

function Panel({children, classNames, ...rest}) {
    const finalClassNems = className('border rounded p-3 shadow bg-white w-full', classNames);

    return <div {...rest} className={finalClassNems}>{children}</div>
}

export default Panel;