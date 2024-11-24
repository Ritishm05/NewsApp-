import './News.css';
import React,{Component} from 'react';
import { NewsItems } from './NewsItems';
import { Loading } from './Loading';
export class News extends Component {
  constructor(props){
    super(props);
    this.state = {
        articles : [],
        page: 1,
        pageSize: 6,
        loading:true,
        category : 'general',
    }
    document.title = `${this.capitalizeFirstLetter(props.category)} - News`;
  }
 capitalizeFirstLetter(string){
  return string.at(0).toUpperCase() + string.slice(1);
 }
  async Update() {
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=8bb5b84d4b1d4a219d6f1f924935d0a6';
    let list = await fetch(url);
    let parsed = await list.json();
    this.setState({
        articles : parsed.articles,
        total: parsed.totalResults,
        loading :false
    });
  }
   componentDidMount(){
    this.Update();
   }

   nextHandler = async() => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=8bb5b84d4b1d4a219d6f1f924935d0a6&pageSize=${this.state.pageSize}&page=${this.state.page+1 }`;
    let list = await fetch(url);
    let parsed = await list.json();
    await this.setState({
       page: this.state.page + 1,
       loading: true
     });
       console.log(this.state.page);
      this.Update();
  }

  prevHandler = async() => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=8bb5b84d4b1d4a219d6f1f924935d0a6&pageSize=${this.state.pageSize}&page=${this.state.page-1 }`;
    let list = await fetch(url);
    let parsed = await list.json();
    await this.setState({
      articles : parsed.articles,
      page: this.state.page - 1,
      loading: true
    });
       console.log(this.state.page);
      this.Update();
  }

    render() {
        return (
        <>
        <div className='NewsSection'>
           <div><h1>Sensational News in Cards</h1></div>
           <div><h3>A mini-project</h3></div>
        </div>
        {this.state.loading&&<Loading/>}
        {!this.state.loading && <div className='newsRow'>
            {this.state.articles.map((element) => {
                return (
                    <div className='column' key={element.url}>
                    <NewsItems imgurl={element.urlToImage} title={element.title} desc={element.description} url={element.url} author={element.author?element.author:'Unknown'} time={element.publishedAt} source={element.source.name}/>
                   </div>
                );
            })}
            <div className='btnrow'>
          <button className="btn btn-primary" disabled={this.state.page<=1} onClick={this.prevHandler}>Previous</button>
          <button className='btn btn-primary' onClick={this.nextHandler} disabled={this.state.page>=Math.ceil(this.state.total/this.state.pageSize)}>Next</button>
        </div>
        </div>}
        </>
    );
}
}
