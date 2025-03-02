import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setInterests((prev) =>
      checked ? [...prev, value] : prev.filter((interest) => interest !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm David</h1>
      <img alt="My profile pic" src="/profile.jpg" />
      <h2>About Me</h2>
      <p>
        I am a passionate technologist who loves building innovative web
        applications. With expertise in React and JavaScript, I enjoy creating
        seamless user experiences and solving complex problems.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <fieldset>
          <legend>Select Your Interests:</legend>
          <label>
            <input
              type="checkbox"
              value="Web Development"
              onChange={handleCheckboxChange}
            />
            Web Development
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Machine Learning"
              onChange={handleCheckboxChange}
            />
            Machine Learning
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Cybersecurity"
              onChange={handleCheckboxChange}
            />
            Cybersecurity
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thank you for signing up, {name}!</h3>
          <p>We've received your email: {email}</p>
          {interests.length > 0 && (
            <p>You're interested in: {interests.join(", ")}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
