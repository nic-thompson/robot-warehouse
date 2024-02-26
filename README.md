# robot-warehouse

![warehouse-robot](https://github.com/nic-thompson/robot-warehouse/assets/1699149/0980d79f-785d-46e2-a210-8308a046a1fc)

A robot command mechanism. The robot moves along a grid the dimensions of the grid are 10 by 10. The warehouse is aligned along north-south and east-west axes.
All of the commands to the robot consist of a single capital letter and different commands are delineated by whitespace.

### Example command sequences

The command sequence: "N E S W" will move the robot in a full square, returning it to where it started.
If the robot starts in the south-west corner of the warehouse then the following commands will move it to the middle of the warehouse.
"N E N E N E N E"

