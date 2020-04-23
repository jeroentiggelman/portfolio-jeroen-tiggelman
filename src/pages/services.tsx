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
      <SEO title="Services | Jeroen Tiggelman photography" desc="Photographie (prise de vue), studio photo professionnel" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Services en photographie</h1>
        <h2>Photographie (prise de vue)</h2>
        <ul>
          <li>Photographie pour les documents d'identité : passeports, cartes d'identité, permis de conduire ;</li>
          <li>Reportages photo d'événements familiaux : mariages, communions, naissances, baptêmes ;</li>
          <li>Reportages photo d'événements professionnels : inaugurations, fêtes du personnel ;</li>
          <li>Photographie des books photo pour des modèles ;</li>
          <li>Photographie de personnes : en studio ou en extérieur, adultes ou enfants ;</li>
          <li>Portraits de vos animaux favoris : chiens, chats, chevaux ou autres ;</li>
          <li>Photographie des petits animaux : possibilités en studio ou sur site ;</li>
          <li>Photographie des chevaux : sur site, à l'endroit de votre choix ;</li>
        </ul>
        <h2>Studio professionnel</h2>
        <p>Venez découvrir le studio professionnel, équipé avec des flashes Elinchrom, montés sur le système Manfrotto Sky Track (montage au plafond pour avoir les pieds libres), des arrière-plans différents, des diffuseurs, des réflecteurs, des fauteuils, des chaises et même un canapé ! Dans un studio professionnel vous obtenez des meilleurs résultats !</p>   
        <h2>Post-production photo</h2>
        <p>Retouche de vos photos sur demande, scans de vos photos anciennes et retouches</p>
        <h2>Tirages de vos photos</h2>
        <p>Pour les tirages de vos photos, impression sur papier d'exposition Fine Art (du 13x18cm au 40x50cm) avec calibration.</p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
