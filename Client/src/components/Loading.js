import {React,Component} from 'react';
import loading from './loading.gif';
export class Loading extends Component{

    render(){
        return (
            <div className='container' style={{display:'flex',justifyContent:'center',width:'10%',marginTop:'5rem'}}>
            <img src={loading} alt='loading' style={{width:'100%'}}/>
            </div>
        );
    }
}
export default Loading;