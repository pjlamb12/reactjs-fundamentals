(function () {

	'use strict';

	var Quiz = React.createClass({
		propTypes: {
			books: React.PropTypes.array.isRequired
		},
		render: function() {
			return (
				<div>
					{this.props.books.map(function(book) {
						return <Book title={book} />;
					})}
				</div>
			);
		}
	});

	var data = [
		'test',
		'test',
		'test'
	];

	var books = [
		'The Lord of the Rings',
		'The Iliad',
		'The Adventures of Huckleberry Finn',
		'The Scarlet Letter'
	]

	var Book = React.createClass({
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		render: function() {
			return (
				<div>
					<h4>{this.props.title}</h4>
				</div>
			);
		}
	});

	React.render(<Quiz books={books} />, document.getElementById("container") );

})();