import React, {useState, useRef} from "react";

import "../../styles/basic-input.scss";

const BasicInput = props => {
	const [value, setValue] = useState("");
  const inputRef = useRef(null);

	const changeHanlder = props.onChange ? props.onChange : (event) => {
    setValue(event.target.value);
	}
	
	const enterHandler = event => {
    if(props.onEnterPress){
      const {code} = event;
      if( event.target.value && (code === "Enter" || code === "NumpadEnter") ) {
        props.onEnterPress(event.target.value);
        setValue("");
      }
    }
	}
  
  const eraseHandle = () => {
    setValue("");
    inputRef.current.focus();
  }
	
	return (
		<div className="basic-input">
			<input
				type={props.type}
				placeholder={props.placeholder}
				onChange={changeHanlder}
				onKeyPress={enterHandler}
				value={value}
        ref={inputRef}
			/>
      <span className={`erase-icon ${ !value ? "-hidden" : "" }`}>
				<i className="fa-solid fa-eraser" onClick={eraseHandle} />
			</span>
		</div>
	);
}

export default BasicInput;