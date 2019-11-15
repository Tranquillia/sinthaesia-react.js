import React from "react";
import { Grid, Cell } from 'react-mdl';
import Education from './education';

function Resume() {
  return (
    <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://www.shareicon.net/data/512x512/2016/01/19/705652_man_512x512.png"
                alt="Avatar"
                style={{ height: '200px' }}
              />
            </div>
            <h2 style={{ paddinTop: '30px' }}>Daan Aesseloos</h2>
            <h4 style={{ color: 'grey' }}>Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
            <p>LOREM IPSUM FOR THE TIME BEING</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
            <h5>Address</h5>
            <p>1 Hackerway Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(+32) 477 12 23 34</p>
            <h5>Email</h5>
            <p>hello@sinthaesia.com</p>
            <h5>Website</h5>
            <p>https://sinthaesia.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education history</h2>


            <Education 
              startYear={2018}
            />


          </Cell>
        </Grid>
    </div>
  );
}

export default Resume;