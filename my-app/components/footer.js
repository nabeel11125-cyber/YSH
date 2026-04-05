// components/Footer.js
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <h3>YSH Solution</h3>
          <p>Registration | Certification | Funding</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p><a href="tel:+919220768200" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9220768200</a></p>
          <p>support@ysh-solution.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 YSH Solution</p>
      </div>
    </footer>
  );
}