import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { TextLink } from './parts.jsx'
import { cafeSectionImage } from '../../data/cafeData.js'

export default function CafeMoment() {
  return (
    <section className="relative bg-cream pb-14 sm:pb-20 lg:pb-28">
      <Photo
        src={cafeSectionImage}
        alt="Inside the cafe: tables and wooden floor with the coffee counter behind"
        widths={[900, 1400, 1800]}
        sizes="100vw"
        width={1800}
        height={1000}
        fade={false}
        parallax={18}
        imgClassName="object-[50%_60%]"
        className="aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-[min(82vh,760px)]"
      />

      <div className="container">
        <Reveal
          y={20}
          className="relative -mt-24 max-w-md bg-cream p-7 sm:-mt-28 sm:p-9 lg:-mt-40 lg:ml-auto lg:p-11"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-berry-600">Cafe</span>
          <h2 className="mt-3 font-editorial text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Stay a while.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
            Good coffee.
            <br />
            Something sweet.
            <br />
            No reason to rush.
          </p>
          <TextLink to="/cafe-menu" className="mt-7">
            Explore cafe menu
          </TextLink>
        </Reveal>
      </div>
    </section>
  )
}
