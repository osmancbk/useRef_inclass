import { useState, useEffect, useRef } from "react";

const FunctionalComponent = () => {
    const inputRef = useRef(null);
    // const divRef = useRef(null);
    const value = useRef(0);
    console.log('value', value)


  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect");
  },[counter])

  //! console.log("Func Counter: ", counter);

// useEffect(() => {
//     console.log("useEffect");
//     return () => {console.log("func comp unmount")}
// },[counter])

console.log("Func Comp Rendered!")

  const increase = () => {
      setCounter(counter + 1);
      value.current = value.current + 1; 
      //when you click, It increases but you can't see and not render 
  }

  const changeBGColor = () => {
    //   console.log(inputRef.current.value)
    //   const newInput = document.getElementById("new")
    //   console.log(newInput)
// newInput.style.backgroundColor = text;

    //   const color = inputRef.current.value;
    //   inputRef.current.parentElement.style.backgroundColor = color;
      inputRef.current.parentElement.style.backgroundColor = text;
  }

  const handleText = (e) => {
      setText(e.target.value);
    
  }

  // const onDivBorder = () => {
//   divRef.current.style.border = "10px solid black"
// }

  return (
    <div className="function"  > 
      <h2>Functional Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>
      <hr />
      <input type="text" value={text}  ref={inputRef} onChange={handleText} id="new"/>
      <button onClick={() => changeBGColor()}>BG Color</button>
  {/* <button onClick={() => onDivBorder()}>BORDER</button> */}
    </div>
  );
};

export default FunctionalComponent;