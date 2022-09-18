import { Carrousel } from './index'
import { Link } from 'react-router-dom'
import { getByCategory, clearCategory } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import im1 from '../assets/bannerCam.png'
import im2 from '../assets/qatar.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


const MainPromo = () => {
    const dispatch = useDispatch()
    const collection = useSelector(state => state.productByCategory)
    const array = [im2, im1]
    useEffect(() => {
        dispatch(clearCategory())
        dispatch(getByCategory('collection', 'Qatar'))
    }, [])




    return (
        <article className='w-full h-auto'>
            <Link to={'/collection/Qatar'}>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {array?.map((e, index) => {
                        { console.log(e) }
                        <SwiperSlide>
                            <img
                                key={index}
                                className="object-fill w-full h-96"
                                src={e}
                                alt={`imagen de la collecion`}
                            />
                        </SwiperSlide>
                    })}


                </Swiper>
            </Link>
            <Carrousel collection={collection} />
        </article>
    )
}

export default MainPromo