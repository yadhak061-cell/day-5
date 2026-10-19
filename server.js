const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello from Docker & Kubernetes (AKS)!</h1><p>CI/CD Pipeline v1</p>');
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Running on port ${port}`));
