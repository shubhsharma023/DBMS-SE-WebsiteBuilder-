import React from 'react';
function Productbox (props) {
return (
<div className= 'a-box'>
<div className ='a-b-img'>
<img src={props.image} alt=''/>
</div>
<div className = 'a-b-text'>
<h2> {props.title} </h2>
<br></br>
<button className='productbox-button'>Edit Now</button>
</div>
</div>
)}
export default Productbox;