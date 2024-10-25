import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
    return (
        <div className="contact">
            <section class="socialMediaBox">
                <a href="https://www.instagram.com/isa.enes/">Instagram</a>
                <hr />
                <a href="https://www.facebook.com/isa.enes.3/">Facebook</a>
                <hr />
                <a href="https://soundcloud.com/isaenes">Soundcloud</a>
                <hr />
                <a href="https://es.ra.co/dj/isaenes">Resident Advisor</a>
            </section>
            <section className="emailBox">
                <h2 className="contactAncor">Art Enquiries</h2>
                <p className="email">sonofawitch.club@gmail.com</p>
            </section >
            <section className="emailBox">
                <h2 className="contactAncor">Bookings </h2>
                <p className="email">sheisaenes@gmail.com</p>
            </section>
            <section className="emailBox">
                <h2 className="contactAncor">Booking Netherlands </h2>
                <p className="email">info@scprodparisgang.com</p>
            </section>
        </div>
    )
}



