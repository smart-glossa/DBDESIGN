# DBDESIGN
As of now, we starts referring the following websites
1. https://dbdesigner.net/
2. https://www.vertabelo.com/


<p>
<b>Model</b>
</p>
<p>
1. User:<br>
   name varchar(100),
   userName varchar(100) primarykey,
   password varchar(100).
   
</p>
<p>
2. Project:<br>
   projectId int autonumber primarykey,
   projectName varchar(25),
   description varchar(250),
   userName varchar(100) foreign key.
</p>
<p>
3. Tables: <br>
   tableId int autonumber primarykey,
   tableName varchar(50),
   projectId foreign key.
</p>
<p>
4. Columns: <br>
   columnId int autonumber primarykey,
   tableId int foreign key,
   coulmnName varchar(50),
   dataType varchar(50),
   default varchar(50),
   isPrimaryKey boolean,
   allowNull boolean,
   isUnique boolean,
   isAutoIncrement boolean,
   isForeignKey boolean.
</p>

<p>
<b>View</b>
<p>
1. SignUp and SignIn page
2. HomePage -> Should display the list pf his/her projects
3. Project Add Form -> He can able to add project Name and their respective tables and columns
4. Project View page -> Should display all the tables and their respective columns in a respective rectangular box
</p>

<p>
<b> Controller </b>
</p>
<p>
1. Have to add all the MySQL Queries used in this project.
   (I)user Add:
 insert into user(name,userName,pass);

</p>
