import React from 'react'
import ClientItem from '../components/ClientItem'
import Slider from 'react-slick';
import { clientsSettings } from '../custom';

const Clients = () => {
  return (
    <section id="clients" className="shadow-dark background-blue color-white padding-50">
      
			<h2 className="d-none">Clients</h2>

      <Slider {...clientsSettings} className="clients-wrapper">
        <ClientItem image="image" name="name" />
        <ClientItem image="image" name="name" />
        <ClientItem image="image" name="name" />
        <ClientItem image="image" name="name" />
        <ClientItem image="image" name="name" />
        <ClientItem image="image" name="name" />
      </Slider>

		</section>
  )
}

export default Clients
