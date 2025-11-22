<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Post Loader</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      padding: 40px;
      text-align: center;
    }

    h1 {
      color: #333;
    }

    #status {
      font-size: 18px;
      margin-bottom: 20px;
      color: #555;
    }

    ul {
      list-style: none;
      padding: 0;
      width: 300px;
      margin: auto;
    }

    li {
      background: white;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }

    button:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <h1>📝 Blog Post Loader</h1>
  <div id="status">Loading posts…</div>
  <ul id="postList"></ul>
  <button id="retryBtn" style="display:none;">Retry</button>

  <script>
    const statusEl = document.getElementById("status");
    const postList = document.getElementById("postList");
    const retryBtn = document.getElementById("retryBtn");

    function loadPosts() {
      statusEl.textContent = "Loading posts…";
      postList.innerHTML = "";
      retryBtn.style.display = "none";

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const success = Math.random() > 0.3; // 70% chance to succeed
          if (success) {
            resolve([
              "How to Master JavaScript",
              "Top 10 CSS Tricks",
              "Understanding Async/Await",
              "Frontend vs Backend Explained",
              "Tips for Clean Code"
            ]);
          } else {
            reject("Failed to load posts.");
          }
        }, 2000);
      });
    }

    async function displayPosts() {
      try {
        const posts = await loadPosts();
        statusEl.textContent = "Posts loaded successfully!";
        posts.forEach(title => {
          const li = document.createElement("li");
          li.textContent = title;
          postList.appendChild(li);
        });
      } catch (error) {
        statusEl.textContent = error;
        retryBtn.style.display = "inline-block";
      }
    }

    retryBtn.addEventListener("click", displayPosts);

    // Initial load
    displayPosts();
  </script>
</body>
</html>
