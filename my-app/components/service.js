// components/Services.js
export default function Services() {
  return (
    <section className="services" id="services">
      <h2>Business Solutions for Startup and MSMEs</h2>
      <p className="services-subtitle">SERVICES</p>

      <div className="services-grid">
        <div className="service-card">
          <h3>AARAMBH</h3>
          <p>Complete company registration solutions.</p>
        </div>

        <div className="service-card">
          <h3>PRAMANIT</h3>
          <p>Get certified with business compliance.</p>
        </div>

        <div className="service-card">
          <h3>VIKAS</h3>
          <p>Business growth with funding support.</p>
        </div>
      </div>
    </section>
  );
}