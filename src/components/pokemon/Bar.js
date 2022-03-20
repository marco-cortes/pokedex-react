import { useEffect, useRef } from "react"

export const Bar = ({ percent }) => {

    const progress = useRef(null);

    useEffect(() => {
        progress.current.style.width = `${percent/2}%`;
    }, [percent])
    

    return (
        <div className="bar">
            <span className="progress" ref={progress}></span>
        </div>
    )
}
