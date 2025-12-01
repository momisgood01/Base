import "../Component/Contact.css";

function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1>Let’s Stay Connected</h1>
          <p className="text-secondary">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Content Row */}
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-12 col-lg-4">
            <div className="bg-white p-4 h-100 shadow-sm rounded">
              <div className="mb-4">
                <h5>Email Address</h5>
                <p className="text-secondary mb-0">support@busybrain.com</p>
              </div>

              <div className="mb-4">
                <h5>Office Location</h5>
                <p className="text-secondary mb-0">Abule Egba</p>
              </div>

              <div className="mb-4">
                <h5>Phone Number</h5>
                <p className="text-secondary mb-0">009 8754 3433 223</p>
              </div>

              <div>
                <h5>Skype Email</h5>
                <p className="text-secondary mb-0">example@yourmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-12 col-lg-8">
            <div className="bg-white p-4 shadow-sm rounded">
              <form>
                <div className="row g-3">
                  {/* Full Name */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="fullname" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="form-control"
                      placeholder="BusyBrain"
                    />
                  </div>

                  {/* Email */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="number" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      className="form-control"
                      placeholder="08103670964"
                    />
                  </div>

                  {/* Subject */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 text-center mt-3">
                    <button type="submit" className="btn btn-primary px-4 py-2">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
