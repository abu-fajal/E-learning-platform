import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PricingPage.css";

const PricingPage = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <>
      <Navbar />

      {/* ✅ OUTER FULL-WIDTH WRAPPER */}
      <div className="pricing-wrapper">

        <header className="pricing-header">
          <h1>Choose Your Plan</h1>
          <p>Simple and flexible pricing for every learner</p>

          <div className="billing-toggle">
            <span
              className={billing === "monthly" ? "active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </span>
            <span
              className={billing === "yearly" ? "active" : ""}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </span>
          </div>
        </header>

        <div className="pricing-container">
          <section className="pricing-cards">
            <div className="card">
              <h3>Free</h3>
              <h2>$0<span>/month</span></h2>
              <button>Get Started</button>
              <ul>
                <li>✓ Access to basic courses</li>
                <li>✓ Community support</li>
              </ul>
            </div>

            <div className="card popular">
              <div className="badge">Most Popular</div>
              <h3>Pro</h3>
              <h2>$19<span>/month</span></h2>
              <button>Get Started</button>
              <ul>
                <li>✓ Unlimited access to all courses</li>
                <li>✓ Priority support</li>
                <li>✓ Certificate of completion</li>
              </ul>
            </div>

            <div className="card">
              <h3>Premium</h3>
              <h2>$49<span>/month</span></h2>
              <button>Get Started</button>
              <ul>
                <li>✓ All Pro features</li>
                <li>✓ Exclusive workshops</li>
                <li>✓ Personalized learning path</li>
              </ul>
            </div>
          </section>

          <section className="feature-comparison">
            <h2>Feature Comparison</h2>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Free</th>
                  <th>Pro</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Course Access</td><td>✗</td><td>✓</td><td>✓</td></tr>
                <tr><td>Community Support</td><td>✓</td><td>✓</td><td>✓</td></tr>
                <tr><td>Priority Support</td><td>✗</td><td>✓</td><td>✓</td></tr>
                <tr><td>Exclusive Workshops</td><td>✗</td><td>✗</td><td>✓</td></tr>
                <tr><td>Personalized Learning Path</td><td>✗</td><td>✗</td><td>✓</td></tr>
              </tbody>
            </table>
          </section>

          <section className="faq">
            <h2>Frequently Asked Questions</h2>
            <details>
              <summary>What is EduLearn?</summary>
              <p>EduLearn is an online learning platform offering a wide range of courses.</p>
            </details>
            <details>
              <summary>How do I cancel my subscription?</summary>
              <p>You can cancel anytime from your account settings.</p>
            </details>
            <details>
              <summary>Can I switch plans later?</summary>
              <p>Yes, you can upgrade or downgrade your plan anytime.</p>
            </details>
          </section>

          <section className="pricing-cta">
            <h2>Ready to start learning?</h2>
            <p>Join thousands of learners and unlock your potential today.</p>
            <button>Get Started</button>
          </section>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default PricingPage;
