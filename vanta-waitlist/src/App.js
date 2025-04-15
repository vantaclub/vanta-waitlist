import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>VANTA</h1>
      <p>Club of Motion – Discipline is the Lifestyle</p>
      <p>Be the first to access Drop 001: Running Club</p>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Join Waitlist</button>
        </form>
      ) : (
        <p>Thanks! You’re on the list.</p>
      )}
    </div>
  );
}

export default App;
