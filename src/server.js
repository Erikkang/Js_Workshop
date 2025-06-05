import express from 'express';
import { createServer } from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url'; // <-- Correct import
import pokemonRoutes from '../routes/pokemon.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url); // <-- Correct usage

app.set("view engine", "ejs");

app.use("/", pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
