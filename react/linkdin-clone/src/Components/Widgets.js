import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
function Widgets() {
    return (
      <div className="widgets">
        <div className="widgets_top">
          <div className="head">
            <h3> LinkedIn News</h3>
            <InfoIcon className="infoIcon"/>
          </div>
          <ul>
            <li>
              <h4>Remote Googlers face pay cut: Report</h4>
              <p>15h ago • 1,762 readers</p>
            </li>
            <li>
              <h4>It's tim to stop saying 'Hey Guys'!</h4>
              <p>1d ago • 10,762 readers</p>
            </li>
            <li>
              <h4>TikTok becomes king of apps</h4>
              <p>1d ago • 50,008 readers</p>
            </li>
            <li>
              <h4>India's first crypto unicorn</h4>
              <p>10h ago • 2,142 readers</p>
            </li>
          </ul>
        </div>
        <div className="widgets_bottom">
        <div className="head">
            <h3>Today’s top courses</h3>
            <InfoIcon className="infoIcon"/>
        </div>
            <ol>
                <li>
                    <h4>What is Graphic Design?</h4>
                    <p>Sean Adams</p>
                </li>
                <li>
                    <h4>How to Be Both Assertive and Likable</h4>
                    <p>American Negotiation Institute and Kwame Chritian</p>
                </li>
                <li>
                    <h4>Diversity, Inclusion, and Belonging</h4>
                    <p>Pat Wardos</p>
                </li>
                <h4 style={{cursor:"pointer"}}>Show more on linkedin learning →</h4>
            </ol>
        </div>
      </div>
    );
}

export default Widgets
