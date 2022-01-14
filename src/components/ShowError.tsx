import React, { useEffect, useRef } from 'react';

interface Show {
    show: boolean,
    text: string
}

const ShowError: React.FC<Show> = (props) => {
    const error = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const err = error.current;
        err&&setTimeout(()=>err.style.display = 'flex',900);
    },[])

    return(
        <div ref={error} className={'d-flex c-flex'} style={{display:'none'}}>
            <h1 className={'err-txt'}>{props.text}</h1>
            <img src={'img/no-results.svg'}/>
        </div>
    )
}
export default ShowError