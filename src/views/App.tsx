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
  const [details, setDetails] = useState<String[]>([]);
  const [error, setError] = useState<any>({show:false, text:''});
  const [url, setUrl] = useState<string>('api-query/');
  const [loading, setLoading] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const already = movies.length > 0;

  const searchMovie = async (query: string) =>{
    const base = 'http://localhost:3000/';
    setLoading(true);
    setStart(true)
    error&&setError({show:false, text:''})
    
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

  return (
    <div className={'container'}>
      {details.length>0?<Details data={details} url={url} back={setDetails} />:
      <div className={'d-flex'}>
        <div className={'search'} style={{top:start?'14%':'40%'}}>
          <QueryType setUrl={setUrl} />
          <SearchBar search={searchMovie} loading={loading} />
        </div>
        {movies&&!loading&&<ItemResult data={movies} url={url} loading={loading} open={setDetails} />}
        {loading&&<Placeholder show={already} />}
        {error.show&&<ShowError show={already} text={error.text}/>}
      </div>}
    </div>
  );
};

export default App;
