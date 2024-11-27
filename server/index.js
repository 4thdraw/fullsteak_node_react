const express = require('express'); 
const path = require('path');  // 경로계산모듈



const nodeserver = express();
const PORT = process.env.PORT || 8000; 

//use 중간모듈 
nodeserver.use(express.static(path.join(__dirname, '../heyulreact/build'))); 
// 정적주소 경로계산해주는 중 

nodeserver.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../heyulreact/build', 'index.html'));
});


nodeserver.listen(PORT, () => {
  console.log('여긴 여디', __dirname)
  console.log(`Server is running on http://localhost:${PORT}`);
});


