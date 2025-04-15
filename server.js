require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger"); // adjust if needed

const app = express();
connectDB();

// Swagger Docs route (must be before listen())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is working!");
});

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
