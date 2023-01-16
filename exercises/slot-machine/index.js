class App extends React.Component {
  render() {
    return (
      <div>
          <h1>Slot Machine!</h1>
        <Slotmachine a="🍒" b="🍇" c="🍑" />
        <Slotmachine a="🍒" b="🍇" c="🍑" />
        <Slotmachine a="🍒" b="🍇" c="🍑" />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));