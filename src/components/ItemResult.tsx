import React from "react";
import * as Icon from '../components/icons/';

interface moviesProps {
  data: Array<any>,
  loading: boolean,
  url: string,
  open(arg: any): void
}

const ItemResult: React.FC<moviesProps> = (props) => {
  const api = props.url=='api-query/';
  const thumb = 'https://image.tmdb.org/t/p/w200';

  return (
    <div className={'result'}>
      {props.data.map((e,i)=>
        <div key={i} className={'item'}>
          <img src={e.img&&api?thumb+e.img:e.img&&!api?e.img:'img/no-img.png'} />
          <div className={'cntnt'}>
            <div className={'header'}>
              <a className={'title'} onClick={()=>props.open(e)}>{e.title}</a>
              <Icon.Star color={'#6c757d'} size={'20'}/>
              <div className={'rating'}>{(+e.rating).toFixed(1)}</div>
            </div>
            <div className={'desc'}>{e.description.length > 105? e.description.substring(0, 105)+'...':e.description}</div>
            <div className={'footer'}>
              <span className={'date'}>{e.date}</span>
              <span className={'pop'}>Popularity: <b>{e.popularity}</b></span>
            </div>
          </div>
        </div>)}
    </div>
  )
}

export default ItemResult
