import express from "express";
import vhost from "vhost";

const app = express();

app.use((req, res, next) => {
  const subdomain = req.headers.host.split(".")[0];
  console.log("subdomain", subdomain);
  if (!subdomain.includes("localhost")) {
    // Render a response based on the subdomain
    res.send(`Hello from subdomain: ${subdomain}`);
  } else {
    // Handle cases where no subdomain is provided
    res.send("Welcome to the main domain");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
