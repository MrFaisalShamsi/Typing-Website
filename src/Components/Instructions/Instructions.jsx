// src/components/Instructions.js
import React from 'react';
import "./Instructions.css"

const Instructions = () => (
  
  <div className="instructions">
    <ol>
      <li>This test consist of English and Hindi Typing Test on Computer, both the tasks are mandatory.</li>
      <li>The candidates will be provided a passage of approximately 300 words for English Typing Test, to be typed within 10 minutes on computer.</li>
      <li>Similarly, the candidates will be provided a passage of approximately 250 words for Hindi Typing Test, to be typed within 10 minutes on computer.</li>
      <li>Only Inscript Keyboard layout (on Mangal/Krutidev Font) will be used for Hindi Typing Test on computer.</li>
      <li>The on-screen computer clock counter of every candidate will be set at the server. The countdown timer on the top of the computer screen will display the time remaining (in minutes) available for the candidate to complete the examination.</li>
      <li>Candidate can increase text font size options Font+, Font-.
        <ul>
          <li>A +: Zoom In; Increase the font Size.</li>
          <li>A -: Zoom Out; Decrease the font size.</li>
        </ul>
      </li>
      <li>If the candidate completes the passage before 10 minutes duration, the candidate has to immediately press "END TYPING TEST" button.</li>
      <li>Candidates will have the option to make corrections in the words typed anytime during the entire duration of the examination.</li>
      <li>In case the computer/mouse allotted to any candidate malfunctions anytime during the test, the candidate will be immediately allotted another computer system, during change/restart of computer system timer gets freeze to give the candidate the full allotted time. There would be no loss of time for the candidate and the test will resume from where it was interrupted i.e., candidates will be directly redirected to the typing window.</li>
      <li>Before start of the actual type test a Practice window of 3 minutes time will be provided, candidate can write the sample text during practice typing.</li>
      <li>Before login, candidates are advised to check all keys of the Keyboard along with mouse monitor and display during practice typing test and if found any part faulty, ask to change the same.</li>
      <li>If you are found copying / helping others, you will be disqualified.</li>
      <li>You are NOT allowed to keep Mobile Phones or any other Electronic / Bluetooth Device.</li>
      <li>Candidates are advised to follow the Keys and Functions as given below:
        <ul>
          <li>Put single SPACE between two words.</li>
          <li>Following keys in the computer will be disabled in the test environment:
            <ul>
              <li>Enter Key</li>
              <li>Escape Key</li>
              <li>Backspace Key (Ctrl+Alt+Del)</li>
            </ul>
          </li>
        </ul>
      </li>
    </ol>
  </div>
);

export default Instructions;
