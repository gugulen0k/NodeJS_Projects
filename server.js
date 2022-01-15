import express from "express";
import router from './routes/taskRoutes.js';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/api', router);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
