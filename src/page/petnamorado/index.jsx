import { Header } from '../../components/heads'
import { useEffect, useMemo, useState } from 'react'
import { Footer } from '../../components/footer'
import {PetCoupleCard} from '../../components/PetCoupleCard'
import { petImages } from '../../assets/images/pets'  // mapeamento das imagens
import { motion } from 'framer-motion'

import banner from '../../assets/images/pets/banner.png'
import btnCarregar from '../../assets/images/pets/botaomeio.png'
import './styles.css'
const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
}

export function PetsNamorando() {
  const [rawCouples, setRawCouples] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadCouples() {
      try {
        setLoading(true)
        setError('')

        const res = await fetch('/data/petCouples.json', { cache: 'no-store' })
        if (!res.ok) throw new Error(`Erro ao buscar JSON: ${res.status}`)

        const data = await res.json()
        if (isMounted) setRawCouples(Array.isArray(data) ? data : [])
      } catch (err) {
        if (isMounted) setError(err?.message || 'Falha ao carregar os pets.')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadCouples()

    return () => {
      isMounted = false
    }
  }, [])

  // Mapeia as imagens pelo imgKey do JSON
  const couples = useMemo(() => {
    return rawCouples.map((c) => ({
      ...c,
      pet1: { ...c.pet1, image: petImages?.[c.pet1?.imgKey] },
      pet2: { ...c.pet2, image: petImages?.[c.pet2?.imgKey] },
    }))
  }, [rawCouples])

  const firstList = couples.slice(0, 6)
  const secondList = couples.slice(6)

  return (
    <>
      

      <motion.main
        className="pets-page"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <section className="title-section">
          <h1>
            Pets <span>namorando</span>
          </h1>
          <p>Dois aute irure dolor in reprehenderit in voluptate</p>
        </section>

        {/* Estados (loading / erro) */}
        {loading && (
          <div className="pets-status">
            <p>Carregando pets...</p>
          </div>
        )}

        {!loading && error && (
          <div className="pets-status">
            <p>❌ {error}</p>
            <p>
              Dica: confira se <code>/public/data/petCouples.json</code> existe e se abre no navegador em{' '}
              <code>/data/petCouples.json</code>.
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* LISTA 1 */}
            <motion.section className="pets-grid" variants={gridVariants} initial="hidden" animate="show">
              {firstList.map((c) => (
                <motion.div key={c.id} variants={itemVariants}>
                  <PetCoupleCard pet1={c.pet1} pet2={c.pet2} />
                </motion.div>
              ))}
            </motion.section>

            {/* BANNER */}
            <div className="ad-banner">
              <img src={banner} alt="Publicidade" />
            </div>

            {/* LISTA 2 */}
            <motion.section className="pets-grid" variants={gridVariants} initial="hidden" animate="show">
              {secondList.map((c) => (
                <motion.div key={c.id} variants={itemVariants}>
                  <PetCoupleCard pet1={c.pet1} pet2={c.pet2} />
                </motion.div>
              ))}
            </motion.section>

            {/* BOTÃO (imagem) */}
            <div className="load-more">
              <button className="load-more-btn" type="button">
                <img src={btnCarregar} alt="Carregar mais antigos" />
              </button>
            </div>
          </>
        )}
      </motion.main>

      
    </>
  )
}