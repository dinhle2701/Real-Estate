// const pool = require('../db');

// // CREATE
// exports.createProperty = async (req, res) => {
//   const { title, price, location, image_url, description } = req.body;

//   if (!title || !price || !location) {
//     return res.status(400).json({ error: 'Title, price, and location are required.' });
//   }

//   try {
//     const { rows } = await pool.query(
//       `INSERT INTO properties (title, price, location, image_url, description) 
//        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
//       [title, price, location, image_url || '', description || '']
//     );
//     return res.status(201).json(rows[0]);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// // GET ALL
// exports.getAllProperties = async (_req, res) => {
//   try {
//     const { rows } = await pool.query('SELECT * FROM properties ORDER BY id DESC');
//     return res.json(rows);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// // GET BY ID
// exports.getPropertyById = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const { rows } = await pool.query('SELECT * FROM properties WHERE id = $1', [id]);

//     if (rows.length === 0) {
//       return res.status(404).json({ error: 'Property not found.' });
//     }

//     return res.json(rows[0]);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// // UPDATE
// exports.updateProperty = async (req, res) => {
//   const { id } = req.params;
//   const { title, price, location, image_url, description } = req.body;

//   try {
//     const { rows } = await pool.query(
//       `UPDATE properties SET 
//         title = COALESCE($1, title),
//         price = COALESCE($2, price),
//         location = COALESCE($3, location),
//         image_url = COALESCE($4, image_url),
//         description = COALESCE($5, description)
//        WHERE id = $6 RETURNING *`,
//       [title, price, location, image_url, description, id]
//     );

//     if (rows.length === 0) {
//       return res.status(404).json({ error: 'Property not found.' });
//     }

//     return res.json(rows[0]);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// // DELETE
// exports.deleteProperty = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const { rows } = await pool.query('DELETE FROM properties WHERE id = $1 RETURNING *', [id]);

//     if (rows.length === 0) {
//       return res.status(404).json({ error: 'Property not found.' });
//     }

//     return res.json({ message: 'Property deleted successfully.' });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };
