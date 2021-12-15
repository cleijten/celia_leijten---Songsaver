import React from "react";
function FilterRating(props) {
 console.log(props)
  return (
    <div>
     
     
<h3>Filter by rating</h3>
      <label>1 star</label>
      <input type="checkbox" name="one" onChange={props.handleChange} checked={props.data.ratings.one} />
      <label>2 stars</label>
      <input type="checkbox" name="two" onChange={props.handleChange} checked={props.data.ratings.two}/>
      <label>3 stars</label>
      <input type="checkbox" name="three" onChange={props.handleChange} checked={props.data.ratings.three} />
      <label>4 stars</label>
      <input type="checkbox" name="four" onChange={props.handleChange} checked={props.data.ratings.four}/>
      <label>5 stars</label>
      <input type="checkbox" name="five" onChange={props.handleChange} checked={props.data.ratings.five}/>
    </div>
  );
}
export default FilterRating;
