class Slotmachine extends React.Component {
  render() {
    const { a, b, c } = this.props;

    function getFruit() {
      const fruitArr = [a, b, c];
      let randomFruit = fruitArr[Math.floor(Math.random() * fruitArr.length)];

      return randomFruit;
    }

    return (
      <div className="Slotmachine">
        <p style={{fontSize:"50px"}}>
          {getFruit()} {getFruit()} {getFruit()}
        </p>
        {/* <p> {winner ? "You Win!" : "You Lose!"}</p> */}
      </div>
    );
  }
}
