import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = (...props) => {

    return (
        <AwesomeSlider mobileTouch={true}  fillParent={false} style={{height: "100%", width: "100%"}}>
            {props.children}
        </AwesomeSlider>
    )
}

export default Slider;