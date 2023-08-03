import React, {  useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Heading, Image } from '@chakra-ui/react';
import "./TrustSection.css"
import trustData from './trustData';
import { Link } from 'react-router-dom';

const TrustSection = () => {
    let [allTrust, setAllTrust] = useState(trustData);
    let [currTrust, setCurrTrust] = useState(() => {
        let Cur = allTrust.filter(trust => trust.isActive)
        return Cur[0];
    });

    let handleTrust = (currId) => {
        if (currId !== currTrust.id) {
            let updatedTrusts = allTrust.filter(trust => {
                if (trust.id === currId) {
                    trust.isActive = true;
                    setCurrTrust(trust);
                } else {
                    trust.isActive = false
                }
                return trust
            });
            setAllTrust(updatedTrusts)
        }
    }
    return (
        <div style={{ backgroundColor: "#333" }} data-aos='fade-up'>
            <Swiper
                className='swiperContainer'
                style={{ padding: '38px 0', }}
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {allTrust.map((trst) => {
                    return <SwiperSlide onMouseOver={() => handleTrust(trst.id)} key={trst.id} className={`${trst.isActive ? 'active' : ''} swiperslidecard`}>
                        <Image className={` image`} src={trst.image} />
                    </SwiperSlide>
                })}
            </Swiper>
            <div className='trust-content-container'>
                <Image width={'40%'} src={currTrust.PrimaryImage} />
                <div className='trust-content'>
                    <Heading className='trust-desc' >{currTrust.description}</Heading>
                    <p className='trust-author'>
                        {currTrust.author}</p>
                    <Link to={"#"}>{currTrust.linkText}</Link>
                </div>
            </div>
        </div>
    )
}

export default TrustSection