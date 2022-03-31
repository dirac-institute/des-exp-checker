-- files database structure
-- execute this on a new file
CREATE TABLE files (
 fileid INTEGER PRIMARY KEY ASC,
 expname TEXT,
 name TEXT
);
CREATE INDEX files_expname_idx ON "files" (expname);

CREATE TABLE qa (
 qaid INTEGER PRIMARY KEY ASC,
 fileid INT NOT NULL,
 userid INT NOT NULL,
 problem INT NOT NULL,
 x INT,
 y INT,
 detail TEXT,
 timestamp TEXT NOT NULL DEFAULT current_timestamp
);
CREATE INDEX qa_fileid_idx ON "qa" (fileid);
CREATE INDEX qa_problem_idx ON "qa" (problem);
CREATE INDEX qa_userid_idx ON "qa" (userid);
