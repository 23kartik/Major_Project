import React from "react";

import './Contact.css'
const Contact = () => {
  return(
    <div class="xcv">
    <div class="shade">
		<div class="blackboard">
				<div class="form">
						<p>
								<label>Name: </label>
								<input type="text" />
						</p>
						<p>
								<label>Email: </label>
								<input type="text" />
						</p>
						<p>
								<label>Phone: </label>
								<input type="tel" />
						</p>
						<p>
								<label>Subject: </label>
								<input type="text" />
						</p>
						<p>
								<label>Message: </label>
								<textarea></textarea>
						</p>
						<p class="wipeout">
								<input type="submit" value="Send" />
						</p>
				</div>
		</div>
</div>

</div>
  ) ;
};

export default Contact;
