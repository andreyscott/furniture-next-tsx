import clsx from 'clsx'

const stats = [
    {
      value: '21',
      text: 'Year Experience',
    },
    {
      value: '3',
      text: 'Locations',
    },
    {
      value: '40k+',
      text: 'Furniture sold',
    },
    {
      value: '960+',
      text: 'Variant Furniture',
    },
  ]

const Stats = () => {
  return (
    <div
    data-aos="fade-up-right"
     className='my-12 mx-8'>

    <div className=" bg-green bg-[rgb(0,0,0)] rounded-[20px] p-12">
      <div className="flex flex-wrap gap-y-8">
        {stats.map(({ value, text }, index) => (
          <div
            className={clsx(
              'min-h-[70px] w-3/6',
              'flex flex-col justify-center odd:border-r',
              'lg:flex-1 lg:border-r lg:last:border-none'
            )}
            key={index}
          >
            <div className="text-2xl font-semibold mx-auto text-white lg:text-4xl">{value}</div>
            <div className="text-base font-light mx-auto text-white lg:text-xl">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Stats