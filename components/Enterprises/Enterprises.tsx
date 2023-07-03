import styles from '../../src/styles/enterprises/Enterprises.module.css';
import TesteBG from '../../public/image 10.svg'
import Testte from '../../public/image 11.svg'
import Image from 'next/image';

const Enterprises = () => {
  return(
    <section>
      <div className={styles.bg_enterprises}>
        <h1 className={styles.title}>Construtoras e Empreendimentos</h1>
      </div>
      <div className={styles.container_enterprises}>
        <div className={styles.container}>
          <Image 
            src={TesteBG}
            alt="teste"
            height={400}
            width={400}
            className={styles.enterprise}
          />
          <div>
            <div className={styles.information}>
              <Image 
                src={Testte}
                alt="teste"
                height={70}
                width={192}
                className={styles.enterprise_logo}
              />
              <p className={styles.enterprise_name}>New York Residence</p>
              <p className={styles.enterprise_city}>Balneário Camboriú-SC</p>
              <div className={styles.container_button}>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <Image 
            src={TesteBG}
            alt="teste"
            height={400}
            width={400}
            className={styles.enterprise}
          />
          <div>
            <div className={styles.information}>
              <Image 
                src={Testte}
                alt="teste"
                height={70}
                width={192}
                className={styles.enterprise_logo}
              />
              <p className={styles.enterprise_name}>New York Residence</p>
              <p className={styles.enterprise_city}>Balneário Camboriú-SC</p>
              <div className={styles.container_button}>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enterprises