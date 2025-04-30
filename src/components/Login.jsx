import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  const validate = () => {
    const newErrors = {};
    if (!emailRegex.test(email)) {
      newErrors.email = "Geçerli bir email giriniz.";
    }
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Şifre en az 8 karakter, bir büyük harf, bir küçük harf ve bir rakam içermelidir.";
    }
    if (!accepted) {
      newErrors.accepted = "Şartları kabul etmelisiniz.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="login-form">
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Geçerli bir email giriniz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="email-input"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Güçlü bir şifre giriniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="password-input"
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            data-testid="accept-checkbox"
          />
          Şartları kabul ediyorum
        </label>
        {errors.accepted && <p>{errors.accepted}</p>}
      </div>
      <button
        type="submit"
        disabled={!emailRegex.test(email) || !passwordRegex.test(password) || !accepted}
        data-testid="submit-button"
      >
        Kayıt ol
      </button>
    </form>
  );
}
