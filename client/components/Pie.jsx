import React from 'react';
import {Pie} from 'react-chartjs-2';


// data complete
  // all active habits goals added together / all active habits status






function App(props) {

  let complete = 0;
  let total = 0;
//console.log('pie data',props.activeHabits)
for(const habit of props.activeHabits){
  // each task is weighed the same 10 pts
    // its completed/total will dictate the points
    if(habit.type === 'boolean'){
      if(habit.completed){
        complete += 10;
        total += 10;
      }
    } else {
      complete += (habit.status/habit.goal) * 10
      console.log(habit.status/habit.goal)
      total += 10
    }

  
}

let incomplete = total - complete;
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
      data: [incomplete,complete]
      // this is where we need to add the data for the habits
    }
  ]
};


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