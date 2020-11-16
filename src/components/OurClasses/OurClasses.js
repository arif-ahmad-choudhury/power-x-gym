import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './OurClasses.css';
import { Container } from 'react-bootstrap';
import img1 from '../../Image & Icon/img1.jpg';
import img2 from '../../Image & Icon/img2.jpg';
import img3 from '../../Image & Icon/img3.jpg';
import img4 from '../../Image & Icon/img4.jpg';
import img5 from '../../Image & Icon/img5.jpg';
import img6 from '../../Image & Icon/img6.jpg'
const OurClasses = () => {
    return (
        <Container>
            <h1>Our Classes</h1>
            
            <div class="row">
        		<div class="col-xl-4">
        			<div class="single-classes">
        				<img src={img1} alt=""/>
                        <a class="box-btn" href="">
                        Psycho Training  <FontAwesomeIcon icon={faArrowRight}/></a>     		    
        			</div>
        		</div>
        		<div class="col-xl-4">
                    <div class="single-classes">
        				<img src={img2} alt=""/>
                        <a class="box-btn" href="">Self Defense  <FontAwesomeIcon icon={faArrowRight}/></a>     		    
        			</div>
        		</div>
        		<div class="col-xl-4">
                    <div class="single-classes">
        				<img src={img3} alt=""/>
                        <a class="box-btn" href="">Advance Gym <FontAwesomeIcon icon={faArrowRight}/></a>     		    
        			</div>
        		</div>
        		<div class="col-xl-4">
                    <div class="single-classes">
        				<img src={img4} alt=""/>
                        <a class="box-btn" href="">Cardio Training <FontAwesomeIcon icon={faArrowRight}/></a>     		    
        			</div>
        		</div>
        		<div class="col-xl-4">
                    <div class="single-classes">
        				<img src={img5} alt=""/>
                        <a class="box-btn" href="">Strength Training <FontAwesomeIcon icon={faArrowRight}/></a>     		    
        			</div>
        		</div>
        		<div class="col-xl-4">
                    <div class="single-classes">
        				<img src={img6} alt=""/>
                        <a class="box-btn" href="">Psycho Training <FontAwesomeIcon icon={faArrowRight}/></a>     		    
        			</div>
        		</div>
        	</div>
        </Container>
    );
};

export default OurClasses;