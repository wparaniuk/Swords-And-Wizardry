import React from "react";

function PromptModal({ message, onYes, onNo }){
	const handleYesClick = () => {
    onYes();
  };

  const handleNoClick = () => {
    onNo();
  };
	const pageHeight = document.documentElement.scrollHeight;
		return (
			<div className="promptModalContainer"
			style={{
				height: pageHeight
			}}>
				<div
				className="promptModal"
				style={{
					position: "absolute",
					top: "50vh",
					left: "50%",
					transform: "translate(-50%, -50%)",
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