/* Create recipes table */

CREATE TABLE recipes (
  id serial PRIMARY KEY,
  external_id varchar(20),
  name varchar(50),
  thumbnail_url varchar,
  description varchar,
  backstory varchar,
  instructions jsonb[],
  components jsonb[],
  UNIQUE (external_id, name)
);

/* Create ingredients */



/* Create user table */
CREATE TABLE users (
  id serial PRIMARY KEY,
  first_name varchar,
  last_name varchar
);

/* Create recipe ratings table */
CREATE TABLE ratings (
  id serial PRIMARY KEY,
  user_id integer REFERENCES users (id),
  recipe_id integer REFERENCES recipes (id),
  rating smallint CHECK (rating >= 0 AND rating <= 5),
  comment text
);