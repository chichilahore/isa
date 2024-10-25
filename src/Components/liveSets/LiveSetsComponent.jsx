import React from 'react';
import Carrousel from '../carrousel/Carrousel';
import album1 from "../../assets/liveSetsimg/album1.jpeg";
import album5 from "../../assets/liveSetsimg/album5.jpeg";
import album4 from "../../assets/liveSetsimg/album4.jpeg";
import album2 from "../../assets/liveSetsimg/album2.jpeg";
import album6 from "../../assets/liveSetsimg/album6.jpeg";
import album3 from "../../assets/liveSetsimg/album3.jpeg";

export default function LiveSetsComponent() {
  const title = ["DJ SETS"]
  const images = [album1, album2, album3, album4, album5, album6];
  const imageLinks = [
    "https://soundcloud.com/isaenes/live-in-apolo-brunch-electronik-after-party-1?in=isaenes/sets/techno-breaks-mixes",
    "https://soundcloud.com/rblmedia/isa-enes-rbl-goes-to-crack?in=isaenes/sets/techno-breaks-mixes",
    "https://soundcloud.com/etherealgroovesofficial/ethereal-mhttps://soundcloud.com/outrecs/outcast-002-x-isa-enes?in=isaenes/sets/techno-breaks-mixesix-068-isa-enes?in=isaenes/sets/mixes",
    "https://soundcloud.com/outrecs/outcast-002-x-isa-enes?in=isaenes/sets/techno-breaks-mixes",
    "https://soundcloud.com/communioncircuit/communion-088-isa-enes?in=isaenes/sets/techno-breaks-mixes",
    "https://soundcloud.com/beccancole/isa-enes-x-givebackwave-dj-set?in=isaenes/sets/mixes",
  ];
  const captions = [
    "LIVE in Apolo - Brunch Electronik After Party",
    "Isa Enes - RBL goes to Crack Bellmer | BRL-220723",
    "Ethereal mix 068: Isa Enes",
    "OUTCAST 002 X ISA ENES",
    "Communion #088 - Isa Enes",
    "Full Moon in Libra · Isa Enes X Givebackwave",
  ];

  return (
    <div>
      <Carrousel title={title} images={images} imageLinks={imageLinks} captions={captions} />
    </div>
  );
}

"https://soundcloud.com/isaenes/live-in-apolo-brunch-electronik-after-party-1?in=isaenes/sets/techno-breaks-mixes"
"https://soundcloud.com/rblmedia/isa-enes-rbl-goes-to-crack?in=isaenes/sets/techno-breaks-mixes"
"https://soundcloud.com/etherealgroovesofficial/ethereal-mix-068-isa-enes?in=isaenes/sets/mixes"
"https://soundcloud.com/outrecs/outcast-002-x-isa-enes?in=isaenes/sets/techno-breaks-mixes"
"https://soundcloud.com/outrecs/outcast-002-x-isa-enes?in=isaenes/sets/techno-breaks-mixes"
"https://soundcloud.com/beccancole/isa-enes-x-givebackwave-dj-set?in=isaenes/sets/mixes"