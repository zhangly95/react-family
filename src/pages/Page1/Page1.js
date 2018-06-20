import React,{Component} from 'react';
import './Page1.css';
import image from './images/004.png';

export default class Page1 extends Component{
    render(){
        return(
            // <div class="box1">
            //     <div class="loader"> 
            //       <div class='loading-1'>
            //         <i>11</i>
            //       </div>
            //     </div>
            //     <div class="loader">
            //       <div class='loading-2'>
            //         <i>22</i>
            //         <i></i>
            //         <i></i>
            //         <i></i>
            //         <i></i>
            //       </div>
            //     </div>
            //     <div class='loader'>
            //       <div class='loading-3'>
            //         <i>33</i>
            //         <i></i>
            //         <i></i>
            //         <i></i>
            //         <i></i>
            //         <i></i>
            //         <i></i>
            //       </div>
            //     </div>
            //     <br/>
            <div>
                <div className="first-box">
                <span className="item1"></span>
                </div>
                <div className="second-box">
                <span className="item2"></span>
                <span className="item3"></span>
                </div>
                <div className="third-box">
                <div className="column">
                <span className="item4"></span>
                <span className="item5"></span>
                </div>
                <div className="column">
                <span className="item6"></span>
                </div>
                <div className="column">
                <span className="item7"></span>
                <span className="item8"></span>
                </div>
                </div>
             </div>
        )
    }
}