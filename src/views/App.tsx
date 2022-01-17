import React, { useState } from "react";
import axios from 'axios';
import ItemResult from "../components/ItemResult";
import SearchBar from "../components/SearchBar";
import Placeholder from "../components/Placeholder";
import ShowError from "../components/ShowError";
import QueryType from "../components/QueryType";
import Details from "../components/Details";

const App: React.FC<{}> = () => {
  const [movies, setMovies] = useState<String[]>([]);
  const [details, setDetails] = useState<any>({});
  const [error, setError] = useState<any>({show:false, text:''});
  const [url, setUrl] = useState<string>('api-query/');
  const [loading, setLoading] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const already = movies.length > 0;

  const searchMovie = async (query: string) =>{
    const base = 'http://localhost:3000/';
    setLoading(true);
    setStart(true)
    error.show&&setError({show:false, text:''})
    
    await axios(base+url+query)
    .then((res)=>{
      setMovies(res.data);
      res.data.length==0&&setError({show:true, text:'Oops, no results found :(, try again!'});
      setTimeout(()=>setLoading(false),700);
    }).catch((err)=>{
        console.log(err);
        setError({show:true, text:'Oops! An error occurred :(, try again!'});
        setLoading(false);
      });
  }
  
  const reset=()=>{
    setMovies([])
    setStart(false)
    error.show&&setError({show:false, text:''})
  }

  return (
    <div className={'container'}>
      {Object.keys(details).length>0?<Details data={details} url={url} back={setDetails} />:
      <div className={'d-flex'}>
        <div className={'search'} style={{top:start?'14%':'40%'}}>
          <img className={`img-icon${start?' gone':''}`} src={'/img/movie-icon.png'} alt={'icon'}/>
          <QueryType setUrl={setUrl} />
          <SearchBar search={searchMovie} loading={loading} start={start} reset={reset} />
          <span>Created by: <a href={'https://eruiz.herokuapp.com/'} target={'_blank'}>Eduardo Ruiz</a></span>
        </div>
        {movies&&!loading&&<ItemResult data={movies} url={url} loading={loading} open={setDetails} />}
        {loading&&<Placeholder show={already} />}
        {error.show&&<ShowError show={already} text={error.text}/>}
      </div>}
    </div>
  );
};

export default App;
