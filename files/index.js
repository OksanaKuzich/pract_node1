const fs = require("fs/promises");
const path = require("path");

// console.log(__dirname);
// console.log(__filename);

const postsPath = path.join(__dirname, "..", "db", "posts.json");
// console.log(postsPath);

// читать файл
async function readPosts(postsPath) {
  const data = await fs.readFile(postsPath, "utf-8");
  console.log(data);
  return data;
}
// readPosts(postsPath);

// новий файл
// async function createFile(newPath) {
//   const data = fs.writeFile(newPath, JSON.stringify("New post!", null, 4));
// }
// const newPath = path.join(__dirname, "..", "db", "class.json");
// createFile(newPath);

// удалить
// async function removeFile(filePath) {
//   return await fs.unlink(filePath);
// }
// const filePath = path.join(__dirname, "..", "db", "class.json");
// removeFile(filePath);

// добавить
async function updatePosts() {
  const data = await readPosts(postsPath);
  const posts = JSON.parse(data);
  posts.push({
    userId: 1,
    id: 3,
    title: "class",
    body: "class work",
  });
  const updateData = JSON.stringify(posts, null, 4);
  return await fs.writeFile(postsPath, updateData);
}

updatePosts(postsPath);

function asyncHandler(func, ...postsPath) {
  try {
    func(...postsPath);
  } catch (error) {
    console.log(error.message);
  }
}

asyncHandler(updatePosts, postsPath);
