const { query } = require("./db/index")

// USERS //////////////////////////////////////////////////

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {

  const queryString = `
  SELECT *
  FROM users
  WHERE email = $1
  `;

  const queryParams = [email];

  return query(queryString, queryParams)
    .then(res => res.rows[0]);

};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {

  const queryString = `
  SELECT *
  FROM users
  WHERE id = $1
  `;

  const queryParams = [id];

  return query(queryString, queryParams)
    .then(res => res.rows[0]);

};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {

  const queryString = `
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;
  `;

  const queryParams = [user.name, user.email, user.password];

  return query(queryString, queryParams)
    .then(res => res.rows[0]);

};
exports.addUser = addUser;

// RESERVATIONS //////////////////////////////////////////////////

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {

  const queryString = `
  SELECT reservations.*, properties.*, AVG(rating) AS average_rating
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1 AND end_date < now()::date
  GROUP BY reservations.id, properties.id
  ORDER BY reservations.start_date
  LIMIT $2;
  `;

  const queryParams = [guest_id, limit];

  return query(queryString, queryParams)
    .then(res => res.rows);

};
exports.getAllReservations = getAllReservations;

// PROPERTIES //////////////////////////////////////////////////

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {

  let queryString = `
  SELECT properties.*, AVG(property_reviews.rating) AS average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  WHERE true
  `;

  const queryParams = [];

  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `AND city LIKE $${queryParams.length} `;
  }
  if (options.owner_id) {
    queryParams.push(options.owner_id);
    queryString += `AND owner_id = $${queryParams.length} `;
  }
  if (options.minimum_price_per_night && options.maximum_price_per_night) {
    const min = options.minimum_price_per_night * 100;
    const max = options.maximum_price_per_night * 100;
    queryParams.push(min, max);
    queryString += `AND cost_per_night BETWEEN $${queryParams.length - 1} AND $${queryParams.length} `;
  }

  queryString += "GROUP BY properties.id ";

  if (options.minimum_rating) {
    queryParams.push(Number(options.minimum_rating));
    queryString += `HAVING AVG(property_reviews.rating) >= $${queryParams.length}`;
  }

  queryParams.push(limit);
  queryString += `
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
  `;

  return query(queryString, queryParams)
    .then(res => res.rows);

};
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {

  const queryString = `
    INSERT INTO properties (
      owner_id,
      title,
      description,
      thumbnail_photo_url,
      cover_photo_url,
      cost_per_night,
      parking_spaces,
      number_of_bathrooms,
      number_of_bedrooms,
      country,
      street,
      city,
      province,
      post_code
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    RETURNING *;
  `;

  const queryParams = [
    property.owner_id,
    property.title,
    property.description,
    property.thumbnail_photo_url,
    property.cover_photo_url,
    property.cost_per_night,
    property.parking_spaces,
    property.number_of_bathrooms,
    property.number_of_bedrooms,
    property.country,
    property.street,
    property.city,
    property.province,
    property.post_code
  ];

  return query(queryString, queryParams)
    .then(res => res.rows[0]);

};
exports.addProperty = addProperty;
