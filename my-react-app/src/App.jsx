import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      setLogin(true);
      setError("");
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  if (!login) {
    return (
      <div className="login-page">
        <div className="login-box">
          <img src="/aichi1.jpg" alt="Aichi" />

          <h1>Aichi Vanguard</h1>
          <p>เข้าสู่ระบบเพื่อดูประวัติตัวละคร</p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <div className="error">{error}</div>}

            <button type="submit">เข้าสู่ระบบ</button>
          </form>

          <small>Username: admin | Password: 12345678</small>
        </div>
      </div>
    );
  }

  return (
    <div className="history-page">
      <header>
        <h2>⚔️ Aichi Vanguard</h2>

        <button onClick={() => setLogin(false)}>
          ออกจากระบบ
        </button>
      </header>

      <main>
        <section className="profile">
          <img src="/aichi1.jpg" alt="Aichi Sendou" />

          <div>
            <h1>Aichi Sendou</h1>
            <h3>Cardfight!! Vanguard</h3>

            <p>
              Aichi Sendou เป็นตัวละครเอกของเรื่อง
              Cardfight!! Vanguard เป็นเด็กหนุ่มที่เริ่มต้นจากการเป็น
              Cardfighter ที่ขาดความมั่นใจ และค่อย ๆ พัฒนาตัวเอง
              ผ่านการต่อสู้และมิตรภาพกับเพื่อน ๆ
            </p>

            <p>
              เขามีความมุ่งมั่นที่จะพัฒนาความสามารถของตัวเอง
              และก้าวขึ้นเป็น Cardfighter ที่แข็งแกร่ง
            </p>
          </div>
        </section>

        <section className="info">
          <h2>📖 ประวัติตัวละคร</h2>

          <div className="cards">
            <div>
              <b>ชื่อ</b>
              <p>Aichi Sendou</p>
            </div>

            <div>
              <b>เรื่อง</b>
              <p>Cardfight!! Vanguard</p>
            </div>

            <div>
              <b>บทบาท</b>
              <p>ตัวละครเอก / Cardfighter</p>
            </div>

            <div>
              <b>Clan</b>
              <p>Royal Paladin</p>
            </div>
          </div>
        </section>

        <section className="story">
          <h2>⭐ เรื่องราวของ Aichi</h2>

          <p>
            Aichi เป็นเด็กหนุ่มที่ค่อนข้างขี้อาย
            และไม่ค่อยมั่นใจในตัวเอง แต่หลังจากได้พบกับ
            Cardfight!! Vanguard ชีวิตของเขาก็เปลี่ยนไป
          </p>

          <p>
            เขาได้พบกับเพื่อนและคู่แข่งมากมาย
            และเรียนรู้จากการต่อสู้แต่ละครั้ง
            ทำให้เขาเติบโตทั้งด้านความสามารถและจิตใจ
          </p>
        </section>

        <section className="gallery">
          <h2>🖼️ รูปภาพ Aichi</h2>

          <div className="images">
            <img src="/aichi1.jpg" alt="Aichi 1" />
            <img src="/aichi2.jpg" alt="Aichi 2" />
            <img src="/aichi3.jpg" alt="Aichi 3" />
          </div>
        </section>
      </main>

      <footer>
        © 2026 Aichi Vanguard
      </footer>
    </div>
  );
}

export default App;