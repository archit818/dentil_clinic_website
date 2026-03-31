import Head from 'next/head';
import { Fragment } from 'react';
import Hero from 'components/Hero';
import About from 'components/About';
import Services from 'components/Services';
import Facts from 'components/Facts';
import Gallery from 'components/Gallery';
import Specialists from 'components/Specialists';
import WhyChooseUs from 'components/WhyChooseUs';
import Testimonials from 'components/Testimonials';
import ContactForm from 'components/ContactForm';
import PageProgress from 'components/PageProgress';

const Home = () => (
  <Fragment>
    <PageProgress />
    <Head>
      <title>DentalClinic – Free Next.js Template for Dentists & Clinics</title>
      <meta
        name="description"
        content="Free Next.js Medical Template for Dentists, Clinics & Healthcare Professionals – Built with Bootstrap"
      />
    </Head>

    <main className="content-wrapper overflow-hidden">
      <Hero />
      <About />
      <section className="wrapper facts">
        <div className="container py-12 py-md-14 justify-content-center">
          <Facts />
        </div>
      </section>
      <section className="wrapper bg-light">
        <div className="container py-10 py-md-12">
          <Services />
        </div>
      </section>
      <Specialists />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  </Fragment>
);

export default Home;
