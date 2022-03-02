import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [blogs, setBlogs] = useState();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => {
          if (!response.ok) {
            throw Error("could not fetch the data from resource");
          }

          return response.json();
        })
        .then((data) => {
          setBlogs(data);
          setPending(false);
          setError(null);
        })
        .catch((error) => {
          setPending(false);
          setError(error.message);
        });
    }, 1000);
  }, []);
  return (
    <div className="App">
      {error && <div>{error}</div>}
      {pending && <div>Loading</div>}
      {blogs &&
        blogs.map((blog, id) => (
          <div key={id} className="blogs">
            {blog.title}
          </div>
        ))}
    </div>
  );
}

export default App;
