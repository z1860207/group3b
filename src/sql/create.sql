#associate account creation sql

DROP TABLE ASSOCIATES;
CREATE TABLE ASSOCIATES ( -- creating the table
          USER_ID CHAR(64) NOT NULL UNIQUE, -- using a unique primary key in employee login names
          PASSWORD CHAR(73) BINARY NOT NULL, -- a password attribute via variable character data type
          PRIMARY KEY (USER_ID) -- setting the primary key to the unique employee id
);

INSERT INTO ASSOCIATES
        (USER_ID, PASSWORD)
                VALUES('JGordon12', 'hunter2');