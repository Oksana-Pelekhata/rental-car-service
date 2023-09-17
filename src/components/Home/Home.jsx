import React from 'react'
import { Container, Header, PageHeader, Section } from './Home.styled'

const Home = () => {
  return (
      <>
          <Container>
        <Header>
        <PageHeader>DriveEase: Your Premier Car Rental Service</PageHeader>
    </Header>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Our Fleet</h2>
        <p>Choose from a diverse and well-maintained fleet of vehicles to suit your every need. Whether you're planning a family vacation, a business trip, or just need a stylish ride for a weekend getaway, DriveEase has the perfect vehicle for you. From compact cars for city adventures to spacious SUVs for outdoor escapades, we've got you covered.</p>
    </Section>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Quality Assurance</h2>
        <p>When you choose DriveEase, you're choosing reliability and safety. Our vehicles undergo regular maintenance checks, ensuring they are in top-notch condition. We take pride in our commitment to your safety, which is why we provide well-serviced and meticulously cleaned cars for your peace of mind.</p>
    </Section>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Convenience is Key</h2>
        <p>We know that convenience is paramount when it comes to car rental. That's why we offer easy online booking and reservation management. You can choose your preferred vehicle, pick-up location, and rental duration with just a few clicks. We also offer flexible pick-up and drop-off options to fit your schedule.</p>
    </Section>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Customer-Centric Approach</h2>
        <p>At DriveEase, our customers are at the heart of everything we do. Our dedicated customer support team is here to assist you 24/7, ensuring you have a seamless and enjoyable rental experience. From helping you choose the right vehicle to resolving any queries, we're here to serve you.</p>
    </Section>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Competitive Pricing</h2>
        <p>We believe that quality car rental should be accessible to all. That's why we offer competitive pricing and a range of budget-friendly options. With DriveEase, you can enjoy the best without breaking the bank.</p>
    </Section>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Eco-Friendly Initiatives</h2>
        <p>We care about the environment, and so should you. DriveEase is proud to offer an eco-friendly vehicle option, featuring fuel-efficient and hybrid cars. We believe in sustainable travel, and our eco-friendly vehicles help reduce your carbon footprint without compromising on performance.</p>
    </Section>

    <Section>
        <h2 style={{marginBottom: '10px'}}>Corporate Partnerships</h2>
        <p>For businesses, DriveEase offers tailored corporate rental solutions to meet your company's transportation needs. Our corporate partnerships come with exclusive benefits, making business travel more efficient and cost-effective.</p>
    </Section>

    <Section>
        <p>Join the DriveEase community and experience the ultimate in car rental service. Whether you're embarking on a road trip, exploring a new city, or simply need a reliable set of wheels, we're here to make your journey unforgettable.</p>
        <p>At DriveEase, it's not just about renting a car; it's about unlocking a world of possibilities. Start your journey with us today!</p>
              </Section>
    </Container>
      </>
  )
}

export default Home