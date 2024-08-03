import React from "react";
import Map from "../components/Map";
import {useResults} from "../components/Context";



function formatDate(date) {
  var formatted = new Date(date+'T00:00:00')
  return formatted.toLocaleDateString('en', {
    'year': 'numeric', 'month': 'long', 'day': 'numeric'})
}


const InteractiveMap = () => {

  const { resultsData } = useResults();

  return (
    <div className="page-container">
      <h1>Interactive Map</h1>
<div className="map-title">Data from {formatDate(resultsData.dates.start)} to {formatDate(resultsData.dates.end)}. Data updated periodically. </div>
      <Map />


      <h2>Welcome to the Map Beta!</h2>
      <p>Use the map above to explore Chicago's bus lines.</p>
      <ul>
        <li>
          Click a route or use the search bar to open route-specific details.
        </li>
        <li>
          Use the filter to compare the performance of different bus lines
          across Chicago.
        </li>
      </ul>
      <div className="note">
        <p>
          <strong>Note:</strong> From November 2022 until early March 2023 we
          showed the Fulleron #74 bus on the map. In early March 2023 we removed
          it because we discovered that a data bug (in the source data from the
          CTA) for that route is more widespread than we thought and it threw
          the accuracy of the data displayed for the #74 into question. We may
          add the #74 back to the map if we find a way to address the bug.
        </p>
      </div>

      <h3> See a Bug? Have an Idea?</h3>
      <p>
        {" "}
       While we’re winding down active development on this project and won’t be adding new features at this time, we’d love to hear your feedback! Feel free to submit issues to us through our GitHub— - in our frontend repository for any visual or map issues, and our backend if you're noticing any issues with our data.
      </p>
      <p>
        {" "}
        For a list of planned upcoming additions to this project, please visit
        our GitHub pages.
      </p>

         <a
          href="https://github.com/chihacknight/ghost-buses-frontend"
          target="_blank"
          rel="noreferrer"
          aria-label="Frontend Repository"
        >
          <button className="action-btn">Frontend Repository</button>
        </a>
     <a
          href="https://github.com/chihacknight/ghost-buses-backend"
          target="_blank"
          rel="noreferrer"
          aria-label="Backend Repository"
        >
          <button className="action-btn">Backend Repository</button>
        </a>
      <p>
        Finally, if you have feedback for us on this project, you can always
        reach out to us on Twitter!
      </p>
      <div className="btn-container">
    
        <a
          href="https://twitter.com/ghostbuses"
          target="_blank"
          rel="noreferrer"
          aria-label="Ghost Buses Twitter link"
        >
          <button className="action-btn">Ghost Bus Twitter</button>
        </a>
      </div>
    </div>
  );
};

export default InteractiveMap;
