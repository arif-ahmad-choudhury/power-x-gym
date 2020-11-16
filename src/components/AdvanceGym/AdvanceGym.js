import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import './AdvanceGym.css';
import img1 from '../../Image & Icon/gym.jpg';
const AdvanceGym = () => {
    return (
        
        <Container>
            <h1>AdvanceGym</h1>
        
        <div class="row">
            <div class="col-xl-7">
                <div class="single-classes">
                    <img src={img1} alt=""/>                       		    
                </div>
            </div>
            <div class="col-xl-5">
                <div class="single-classes">
                      <h1><span text-color="#FCD842">Class</span> Schedule</h1>		    
                </div>
            </div>  
            <div class="col-xl-7">
                <div class="single-classes">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>	    
                </div>
            </div>   
            <div class="col-xl-7">
                <div class="single-classes">
                    <ul>
                        <p><FontAwesomeIcon icon={ faCheckSquare}/>Having Slimmer Shapely Thighs</p>
                        <p><FontAwesomeIcon icon={faCheckSquare}/>Getting Stronger Body</p>
                         <p><FontAwesomeIcon icon={faCheckSquare}/>Increased Metaboliosm</p> 
                         <p><FontAwesomeIcon icon={faCheckSquare}/>Increased Muscular Endurance</p>
                         <p><FontAwesomeIcon icon={ faCheckSquare}/>Maximum Results in Less time</p>
                         <p><FontAwesomeIcon icon={ faCheckSquare}/>Firm Hips and Tummy</p>
                    </ul>	    
                </div>
            </div>   
            <div class="col-xl-5">
                <div class="single-classes">
                <a class="box-btn" href="">
                        Join Us </a>     
                </div>
            </div>     
        </div>
    </Container>
    );
};

export default AdvanceGym;