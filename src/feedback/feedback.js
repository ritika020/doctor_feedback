import React from 'react';
import "./feedback.css"
//import { Button} from 'react-bootstrap';
//import FontStyle from 'react-font-style';
import CloseIcon from '@material-ui/icons/Close';
import ReactStars from "react-rating-stars-component";

const ratingChanged = (newRating) => {
    console.log(newRating);
  };

class feedback extends React.Component{

    recommend(event) {
        console.log(event.target.value);
      }
      
      

    render()
    {

        
        return (
            <div className="container-fluid feedback__main">

                 <CloseIcon style={{ 
                      width: "18px" , height: "18.308px", marginTop:"50px", marginLeft:"-1200px" }}/> 
                <div className="feedback__heading">
                Your Experience with Dr. Swapnil
                </div>

    <div className="feedback__stars d-flex justify-content-center">
    <ReactStars
    style={{width: "300.49px", height: "38.48px", marginLeft:"250px", }}
    count={5}
    onChange={ratingChanged}
    size={50}
    activeColor="#ffd700"
  />
 
  {/* document.getElementById("where-to-render")
); */}
</div>       
<div className="row container-fluid">
<div className="feedback__col1 col-6">
<div className="feedback__grey">
 <div className ="feedback__r1">
     Wait time
 </div>
 </div>
 <div className="feedback__r2 ">
     How long was the wait to see the Doctor ?
 </div>
 <div className="feedback__r3">
                             <div className="feedback__waitButtons p-0">
                                 <a href="#">
                                     <button className="min15" style ={{"width": "60px", "height": "30px"}}>15 min</button>
                                 </a>
                                
                                 <a href="#">
                                     <button className="min30">30 min</button>
                                 </a>
                                
                                 <a href="#">
                                     <button className="min45">45 min</button>
                                 </a>
                                 
                                 <a href="#">
                                     <button className="hr1">1 hr</button>
                        
                                 </a>
                                
                                 <a href="#">
                                     <button className="hr2">&gt;&gt;1 hr</button>
                                 </a>
                             </div>
                        
</div>
<div className="feedback__grey">
<div className="feedback__r4">
    Like to Recommend?
</div>
</div>
<div className="feedback__r5">
    Would you like to recommend Dr. Swapnil to others ?
</div>
<div onChange={this.recommend.bind(this)} className="feedback__radio">
        <input type="radio" value="Yes" name="recom"/> Yes
        <input type="radio" value="No" name="recom"/> No
      </div>

<div className="feedback__grey">
<div className="feedback__r6">
    Feedback and Purpose
</div>
</div>
<div className="feedback__r7">
    Symptoms, treatments, issues did you visit for ?
</div>
    <div className="feedback__box1">
              <input
                type="name"
                class="form-control "
                id="Form_input12"
                placeholder="Select issues, symptoms, services"
              />  
    </div>
    
<div className="feedback__grey">
<div className="feedback__r8">
    Write your feedback
</div>
</div>
<div className="feedback__box2">

<textarea
              name="add"
                onChange={this.handleChange}
              
                class="form-control"
                placeholder="Write your feedback here..."
                rows="5"
                required
              ></textarea>                                         
             
</div>

</div>
<div className="feedback__col2 col-6">

<div className="feedback__r9">
    Consult Satisfaction
</div>
<div className="feedback__r10">
    Your positive consult...
</div>
<div class="form-check">
      <label class="form-check-label" for="check1" className="feedback__poscheck1">
        <input type="checkbox" class="form-check-input" id="check1" name="understanding" value="something" />Understanding
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check2" className="feedback__poscheck2">
        <input type="checkbox" class="form-check-input" id="check2" name="satisfied" value="something"/>Satisfied
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check3" className="feedback__poscheck3">
        <input type="checkbox" class="form-check-input" id="check3" name="polite" value="something"/>Polite
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check4" className="feedback__poscheck4">
        <input type="checkbox" class="form-check-input" id="check4" name="valueForMoney" value="something"/>Value for money
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check5" className="feedback__poscheck5">
        <input type="checkbox" class="form-check-input" id="check5" name="properGuidance" value="something"/>Proper Guidance
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check6" className="feedback__poscheck6">
        <input type="checkbox" class="form-check-input" id="check6" name="friendly" value="something"/>Friendly
      </label>
    </div>


<div className="feedback__r11">
    Your negative consult...
</div>
<div class="form-check">
      <label class="form-check-label" for="check1" className="feedback__negcheck1">
        <input type="checkbox" class="form-check-input" id="check1" name="unprofessional" value="something"/>Unprofessional
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check2" className="feedback__negcheck2">
        <input type="checkbox" class="form-check-input" id="check2" name="notSatisfied" value="something"/>Not Satisfied
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check3" className="feedback__negcheck3">
        <input type="checkbox" class="form-check-input" id="check3" name="impoliteStaff" value="something"/>Impolite Staff
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check4" className="feedback__negcheck4">
        <input type="checkbox" class="form-check-input" id="check4" name="languageBarrier" value="something"/>Language Barrier      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check5" className="feedback__negcheck5">
        <input type="checkbox" class="form-check-input" id="check5" name="noProperGuidance" value="something"/>No Proper Guidance     </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check6" className="feedback__negcheck6">
        <input type="checkbox" class="form-check-input" id="check6" name="Awkward" value="something"/>Awkward      </label>
    </div>
    
    
</div>
</div>
<button type="feedback__button" class="btn btn-secondary">Submit Anonymously</button>


            </div>


        );

    }



}

export default feedback;