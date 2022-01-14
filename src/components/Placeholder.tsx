import React,{ useEffect, useRef } from 'react';

interface Show {
    show: boolean
}

const Placeholder: React.FC<Show> = (props) => {
    const items = Array(10).fill(null);
    const place = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const plhdr = place.current;
        const time = props.show? 10:405;
        plhdr&&setTimeout(()=>plhdr.style.display = 'flex',time);
    },[])

    return(
        <div ref={place} className={'place'} style={{display:'none'}}>
            {items.map((e,i)=>
            <div key={i} className={'item'}>
                <div className={'bar bar-img'}></div>
                <div className={'cntnt'}>
                    <div className={'header d-flex c-flex'} style={{height:'30px'}}>
                        <div className={'bar bar-title'}></div>
                    </div>
                    <div className={'desc d-flex c-flex'}>
                        <div className={'bar bar-1'}></div>
                        <div className={'bar bar-2'}></div>
                        <div className={'bar bar-3'}></div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default Placeholder