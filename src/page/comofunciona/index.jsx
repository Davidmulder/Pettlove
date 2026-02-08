import { motion }  from "framer-motion";
import "./styles.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";

import linha1 from "../../assets/images/linha1.png";
import linha2 from "../../assets/images/linha2.png";

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const pop = {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };


function Step({ reverse = false, image, icon, title, highlight, text }) {
  return (
    <motion.section
      className={`como-step ${reverse ? "reverse" : ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {/* Foto */}
      <motion.div
        className="step-media"
        variants={reverse ? fadeRight : fadeLeft}
      >
        <img className="step-photo" src={image} alt="" />
        <span className="step-photo-accent" aria-hidden="true" />
      </motion.div>

      {/* Texto */}
      <motion.div className="step-content" variants={reverse ? fadeLeft : fadeRight}>
        <motion.img className="step-icon" src={icon} alt="" variants={pop} />
        <motion.h3 className="step-title" variants={fadeUp}>
          {title} <span>{highlight}</span>
        </motion.h3>
        <motion.p className="step-text" variants={fadeUp}>
          {text}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export function ComoFunciona() {
  return (
    <div className="como">
     
      <div className="como-hero">
        <motion.div
          className="como-hero-content"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <p className="como-mini">COMO FUNCIONA</p>

          <h1 className="como-title">
            <span className="only-desktop">
              Encontre um pretendente<br />para o seu animal
            </span>

            <span className="only-mobile">
              Encontre um love<br />para o seu animal sem<br />sair de casa.
            </span>
          </h1>

          <motion.button
            className="como-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Comece agora!
          </motion.button>
        </motion.div>
      </div>

      <main className="como-steps">
        <Step
          image={img1}
          icon={icon1}
          title="Cadastre seu"
          highlight="animal"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc."
        />

        <motion.img
          className="como-line"
          src={linha1}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <Step
          reverse
          image={img2}
          icon={icon2}
          title="Procure"
          highlight="pretendentes"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc."
        />

        <motion.img
          className="como-line"
          src={linha2}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <Step
          image={img3}
          icon={icon3}
          title="Marque um"
          highlight="encontro"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc."
        />
      </main>
    </div>
  );
}
