import React from "react";
import "./ContactDetail.css";
import Navbar from "../../Navbar/Index";
import Footer from "../../Footer/Index";
import useConfigCompanyStore from "../../../store/configCompany.store";
import { Metadata } from "../../../components/headMetaData";

const ContactDetail = () => {
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
    <div id="contact">
      <Metadata
        title={`Kontak - ${storeCompanyData?.title_web}`}
        description={storeCompanyData?.descripsi_web}
      />
      <Navbar />
      <section id="contact_detail">
        <h1 className="title title_contact_detail">
          Info lebih lanjut mengenai kami
        </h1>
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
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn_primary">
                    {contact.buttonText}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="container">
        <div className="contact_map_wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.623552681045!2d98.53277469999999!3d3.6301348000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312bddf0083459%3A0xa5715b8ec533ce23!2sPT.%20Radian%20aspal%20beton!5e1!3m2!1sid!2sid!4v1747449980011!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi PT. Radian Aspal Beton"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactDetail;
