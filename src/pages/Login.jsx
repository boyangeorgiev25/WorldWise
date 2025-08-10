import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const result = login(email, password);
    if (!result.success) {
      setError(result.error);
    } else {
      setError("");
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
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {error && (
          <div style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
            {error}
          </div>
        )}

        <div>
          <button type="submit">Login</button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/signup" style={{ color: '#00c46a', textDecoration: 'none' }}>
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}
