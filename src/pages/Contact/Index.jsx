import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import useConfigCompanyStore from "../../store/configCompany.store";

const Contact = () => {
  const { storeCompanyData } = useConfigCompanyStore();

  const contacts = [
    {
      name: "Email",
      value: storeCompanyData && storeCompanyData?.email,
      // icon: <MdOutlineAlternateEmail />,
      buttonText: "Kirim Email",
      href: `mailto:${storeCompanyData && storeCompanyData?.email}`,
    },
    {
      name: "Telepon",
      value: storeCompanyData && storeCompanyData?.telp,
      // icon: <IoCallOutline />,
      buttonText: "Hubungi Sekarang",
      href: `tel:${storeCompanyData && storeCompanyData?.telp}`,
    },
    {
      name: "Alamat",
      value: storeCompanyData && storeCompanyData?.address,
      // icon: <IoLocationOutline />,
      buttonText: "Lihat Lokasi",
      href: "https://www.google.com/maps/place/Jln+Megawati,+Medan", // bisa diganti sesuai lokasi
    },
  ];

  

  return (
    <section id="contact">
      <div className="container">
        <div className="contact_form">
          <div className="contact_form_top">
            <h1 className="title">
              Bergabung berasama
              <span className="g-text"> kami!</span>
            </h1>
            <p className="text_muted">
              Kami membangun dengan presisi dan semangat, menciptakan struktur
              yang bertahan dalam ujian waktu. Semudah itu!
            </p>
          </div>
          <div className="contact_form_middle">
            <div className="row">
              <input
                type="text"
                placeholder="first name"
                name="firstname"
                className="control"
              />
              <input
                type="text"
                placeholder="last name"
                name="firstname"
                className="control"
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                className="control"
              />
              <input
                type="tel"
                placeholder="Phone number"
                name="phone "
                className="control"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Tulis pesan"
              className="control"
            ></textarea>
          </div>
          <div className="contact_form_bottom">
            <button className="btn btn_primary">Kirim sekarang</button>
          </div>
        </div>
        <div className="contact_options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">{contact.icon}</div>
              <h3 className="name">{contact.name}</h3>
              <h4 className="text_muted">{contact.value}</h4>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <Link to="/contact-detail">
                  <button className="btn btn_primary">
                    {contact.buttonText}
                  </button>
                </Link>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
