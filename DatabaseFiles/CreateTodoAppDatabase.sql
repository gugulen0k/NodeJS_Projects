-- ======== [ CREATE 'todos' TABLE ] ========
CREATE TABLE todos (
  id CHAR(36) UNIQUE NOT NULL,
  name VARCHAR(100) UNIQUE NOT NULL,
  completed BOOLEAN NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL,
  PRIMARY KEY (id)
);
-- ==================================================

-- ======== [ INSERT VALUES INTO THE TABLE ] ========
INSERT INTO
  todos
VALUES
  ("1", "test1", 0, "2022-01-15", "2022-01-15"),
  ("2", "test2", 0, "2022-01-15", "2022-01-15"),
  ("3", "test3", 1, "2022-01-15", "2022-01-15"),
  ("4", "test4", 0, "2022-01-15", "2022-01-15"),
  ("5", "test5", 1, "2022-01-15", "2022-01-15");
-- ==================================================

-- ======== [ CREATE PROCEDURE TO ADD NEW TASK ] ========
CREATE PROCEDURE AddNewTask(
  IN _id CHAR(36),
  IN _name VARCHAR(100),
  IN _completed BOOLEAN,
  IN _created_at DATE,
  IN _updated_at DATE
) 
BEGIN
  INSERT INTO
    todos
  VALUES
    (_id, _name, _completed, _created_at, _updated_at);
  SELECT
    id,
    name,
    completed,
    created_at,
    updated_at
  FROM
    todos
  WHERE
    id = _id;
END;

drop procedure AddNewTask;
-- ======================================================

-- ======== [ CREATE PROCEDURE TO FIND CERTAIN TASK ] ========
CREATE PROCEDURE FindById(IN _id CHAR(36)) 
BEGIN
  SELECT
    id,
    name,
    completed,
    created_at,
    updated_at
  FROM
    todos
  WHERE
    id = _id;
END;

drop procedure FindById;
-- ===========================================================

-- ======== [ CREATE PROCEDURE TO FIND CERTAIN TASK ] ========
CREATE PROCEDURE DeleteById(IN _id CHAR(36)) 
BEGIN
  DELETE FROM todos
  WHERE id = _id;
END;

drop procedure DeleteById;
-- =========================================================== 
