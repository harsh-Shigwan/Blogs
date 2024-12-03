import mysql from "mysql2"; // Use mysql2 instead of mysql

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#Shigwan@242003",
    database: "blog",
});
