import React from "react";

function PromptModal({ message, onYes, onNo, textBoxPosition }){
	const handleYesClick = () => {
    onYes();
  };

  const handleNoClick = () => {
    onNo();
  };
		return (
			<div className="promptModalContainer">
				<div
				className="promptModal"
				style={{
					position: "absolute",
					top: textBoxPosition.top + 30,
					left: textBoxPosition.left,
				}}
				>
					<span>Czy na pewno chcesz usunąć: <strong style={{color: "red"}}>{message}</strong></span>
					<br></br>
					<button onClick={handleYesClick} style={{margin: "10px"}}>Tak</button>
					<button onClick={handleNoClick} style={{margin: "10px"}}>Nie</button>
				</div>
			</div>
		);
	}

export default PromptModal;