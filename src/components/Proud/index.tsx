import React from 'react'
import {IoIosArrowRoundForward} from 'react-icons/io'
import {img} from '../../data2';


const Proud = () => {

    const { f1, f2, f3, f4, f6 } = img
  return (
    
    <div className="big-shop" id="shop">
    <div className="shop-title">
        <h2 className='text-4xl md:text-5xl mb-2'>
            we are very proud to present you <br/> our furniture
        </h2>
        <p className=' text-xl leading-loose'>
        Our team of experienced designers works hard to bring you the latest trends and styles, so you can find the perfect pieces to suit your personal taste and style. Whether you're looking for a modern, minimalist aesthetic or a more traditional, classic look, we have something for everyone.
        we also offer customizable options for those who want to create a truly unique piece. 
      
        </p>

        
    </div>
    <div className="shop-flex">
        <div className="shop-one">

            <div className="image-one">
                <img src={f1} alt="a chair" />
                <div className="overlay">
                    <div className="txt">
                        <h3 className='hidden md:block'>White Chair</h3>
                        <section>
                            <span>Furniture</span> / Design
                        </section>
                    </div>
                </div>
            </div>

            <div className="image-one">
                <img src={f2} alt="" />
                <div className="overlay">
                    <div className="txt">
                        <h3 className='hidden md:block'>Blue Chair</h3>
                        <section className=' hidden md:block'>
                            <span>Furniture</span> / Design
                        </section>
                        <div className="link">
                            <a href="/" className='flex '>Shop Now
                             <IoIosArrowRoundForward className='' />
                             </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="shop-one">

            <div className="image-one">
                <img src={f3} alt=""/>
                <div className="overlay ">
                    <div className="txt">
                        <h3 className='pb-20 md:pb-2'>Black Chair</h3>
                        <section className='hidden md:block'>
                            <span>Furniture</span> / Design
                        </section>
                        <div className="link">
                            <a href="/">Shop Now 
                                             <IoIosArrowRoundForward className='fas fa-long-arrow-alt-right' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-one">
                <img src={f4} alt=""/>
                <div className="overlay">
                    <div className="txt">
                        <h3 className='hidden md:block'>White lamp</h3>
                        <section>
                            <span>Furniture</span> / Design
                        </section>
                    </div>
                </div>
            </div>

        </div>

        <div className="shop-two">
            <img src={f6} alt=""/>
            <div className="overlay">
                <div className="txt">
                    <h3>Brown Chairs</h3>
                    <section>
                        <span>Furniture</span> / Design
                    </section>
                    <div className="link">
                        <a href='/'>Shop Now 
                            <IoIosArrowRoundForward className='fas fa-long-arrow-alt-right' /></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default Proud