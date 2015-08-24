(function () {

	'use strict';

	var Quiz = React.createClass({displayName: "Quiz",
		render: function() {
			return (
				React.createElement("div", null, "Test")
			);
		}
	});

	React.render(React.createElement(Quiz, {data: "foo"}), document.getElementById("container") );

})();