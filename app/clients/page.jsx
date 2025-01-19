"use client";

import { motion } from "framer-motion";
import React from "react";

export default function home() {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-left text-2xl font-bold my-4">Clients</h1>
        <p className="text-white">
          <span className="text-accent">
            <strong>Sports brands</strong>
          </span>
          <br />
          British Nike (Wayne Rooney)
          <br />
          Chevrolet
          <br />
          Dare2B skiwear
          <br />
          Foot Asylem
          <br />
          Gola trainers
          <br />
          JD Sport
          <br />
          Nike (Lunar Air) Mario Balotelli
          <br />
          PUMA (Mario Balotelli)
          <br />
          Saudi Telecom (Manchester United)
          <br />
          SKY (Olympic Team &#8211; GB)
          <br />
          Umbro (Manchester City)
          <br />
          <span className="text-accent">
            <strong>Fashion / Retail</strong>
          </span>
          <br />
          Collection 2000
          <br />
          Co-Operative (British music experience)
          <br />
          Damart
          <br />
          Dare2B (Ski wear / Urban wear)
          <br />
          Dawsons Cashmere
          <br />
          Designer Outlet, Cheshire Oaks (McArthur Glen)
          <br />
          Designer Outlet, Gloucester Quay (Peel Holdings)
          <br />
          Freemans catalogue
          <br />
          Fruit of the loom
          <br />
          Grattan (Curvissa / Look Again)
          <br />
          Get the Label
          <br />
          George at Asda
          <br />
          Hamnett fashion collection
          <br />
          Intu Uxbridge
          <br />
          JD Williams (fashion world)
          <br />
          JK Metals
          <br />
          Lowry Outlet Mall (Salford Quays)
          <br />
          Marks &#038; Spencer
          <br />
          Mamas &#038; Papas
          <br />
          NWDA (North West Designers Agency)
          <br />
          Purestuff (Look Book)
          <br />
          Redinc Ltd Ringspun / Marmalde (Look Book)
          <br />
          SAFC Pharmaceuticals
          <br />
          Scholl
          <br />
          Sirdar Knitwear
          <br />
          Stirling Lingerie
          <br />
          <span className="text-accent">
            <strong>Beauty Brands</strong>
          </span>
          <br />
          Bonjela
          <br />
          Cussons
          <br />
          Gillette razors (Manchester Utd player, Park Ji-Sung)
          <br />
          GHD
          <br />
          Head &#038; Shoulders (Jo Hart)
          <br />
          Imperial Leather
          <br />
          Nivea
          <br />
          Olay (China)
          <br />
          Rapid White (Toothpaste)
          <br />
          Tresemme
          <br />
          Venus (razors)
          <br />
          <span className="text-accent">
            <strong>Leisure</strong>
          </span>
          <br />
          Camelot
          <br />
          Centre Parcs
          <br />
          Drayton Manor
          <br />
          English Heritage
          <br />
          Hoeseasons
          <br />
          Jet 2<br />
          Kayak
          <br />
          Travelodge
          <br />
          Warwick Castle
          <br />
          <span className="text-accent">
            <strong>Cars</strong>
          </span>
          <br />
          Co-Operative (car insurance)
          <br />
          Car Craft
          <br />
          Ford (feel the difference)
          <br />
          The Car People
          <br />
          We Buy Any Car
          <br />
          <span className="text-accent">
            <strong>Promos</strong>
          </span>
          <br />
          1 Direction (Pop band)
          <br />
          BBC (Red Bee Media)
          <br />
          The Chase, (TV promo)
          <br />
          Davina MaCall (Love on a Saturday Night)
          <br />
          <span className="text-accent">
            <strong>Editorials</strong>
          </span>
          <br />
          Flux Magazine
          <br />
          Grazia Magazine
          <br />
          Jump Magazine
          <br />
          Minx Magazine
          <br />
          Revolve Wire Magazine
          <br />
          Talk Magazine (USA)
          <br />
          Urban Life Magazine (London)
          <br />
          <span className="text-accent">
            <strong>Talks</strong>
          </span>
          <br />
          Mid Cheshire College
          <br />
          Manchester Fashion Network
          <br />
          Oldham College
          <br />
          <span className="text-accent">
            <strong>Drink</strong>
          </span>
          Baileys
          <br />
          Casillero Del Diablo (Wine)
          <br />
          Crabbies Ginger Beer
          <br />
          Fosters lager
          <br />
          Gordon&#8217;s Gin
          <br />
          Lambrini
          <br />
          Lucozade
          <br />
          Nescafé Algeria
          <br />
          Pepsi
          <br />
          Revolution bar
          <br />
          Tsingtao Beer
          <br />
          Vodkats (drink mixers)
          <br />
          Zamereto (Drink Mixers)
          <br />
          <span className="text-accent">
            <strong>Food</strong>
          </span>
          <br />
          Chicago Town Pizza
          <br />
          Cross &amp; Blackwell
          <br />
          Domino&#8217;s Pizza
          <br />
          Farm foods
          <br />
          Fishermans Friend
          <br />
          Florette salads
          <br />
          Iceland Foods
          <br />
          Kellogg&#8217;s
          <br />
          Mars
          <br />
          McDonalds
          <br />
          Poole&#8217;s pies
          <br />
          Robinson fruit shoots
          <br />
          Pukka Pies
          <br />
          Shreddies
          <br />
          Waitrose
          <br />
          Weet-Bix (Australia)
          <br />
          <span className="text-accent">
            <strong>Game Stations</strong>
          </span>
          <br />
          Game Station (Justin Moorhouse)
          <br />
          Play Station 2 (Singstar 80&#8217;s)
          <br />
          Realtime UK (Kinect)
          <br />
          Sony PSP
          <br />
          <span className="text-accent">
            <strong>Interiors / Appliances</strong>
          </span>
          <br />
          Arthouse (Wallpaper)
          <br />
          Alrighi Bianchi
          <br />
          Appliances online
          <br />
          B&amp;Q (kitchens &amp; bathrooms)
          <br />
          Benson&#8217;s for Bed&#8217;s
          <br />
          Colour Roll Wallpaper
          <br />
          CSL Sofa&#8217;s
          <br />
          Euronics (electronics)
          <br />
          Harvey&#8217;s Furniture
          <br />
          Kitchens Direct
          <br />
          Magnet Kitchens
          <br />
          Oak Furnitureland
          <br />
          Reid&#8217;s Furniture
          <br />
          Sharp / Moben / Dolphin
          <br />
          Victoria Plumb (Bathrooms)
          <br />
          <span className="text-accent">
            <strong>Brands</strong>
          </span>
          <br />
          Barbie
          <br />
          BRMB (Birmingham hits music Station)
          <br />
          Chevrolet
          <br />
          Costcutter
          <br />
          Cussons
          <br />
          DAZ
          <br />
          Dioralyte
          <br />
          Dulux
          <br />
          Durex
          <br />
          Harpic / Dettol / Cillit Bang
          <br />
          Hobby Craft
          <br />
          Interflora
          <br />
          Maalox
          <br />
          Microsoft
          <br />
          Motorola
          <br />
          Olay (China)
          <br />
          Preston&#8217;s of Bolton (jewellery)
          <br />
          Vanish
          <br />
          Vodaphone (Cristiano Ronaldo and Ruud van Nisterlrooy)
          <br />
          <span className="text-accent">
            <strong>
              Betting
              <br />
            </strong>
          </span>
          188 BET
          <br />
          Bet 365
          <br />
          Gala Bingo
          <br />
          Genting
          <br />
          Party Casino
          <br />
          William Hill Bingo
          <br />
          <span className="text-accent">
            <strong>Corporate / Banks</strong>
          </span>
          <br />
          Allied London
          <br />
          Argent Property&#8217;s
          <br />
          M&amp;S
          <br />
          NatWest
          <br />
          Nationwide
          <br />
          NHS Campaign (Be A Star)
          <br />
          W.A.W. (Waste Awareness Wales)
          <br />
          Yorkshire Clydesdale Bank
          <br />
          Yorkshire Building Society
        </p>
      </div>
    </motion.div>
  );
}

// import { motion } from "framer-motion";
