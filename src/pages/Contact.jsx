const Contact = () => {
  const handleFormInput = (formData) => {
    const inputData = Object.fromEntries(formData.entries());
    console.log(inputData);
  };
  return (
    <section className="contact-section ">
      <h2 className="container-title">Contact Us </h2>
      <div className="contact-wrapper ">
        <form action={handleFormInput}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="inter your text"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            placeholder="inter your text"
            name="email"
          />
          <textarea
            name="textarea"
            className="form-control"
            rows={7}
            placeholder="inter your info"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
