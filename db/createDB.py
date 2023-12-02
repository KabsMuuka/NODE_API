import mysql.connector

conn = mysql.connector.connect(
    host =  'localhost',
    user = 'publicDB', 
    password = 'password', 
    database = 'students'
    )
cursor = conn.cursor()

create_table_query = """
CREATE TABLE IF NOT EXISTS StudentDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    studentSin VARCHAR(255) NOT NULL
)
"""
cursor.execute(create_table_query) 
print("Table successfully created!")

conn.commit()

