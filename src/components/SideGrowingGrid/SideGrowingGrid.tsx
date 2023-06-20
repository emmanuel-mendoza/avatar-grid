import React, { ReactElement } from "react"
import useElementSize from "../../utils/useElementSize"
import SideGrowingGridProps from "./SideGrowingGrid.types"
import "./SideGrowingGrid.modules.css"


const SideGrowingGrid: React.FC<SideGrowingGridProps> = ({ coverColor = 'white', children }): ReactElement => {
    const [gridRef, { width }] = useElementSize();
    const [itemRef, { width: iWidth }] = useElementSize();
    const childs = ( (children as JSX.Element[]).map ? children : [(children as JSX.Element)] ) as JSX.Element[]; 
    const itemsPerRow : number = iWidth === 0 ? childs.length : iWidth > width ? 1 : Math.floor(width / iWidth);
    console.log('GW: ', width, ' CW: ', iWidth, 'IPR: ', itemsPerRow)
    return (
        <div className='sgg-container'
            ref={gridRef}>
            {
                ([...Array(Math.ceil(childs.length / itemsPerRow))]).map((e, i) =>  (
                    <div className='sgg-row' key={i}>
                        <div style={{backgroundColor: coverColor, flexGrow: 1}}></div>
                    {      
                        childs.slice(i * itemsPerRow, i * itemsPerRow + itemsPerRow).map((child, j) => (
                            <div key={j} ref={(i === 0 && j === 0) ? itemRef : null}>
                                {child}
                            </div>
                        ))
                    }
                        <div style={{backgroundColor: coverColor, flexGrow: 1}}></div>
                    </div>
                ))
            }
        </div>
    );
}

export default SideGrowingGrid;
