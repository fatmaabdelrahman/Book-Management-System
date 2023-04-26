CREATE TABLE book_store.books (
    id   serial NOT NULL,  
    title   varchar (250) NOT NULL,
    isbn varchar (50) NOT NULL,
    description varchar (1000)  null,
    publisher varchar (50) NOT null,
    author varchar (50) NOT null,
    pages varchar (5)  null,
    store_code varchar (5) NOT null,
    created_on timestamp NOT null,
    created_by varchar (50) NOT null,
    constraint books_pkey primary key (id) 
);

-- book_store.stores definition

-- Drop table

-- DROP TABLE book_store.stores;

CREATE TABLE book_store.stores (
	id serial NOT NULL,
	store_name varchar(100) NOT NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	address varchar(200) NOT NULL,
	CONSTRAINT store_pkey PRIMARY KEY (id)
);