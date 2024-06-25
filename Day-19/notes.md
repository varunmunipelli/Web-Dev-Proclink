# Store Procedures
- Create
~~~SQL
Create Procedure spGetMoviesByGenre
	@Genre nvarchar(20)
~~~
- Alter
~~~SQL
Alter Procedure spGetMoviesByGenre
~~~
- Drop
~~~SQL
Drop Procedure spGetMoviesByGenre
~~~
- Rename
~~~SQL
Exec sp_rename 'spGetMoviesByGenre' , 'spGetMoviesByID';
~~~
# Difference btw SQL and NO SQL
- SQL insertion of data is faster
- NO SQL Retrieval of data is faster
>- When reading becomes faster the insertion becomes slower  

## Searching process
- searching/scanning a column one by one = `Table Scan`

# INDEXING 
> it is a way to read data fast, fast retrieval of data
1. `Clustered(pk)`
- Determines the table order  
- Only one clustered index for table
2. `Non-Clustered`
- Doesn't decide table order
- Many per table

> ACID Properties - Atomicity, Consistency, Isolation, Durability

