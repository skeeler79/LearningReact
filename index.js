// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello there!</h1>
//         <h1>Hello there!</h1>
//         <h1>Hello there!</h1>
//       </div>
//     );
//   }
// }
// function Hello(){
// 	return (
//     <div>
//       // <h1>Hello there!</h1>
//       // <h1>Hello there!</h1>
//       // <h1>Hello there!</h1>
//       //
//     </div>
//   );
// }
// //what to render and where. Nothing will show up without it
// ReactDOM.render(<Hello />, document.getElementById("root"))

function getMood(){
  const moods = ['happy', 'sad', 'angry', 'anxious', 'morose']
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render(){
    return (
    <div>
      <h1>My current mood: {getMood()}</h1>
    </div>
  
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))