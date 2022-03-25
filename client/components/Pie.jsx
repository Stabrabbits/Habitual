import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  labels: ['Incomplete',  'Complete'],
  // this is where we need to add the habits
  datasets: [
      {
      color:'#14797b',
      label: ['Habits'],
      backgroundColor:[ '#c8d189', '#247f50' ],
      borderColor: '#14797b',
      borderWidth: 1,
      
      hoverBackgroundColor: '#1c5973',
      hoverBorderColor: '#fafafa',
      // data: [65, 59, 80, 81, 56, 55, 40]
      data: [30,70]
      // this is where we need to add the data for the habits
    }
  ]
};
function App() {
  return (
    <div className='Pie-container'>
        <h2>Habits Chart</h2>
        <Pie
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
    </div>
  );
}
export default App;