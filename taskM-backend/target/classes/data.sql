
-- here some static data for the user and admin credential
insert into login_data(id,name,pass,logintype)
values(1,'adarsh','pandey','user');

insert into login_data(id,name,pass,logintype)
values(2,'aditya','singh','admin');

insert into login_data(id,name,pass,logintype)
values(3,'aman','dixit','user');

insert into login_data(id,name,pass,logintype)
values(4,'deepu','singh','admin');

-- creating the task database

insert into Task(id,title,priority,status)
values(1,'make task managet','low','open');


insert into Task(id,title,priority,status)
values(2,'make task manager app','low','open');


insert into Task(id,title,priority,status)
values(3,'make aws application','low','open');