import React from 'react';

export default (props) => {
	return (
		<div className="modal-container">
			<div className="close-button" onClick={props.closeModal}>
				X
			</div>
		</div>
	);
};
