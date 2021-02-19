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

    constructor(){
        super();
        this.state = {
         understandingSelected:false,
         satisfiedSelected:false,
         politeSelected:false,
         valueForMoneySelected:false,
         properGuidanceSelected:false,
         friendlySelected:false,
          unprofessionalSelected:false,
          notSatisfiedSelected:false,
          impoliteStaffSelected:false,
          languageBarrierSelected:false,
          noProperGuidanceSelected:false,
          awkwardSelected:false

        }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleOnChange=e=>{
         // e.preventDefault();
            if(e.target.name=== "understanding")
            {
                this.setState({understandingSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "satisfied")
            {
                this.setState({satisfiedSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "polite")
            {
                this.setState({politeSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "valueForMoney")
            {
                this.setState({valueForMoneySelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "properGuidance")
            {
                this.setState({properGuidanceSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "friendly")
            {
                this.setState({friendlySelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "unprofessional")
            {
                this.setState({unprofessionalSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "notSatisfied")
            {
                this.setState({notSatisfiedSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "impoliteStaff")
            {
                this.setState({impoliteStaffSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "languageBarrier")
            {
                this.setState({languageBarrierSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "noProperGuidance")
            {
                this.setState({noProperGuidanceSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)
            if(e.target.name=== "awkward")
            {
                this.setState({awkwardSelected: e.target.checked})
            }
            console.log(e.target.checked,e.target.name)






      }



      handleChange(e) {
        this.setState({ 
          [e.target.name]: e.target.value });
      }
    
      handleSubmit(e){
        e.preventDefault();
      }
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
 <div className="feedback__r3 ">
                             <div className="feedback__waitButtons d-flex justify-content-start p-0">
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
<div className="feedback__check">
<div class="form-check">
      <label class="form-check-label" for="check1" className={this.state.understandingSelected===true? "feedback__poscheck":" feedback__posuncheck"}>
        <input type="checkbox" class="form-check-input" id="check1" name="understanding"  onChange={this.handleOnChange} />Understanding
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check2"  className={this.state.satisfiedSelected===true? "feedback__poscheck":" feedback__posuncheck"}>
        <input type="checkbox" class="form-check-input" id="check2" name="satisfied" onChange={this.handleOnChange}/>Satisfied
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check3"  className={this.state.politeSelected===true? "feedback__poscheck":" feedback__posuncheck"}>
        <input type="checkbox" class="form-check-input" id="check3" name="polite" onChange={this.handleOnChange}/>Polite
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check4"  className={this.state.valueForMoneySelected===true? "feedback__poscheck":" feedback__posuncheck"}>
        <input type="checkbox" class="form-check-input" id="check4" name="valueForMoney" onChange={this.handleOnChange}/>Value for money
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check5"  className={this.state.properGuidanceSelected===true? "feedback__poscheck":" feedback__posuncheck"}>
        <input type="checkbox" class="form-check-input" id="check5" name="properGuidance" onChange={this.handleOnChange}/>Proper Guidance
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check6"  className={this.state.friendlySelected===true? "feedback__poscheck":" feedback__posuncheck"}>
        <input type="checkbox" class="form-check-input" id="check6" name="friendly" onChange={this.handleOnChange}/>Friendly
      </label>
    </div>
    </div>


<div className="feedback__r11">
    Your negative consult...
</div>
<div className="feedback__check">

<div class="form-check">
      <label class="form-check-label" for="check1" className={this.state.unprofessionalSelected===true? "feedback__negcheck":" feedback__neguncheck"}>
        <input type="checkbox" class="form-check-input" id="check1" name="unprofessional" onChange={this.handleOnChange}/>Unprofessional
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check2" className={this.state.notSatisfiedSelected===true? "feedback__negcheck":" feedback__neguncheck"}>
        <input type="checkbox" class="form-check-input" id="check2" name="notSatisfied" onChange={this.handleOnChange}/>Not Satisfied
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check3" className={this.state.impoliteStaffSelected===true? "feedback__negcheck":" feedback__neguncheck"}>
        <input type="checkbox" class="form-check-input" id="check3" name="impoliteStaff" onChange={this.handleOnChange}/>Impolite Staff
      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check4" className={this.state.languageBarrierSelected===true? "feedback__negcheck":" feedback__neguncheck"}>
        <input type="checkbox" class="form-check-input" id="check4" name="languageBarrier" onChange={this.handleOnChange}/>Language Barrier      </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check5" className={this.state.noProperGuidanceSelected===true? "feedback__negcheck":" feedback__neguncheck"}>
        <input type="checkbox" class="form-check-input" id="check5" name="noProperGuidance" onChange={this.handleOnChange}/>No Proper Guidance     </label>
    </div>
    <div class="form-check">
      <label class="form-check-label" for="check6" className={this.state.awkwardSelected===true? "feedback__negcheck":" feedback__neguncheck"}>
        <input type="checkbox" class="form-check-input" id="check6" name="awkward" onChange={this.handleOnChange}/>Awkward      </label>
    </div>
    </div>
    
</div>
</div>
<button type="feedback__button" class="btn btn-secondary">Submit Anonymously</button>


            </div>


        );

    }



}

export default feedback;