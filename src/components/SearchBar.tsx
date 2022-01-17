import React, {useState} from "react";
import * as Icon from '../components/icons/'

interface funcProps {
  search(arg: String): void,
  reset(): void,
  start: boolean,
  loading: boolean
}

const SearchBar: React.FC<funcProps> = (props) => {
  const [query, setQuery] = useState<string>('');
  const color = props.loading?'transparent':'#fff';
  const empty = query.length == 0;

  const searchMovie = (e: any): void => {
    e.preventDefault()
    if(empty)return;
    props.search(query);
  }

  return (
    <div className={'searchbar'} >
      <form style={{margin:0}} onSubmit={searchMovie}>
        <input className={'search_input'} type={'text'} onChange={(e)=>setQuery(e.target.value)} placeholder={'Search by movie title...'}/>
        <button className={`search_icon${props.loading?' progress':''}`} type={'submit'}><Icon.Search color={color} size={'24'}/></button>
      </form>
      {props.start&&<div className={'reset_search d-flex'} onClick={()=>props.reset()}>x</div>}
    </div>
  );
};

export default SearchBar;
