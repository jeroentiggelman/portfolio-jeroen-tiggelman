import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jeroen Tiggelman photography" desc="Bonjour. Je m'appelle Jeroen Tiggelman, photographe basé dans Binche, dans la région du Centre, en Hainaut, Belgique. Je vous propose une gamme de services qui rendront vos souvenirs uniques et inoubliables!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Bonjour. Je m'appelle Jeroen Tiggelman!</h1>
        <h2>Une photo est un souvenir</h2>
        <p>Confiez vos reportages photo à un professionnel pour ne rien en rater.</p>
        <p>Photographe néerlandais basé dans Binche, dans la région du Centre, en Hainaut, Belgique, je vous propose une gamme de services qui rendront vos souvenirs uniques et inoubliables.</p>
        <p>Photographe de portraits, mariage, photographe de communion, de baptême, de bébés, photographe d'entreprise, je m'occupe de votre reportage de A à Z, ou en partie, selon vos souhaits.</p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
