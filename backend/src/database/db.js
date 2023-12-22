import mysql from 'mysql2';


const Connection = async (connectionConfig) => {

    // Create a MySQL connection
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '2002',
        database: 'bataoweb',
    });

    // Connect to the database
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to the database:', error);
            return;
        }

        console.log('Connected to the database');

        // Example query
        // const query = 'SELECT * FROM your_table';
        // connection.query(query, (queryError, result) => {
        //     if (queryError) {
        //         console.error('Error executing query:', queryError);
        //         return;
        //     }

        //     // Process the query result
        //     console.log('Query Result:', result);

        //     // Close the database connection
        //     connection.end();
        // });
    });
};

export default Connection;