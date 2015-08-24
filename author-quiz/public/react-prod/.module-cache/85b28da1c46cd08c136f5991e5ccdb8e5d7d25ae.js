(function () {

	'use strict';

	var Quiz = React.createClass({displayName: "Quiz",
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
		render: function() {
			return (
				React.createElement("div", null, 
					React.createElement("h4", null, this.props.title)
				)
			);
		}
	});

	React.render(React.createElement(Quiz, {books: ['The Lord of the Rings', 'The Iliad']}), document.getElementById("container") );

})();