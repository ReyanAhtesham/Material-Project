import React, { useEffect } from 'react'
import { useInView,InView  } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import  Aos from "aos"
import "aos/dist/aos.css"
 
const Camp = () => {
    useEffect(() => {
  Aos.init({})
    }, [])
  return (
      <div>
          <h1 data-aos="fade-up"
           data-aos-duration="3000"
          >this is magiiik</h1>
      </div>
      )
    }
export default Camp