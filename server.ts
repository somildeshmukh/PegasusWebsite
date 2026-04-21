import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // API route to handle lead submission
  app.post("/api/leads", (req, res) => {
    const { name, email, phone, experience, state, city } = req.body;
    
    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const csvFilePath = path.join(publicDir, "leads.csv");
    const isNewFile = !fs.existsSync(csvFilePath);
    
    // Create CSV row
    const date = new Date().toISOString();
    // Escape fields to handle commas in data
    const escapeCSV = (str: string) => `"${String(str || '').replace(/"/g, '""')}"`;
    const row = `${escapeCSV(date)},${escapeCSV(name)},${escapeCSV(email)},${escapeCSV(phone)},${escapeCSV(experience)},${escapeCSV(state)},${escapeCSV(city)}\n`;

    try {
      if (isNewFile) {
        // Write header if file doesn't exist
        const header = "Date,Name,Email,Phone,Experience,State,City\n";
        fs.writeFileSync(csvFilePath, header + row);
      } else {
        // Append to existing file
        fs.appendFileSync(csvFilePath, row);
      }
      res.json({ success: true, message: "Lead saved successfully" });
    } catch (error) {
      console.error("Error writing to CSV:", error);
      res.status(500).json({ success: false, message: "Failed to save lead" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
