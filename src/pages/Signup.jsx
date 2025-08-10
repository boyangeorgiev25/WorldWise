import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    try {
      setError("");
      signup(name, email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            minLength="6"
          />
        </div>

        {error && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
            {error}
          </div>
        )}

        <div>
          <button type="submit">Sign Up</button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>
            Already have an account?{" "}
            <Link to="/login" style={{ color: '#00c46a', textDecoration: 'none' }}>
              Login here
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}