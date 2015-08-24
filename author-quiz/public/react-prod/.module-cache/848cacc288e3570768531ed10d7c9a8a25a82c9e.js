(function () {

	'use strict';

	var Quiz = React.createClass({displayName: "Quiz",
		propTypes: {
			books: React.PropTypes.array.isRequired
		},
		render: function() {
			return (
				React.createElement("div", null, 
					this.props.books.map(function(book) {
						return React.createElement(Book, {title: book});
					})
				)
			);
		}
	});

	var Book = React.createClass({displayName: "Book",
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		render: function() {
			return (
				React.createElement("div", null, 
					React.createElement("h4", null, this.props.title)
				)
			);
		}
	});

	React.render(React.createElement(Quiz, {books: [9, 'The Iliad']}), document.getElementById("container") );

})();