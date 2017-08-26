// This is here if we need to revert to vanilla ORM 

// let orm = {
// 	// Queries all records from the table
// 	selectAll: function (tableInput, cb) {
// 		var queryString = 'SELECT * FROM ' + tableInput + ';';
// 		connection.query(queryString, function (err, result) {
// 			if (err) throw err;
// 			cb(result);
// 		});
// 	},
// 	// Adds a record to the table
// 	// vals is an array of values that we want to save to cols
// 	// cols are the columns we want to insert the values into
// 	insertOne: function (table, cols, vals, cb) {
// 		var queryString = 'INSERT INTO ' + table;

// 		queryString = queryString + ' (';
// 		queryString = queryString + cols.toString();
// 		queryString = queryString + ') ';
// 		queryString = queryString + 'VALUES (';
		
// 		queryString = queryString + print(vals.length);
// 		queryString = queryString + ') ';

// 		// WHAT ELSE DO WE WANT TO DO TO TABLE

// 		console.log(queryString);

// 		connection.query(queryString, vals, function (err, result) {
// 			if (err) throw err;
// 			cb(result);
// 		});
// 	},
// 	// Updates a record in the table
// 	// objColVals would be the columns and values that you want to update
// 	updateOne: function (table, objColVals, condition, cb) {
// 		var queryString = 'UPDATE ' + table;

// 		queryString = queryString + ' SET ';
// 		queryString = queryString + objToSql(objColVals);
// 		queryString = queryString + ' WHERE ';
// 		queryString = queryString + condition;

// 		console.log(queryString);
// 		connection.query(queryString, function (err, result) {
// 			if (err) throw err;
// 			cb(result);
// 		});
// 	},
// 	//  Deletes beer from table
// 	deleteOne: function(table, condition, cb) {
// 		var queryString = 'DELETE FROM ' + table;
// 		queryString = queryString + ' WHERE ';
// 		queryString = queryString + condition;

// 		connection.query(queryString, function (err, result) {
// 			if (err) throw err;
// 			cb(result);
// 		});
// 	}
// };


// // Export ORM
// // ==============================================================================
// module.exports = orm;