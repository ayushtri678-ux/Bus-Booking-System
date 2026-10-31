import "./About.css";
function About() {
  return (
    <div className="simple-page">

      <div className="page-header">

        <span>ABOUT BMB</span>

        <h1>Book My Bus</h1>

        <p>
          A simple and convenient platform for booking
          bus tickets and planning your journey.
        </p>
export default About;
<section className="about-details">
  <h2>About Book My Bus</h2>
  <p>
    Book My Bus (BMB) is an online bus ticket booking
    platform designed to make travelling easier,
    faster and more convenient. Passengers can search
    for buses, select seats, book tickets and manage
    their journeys through a user-friendly website.
  </p>

  <h2>Our Mission</h2>
  <p>
    Our mission is to simplify bus travel by providing
    a reliable and convenient online booking experience.
  </p>

  <h2>Our Vision</h2>
  <p>
    Our vision is to make bus transportation more
    accessible, organized and technology-driven.
  </p>

  <h2>Why Choose Book My Bus?</h2>
  <p>
    Book My Bus provides easy route searching,
    convenient seat selection, booking management
    and a simple interface for planning journeys.
  </p>

  <h2>Technologies Used</h2>
  <p>
    React.js, Java, Spring Boot and MySQL.
  </p>
</section>
      </div>


      <div className="about-container">

        <div className="about-card">

          <div className="about-logo">
            BMB
          </div>

          <div>

            <h2>Travel Smart. Travel Easy.</h2>

            <p>
              Book My Bus is designed to make bus ticket
              booking simple, convenient and user-friendly.
              Find routes, select your seats and manage
              your bookings from one place.
            </p>

          </div>

        </div>


        <div className="about-features">

          <div>
            <h3>Easy Booking</h3>
            <p>
              Search buses and book your journey easily.
            </p>
          </div>

          <div>
            <h3>Simple Experience</h3>
            <p>
              Clean and easy-to-use booking interface.
            </p>
          </div>

          <div>
            <h3>Secure Account</h3>
            <p>
              Your account is protected with authentication.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

