import styles from "./Contact.module.css";
import { useState } from "react";

const Contact = () => {
  // 1. Skapa states för att hålla koll på status (t.ex. visa ett tack-meddelande)
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 2. onSubmit-funktionen ligger nu inuti rätt komponent
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    // Lägg till din unika Access Key här (byt ut maskeringen mot din riktiga nyckel)
    formData.append("access_key", "47d8b9ca-b0c1-460f-ac1e-df526248cab6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Tack! Jag har fått ditt meddelande, hör av mig snart. 🙌🏼");
        event.target.reset(); // Tömmer formuläret efter lyckat skick!
      } else {
        setResult("Något gick fel. Försök igen. ❌");
      }
    } catch (error) {
      setResult("Network error. Please try again later.", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContent}>
        <div className={styles.headerGroup}>
          <h2 className={styles.contactTitle}>Låt mig hjälpa dig</h2>
          <p className={styles.contactSubtitle}>
            Har du en idé, ett projekt eller vill du bara säga hej? Skicka ett
            meddelande nedan så skapar vi något fantastiskt tillsammans.
          </p>
        </div>

        {/* Formuläret kallar nu på onSubmit på rätt sätt */}
        <form className={styles.contactForm} onSubmit={onSubmit}>
          <div className={styles.inputsRow}>
            <input
              type="text"
              name="name" // 3. VIKTIGT: Web3Forms behöver detta!
              placeholder="Ange ditt namn"
              className={styles.contactInput}
              required
            />
            <input
              type="email"
              name="email" // 3. VIKTIGT: Web3Forms behöver detta!
              placeholder="Ange ditt e-post"
              className={styles.contactInput}
              required
            />
          </div>

          <textarea
            name="comments" // Ändra gärna till name="message" om du vill att det ska stå "Message" i mejlet du får
            id="comments"
            placeholder="Vad kan jag hjälpa dig?"
            rows="6"
            className={styles.contactTextarea}
            required
          ></textarea>

          {/* Knappen blir inaktiverad medan mejlet skickas */}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Skickar..." : "Skicka"}
          </button>
        </form>

        {/* 4. Visa resultatet för användaren precis under formuläret */}
        {result && (
          <p
            className={
              result.includes("Success")
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {result}
          </p>
        )}
      </div>

      <div className={styles.imageContact}>
        <img
          src="/images/image-contact.svg"
          alt="Contact visual"
          className={styles.contactImage}
        />
      </div>
    </section>
  );
};

export default Contact;
