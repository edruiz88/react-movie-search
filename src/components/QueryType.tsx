import React, { useState } from 'react';
import * as Icon from '../components/icons'

interface funcProps {
    setUrl(arg: string): void
}

const QueryType: React.FC<funcProps> = (props) => {
    const [item, setItem] = useState<number>(1)

    const select = (type: number) =>{
        const url = type==1?'api-query/':type==2?'db-query/':'json-query/';
        setItem(type);
        props.setUrl(url);
    }

    return(
        <div className={'selector'}>
            <div className={`sel-item${item==1?' active':''}`} onClick={()=>select(1)}>
                <div className={'sel-text'}>API</div>
                <Icon.Cloud color={'#6c757d'} size={24} />
            </div>
            <div className={`sel-item${item==2?' active':''}`} onClick={()=>select(2)}>
                <div className={'sel-text'}>MongoDB</div>
                <Icon.Database color={'#6c757d'} size={24} />
            </div>
            <div className={`sel-item${item==3?' active':''}`} onClick={()=>select(3)}>
                <div className={'sel-text'}>JSON</div>
                <Icon.Json color={'#6c757d'} size={24} />
            </div>
        </div>
    )
}
export default QueryType