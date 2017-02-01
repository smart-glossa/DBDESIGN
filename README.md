# DBDESIGN
As of now, we starts referring the following websites
1. https://dbdesigner.net/
2. https://www.vertabelo.com/


<p>
<b>Model</b>
</p>

<p>
1. Project:<br>
   CREATE TABLE `project` (
  `projectId` int(11) NOT NULL auto_increment,
  `projectName` varchar(250) default NULL,
  `description` varchar(250) default NULL,
  PRIMARY KEY  (`projectId`),
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1

</p>
<p>
2. Tables: <br>
  CREATE TABLE `protable` (
  `tableId` int(11) NOT NULL auto_increment,
  `tableName` varchar(50) default NULL,
  `projectId` int(11) default NULL,
  PRIMARY KEY  (`tableId`),
  KEY `projectId` (`projectId`),
  CONSTRAINT `protable_ibfk_1` FOREIGN KEY (`projectId`) REFERENCES `project` (`projectId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1


</p>
<p>
3. Columns: <br>
  CREATE TABLE `procolumn` (
  `columnId` int(11) NOT NULL auto_increment,
  `tableId` int(11) default NULL,
  `coulmnName` varchar(50) default NULL,
  `dataType` varchar(50) default NULL,
  `defaults` varchar(50) default NULL,
  `isPrimaryKey` tinyint(1) default NULL,
  `allowNull` tinyint(1) default NULL,
  `isUnique` tinyint(1) default NULL,
  `isAutoIncrement` tinyint(1) default NULL,
  `isForeignKey` tinyint(1) default NULL,
  PRIMARY KEY  (`columnId`),
  KEY `tableId` (`tableId`),
  CONSTRAINT `procolumn_ibfk_1` FOREIGN KEY (`tableId`) REFERENCES `protable` (`tableId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
</p>

<p>
<b>View</b>
<p>
1. Project Add Form -> He can able to add project Name and their respective tables and columns
2. Project View page -> Should display all the tables and their respective columns in a respective rectangular box
</p>

<p>
<b> Controller </b>
</p>
