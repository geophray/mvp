/* Create recipes table */

CREATE TABLE recipes (
  id serial PRIMARY KEY,
  name varchar,
  thumbnail_url varchar,
  description varchar,
  backstory varchar,
  instructions jsonb[],
  ingredients jsonb[]
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