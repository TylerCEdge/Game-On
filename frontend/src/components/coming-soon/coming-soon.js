import React from 'react';
import { UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./coming-soon.css";




export default class ComingSoon extends React.Component {
    render() {
        return (

<div className="scroll-menu">
<div className="container">
<div className="coming-soon-row row">
    <div className="col-xs-2">
        <img className="box-image" src="https://i0.wp.com/nerdmuch.com/wp-content/uploads/2018/06/Crackdown-3-Delayed-to-2019-Report.jpg" alt="NA" id="UncontrolledPopoverCrackdown" type="image"></img>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopoverCrackdown">
        <PopoverHeader>Crackdown</PopoverHeader>
        <PopoverBody>Game Type: Action-Adventure. <br/> Developed By: Sumo Digital. <br/> Release Date: February 2019. <br/> <a className="moreInfo" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Crackdown_3">More Info</a></PopoverBody>
      </UncontrolledPopover>
    </div>
    <div className="col-xs-2">
        <img className="box-image" src="https://i.ytimg.com/vi/uvXWGfPxoAI/maxresdefault.jpg" alt="NA" id="UncontrolledPopoverDeadOrAlive" type="image"></img>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopoverDeadOrAlive">
        <PopoverHeader>Dead or Alive 6</PopoverHeader>
        <PopoverBody>Game Type: Fighting. <br/> Developed By: Team Ninja. <br/> Release Date: March 2019. <br/> <a className="moreInfo" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Dead_or_Alive_6">More Info</a></PopoverBody>
      </UncontrolledPopover>
    </div>
    <div className="col-xs-2">
        <img className="box-image" src="https://i.imgur.com/DFr5mvc.jpg" alt="NA" id="UncontrolledPopoverControl" type="image"></img>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopoverControl">
        <PopoverHeader>Control</PopoverHeader>
        <PopoverBody>Game Type: Action-Adventure. <br/> Developed By: Remedy Entertainment. <br/> Release Date: August 2019. <br/> <a className="moreInfo" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Control_(video_game)">More Info</a></PopoverBody>
      </UncontrolledPopover>
    </div>
    <div className="col-xs-2">
        <img className="box-image" src="https://cdn-ext.fanatical.com/production/product/original/6623a6b1-5f22-4f59-ac72-e251761a2ddb.jpeg?w=1200" alt="NA" id="UncontrolledPopoverResidentEvil" type="image"></img>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopoverResidentEvil">
        <PopoverHeader>Resident Evil 2</PopoverHeader>
        <PopoverBody>Game Type: Survival-Horror. <br/> Developed By: Capcom. <br/> Release Date: January 2019. <br/> <a className="moreInfo" target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Resident_Evil_2_(2019_video_game)">More Info</a></PopoverBody>
      </UncontrolledPopover>
    </div>
  
</div>
</div>
</div>

        );
    }
}