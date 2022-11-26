import { newInStore } from '../../data2'
import { Link } from "react-router-dom";

import NewItemsSlider from './new-items-slider'
import clsx from 'clsx'

const NewInStore = () => {
  const { title, subtitle, link, icon } = newInStore
  return (
    <section className="section overflow-hidden relative lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div
          data-aos="fade-up-right"
           className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <Link to='/'>
                <div className="flex flex-row cursor-pointer">
                  <a
                  href='/'
                    className={clsx(
                      'hover:border-b border-primary lg:items-center',
                      'font-medium transition-all'
                    )}
                  >
                    {link}
                  </a>
                  <div className="text-3xl">{icon}</div>
                </div>
              </Link>
            </div>
          </div>
          <div
            className={clsx(
              'lg:max-w-[800px] xl:max-w-[990px]',
              'lg:absolute lg:-right-24'
            )}
          >
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewInStore
