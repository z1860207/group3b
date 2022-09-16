#not doing AES anymore and switching to hashes, specifically bcrypt

#AES password decryption key: 3bkey
#select decryption example
#SELECT AES_DECRYPT(PASSWORD, '3bkey') FROM ASSOCIATES WHERE USER_ID = 'JGordon12';


#associate account creation sql
#necessary sql, password data field may change from blob to varchar
#DROP TABLE ASSOCIATES;

CREATE TABLE ASSOCIATES ( -- creating the table
	  USER_ID CHAR(16) NOT NULL UNIQUE, -- using a unique primary key in employee login names
	  PASSWORD BLOB NOT NULL, -- a password attribute via variable character blob data type
	  PASSWORD BLOB NOT NULL, -- a password attribute via variable character data type
	  PRIMARY KEY (USER_ID) -- setting the primary key to the unique employee id
);

INSERT INTO ASSOCIATES
        (USER_ID, PASSWORD)
	        VALUES('JGordon12', AES_ENCRYPT('hunter2', '3bkey'));
		

