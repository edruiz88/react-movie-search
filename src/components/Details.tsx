import React from "react";

interface detailsProps {
   back(arg: Array<any>): void,
   data: Array<any>,
   url: string
}

const SearchBar: React.FC<detailsProps> = (props) => {
   const data = props.data[0];
   const thumb = props.url=='api-query/'?'https://image.tmdb.org/t/p/w400'+data.img:data.img;

  return (
    <div className={'details'}>
      <div className={'back'} onClick={()=>props.back([])}><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke="#fff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></div>
      <div className={'cntnr'}>
         <div className={'card-detail'}>
            <div className={'card-image-box'}><img className={'card-image'} src={thumb?thumb:'img/no-img2.png'} alt={'img'} /></div>
            <div className="card-content" style={{opacity: 1, transform:'translate(0px, 0px)'}}>
               <div className="card-info">
                  <div className="card-genre">Sci-Fi</div>
                  <div className="card-rating-box">
                     <svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="16.5" height="15.321" viewBox="0 0 16.5 15.321">
                        <path id="Icon-ionic-ios-star" data-name="Icon ionic-ios-star" d="M18.124,8.679H12.706L11.06,3.765a.6.6,0,0,0-1.12,0L8.294,8.679H2.839a.591.591,0,0,0-.589.589.433.433,0,0,0,.011.1.566.566,0,0,0,.247.416l4.453,3.138L5.252,17.89a.591.591,0,0,0,.2.663.57.57,0,0,0,.331.144.722.722,0,0,0,.368-.133l4.346-3.1,4.346,3.1a.69.69,0,0,0,.368.133.529.529,0,0,0,.328-.144.584.584,0,0,0,.2-.663l-1.709-4.968,4.416-3.167.107-.092a.563.563,0,0,0-.435-.983Z" transform="translate(-2.25 -3.375)" fill="#ccb833"></path>
                     </svg>
                     <span className="card-rating">{data.rating}<span className="faded"> / 10</span></span>
                  </div>
               </div>
               <h1 className="card-title">{data.title}</h1>
               <p className="card-description">{data.description}</p>
               <div className="card-actions"><div className="card-action-info">{data.date}</div><div className="card-action-info">Popular {data.popularity}</div></div>
            </div>
         </div>
      </div>
   </div>
  );
};

export default SearchBar;
