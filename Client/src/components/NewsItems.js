import './NewsItems.css';
export function NewsItems(props){
    
    return (
        <div className='card'>
            <span className='site'><strong>{props.source}</strong></span>
            <div className='img-card'><img src={props.imgurl?props.imgurl:'https://th.bing.com/th/id/OIP.UOtN2FKlrxetB811rtNs7AHaF0?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'} alt='Img' style={{width:'100%',height:'40vh'}}/>
            <div className='titleTxt'><a href={props.url} target='_blank' rel="noreferrer"><h4>{props.title?props.title.slice(0,100)+'...':''}</h4></a></div>
            <div className='descTxt'><p>{props.desc?props.desc.slice(0,180)+'...':''}</p></div>
            <div className='miscDetails'><strong><p>By {props.author} on {new Date(props.time).toUTCString()}</p></strong></div>
            </div>
        </div>
    );
}