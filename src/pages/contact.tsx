import React from 'react'
import styled from 'styled-components'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const ContactForm = styled.div`
  width: clamp(300px, 50%, 500px);
`

const Inputlabel = styled.label`
  width: 100%;
`

const Inputfield = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  &:focus {
    background: #ffe;
  }
`

const Inputarea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  border: 1px solid #ddd;
  &:focus {
    background: #ffe;
  }
`

const Sendbutton = styled.button`
  display: block;
  border: 1px solid #ddd;
  border-radius: 0;
  margin: 40px auto;
  padding: 0.5em;
  &:hover {
    background: #333;
    color: white;
  }
`

const Contact = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Contact | Jeroen Tiggelman photography" desc="Contactez moi pour obtenir plus d'informations !" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Un devis ? Plus de renseigments ?</h1>
        <h2>Contactez moi !</h2>
        <ContactForm>
          <form id="contactForm" action="https://formspree.io/mzbanaqw" method="POST">
            <div className="g-recaptcha" data-sitekey="6LfeEe0UAAAAAGvEW9bBsOib0SkLMRjzYUgGnU9a" />
            <Inputlabel>Votre nom :</Inputlabel>
            <Inputfield type="text" name="name" />

            <Inputlabel>Votre adresse mail :</Inputlabel>
            <Inputfield type="text" name="_replyto" />

            <Inputlabel>Votre message :</Inputlabel>
            <Inputarea name="message" />
            <Sendbutton type="submit">Envoyer</Sendbutton>
          </form>
        </ContactForm>
      </AnimatedBox>
    </Layout>
  )
}

export default Contact
