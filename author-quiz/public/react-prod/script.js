'use strict';

(function () {

	'use strict';

	var Quiz = React.createClass({
		displayName: 'Quiz',

		propTypes: {
			books: React.PropTypes.array.isRequired
		},
		render: function render() {
			return React.createElement(
				'div',
				null,
				this.props.books.map(function (book) {
					return React.createElement(Book, { title: book });
				})
			);
		}
	});

	var data = ['test', 'test', 'test'];

	var books = ['The Lord of the Rings', 'The Iliad', 'The Adventures of Huckleberry Finn', 'The Scarlet Letter'];

	var Book = React.createClass({
		displayName: 'Book',

		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h4',
					null,
					this.props.title
				)
			);
		}
	});

	React.render(React.createElement(Quiz, { books: books }), document.getElementById("container"));
})();
//# sourceMappingURL=script.js.map
