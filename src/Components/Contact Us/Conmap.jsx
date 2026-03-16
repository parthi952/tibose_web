function Conmap() {
  return (
<div className="w-full mb-10 h-[450px] rounded-xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7008835848046!2d80.24764491019071!3d13.054701787215238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266416cf259a3%3A0xfa756fac747bcc8a!2sTIBOS%20Solutions%20%26%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1773648292470!5m2!1sen!2sin"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    title="TIBOS Location"
  ></iframe>
</div>
  );
}

export default Conmap;