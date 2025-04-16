import ContactTitle from "./ContactTitle";
import ContactDescription from "./ContactDescription";
import ContactLinks from "./ContactLinks";

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <ContactTitle />
                <ContactDescription />
                <ContactLinks />
            </div>
        </section>
    );
};

export default Contact;
