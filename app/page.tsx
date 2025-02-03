import Calculator from '~components/calculator'
import Hero from '~components/hero'

export default async function Home() {
  return (
    <>
      <section className='bg-black'>
        <Hero />
      </section>
      <section id='calculator' className='bg-black py-20 text-white'>
        <Calculator />
      </section>
    </>
  )
}
