create database to_do_database;

use to_do_database;

create table todos (
	id int auto_increment,
    text varchar(255),
    primary key(id)
);

insert into todos (text)
values ("To eat"),("To sleep"),("To study");

select * from todos;