import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { Eyebrow } from './parts.jsx'
import { customCategoryById, productById } from './homeMedia.js'

export default function CakeCoffeeMoments() {
  const cake = customCategoryById('anniversary')
  const coffee = productById('cold-coffee')
  const moment = productById('brownie')

  return (
    <section className="overflow-x-clip bg-white py-24 sm:py-32">
      <div className="container">
        <Reveal y={20}>
          <Eyebrow>Cake / Coffee / Moments</Eyebrow>
        </Reveal>

        <div className="mt-10 grid gap-14 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:mt-14 lg:grid-cols-[1.35fr_0.85fr_1.1fr] lg:items-start lg:gap-x-10">
          <Reveal y={20} className="md:row-span-2 lg:row-span-1">
            <Photo
              src={cake.image}
              alt="A slice of layered raspberry cake on a dark plate"
              widths={[600, 900, 1200]}
              sizes="(min-width: 1024px) 40vw, 92vw"
              fade={false}
              className="aspect-[4/5]"
            />
            <h3 className="mt-6 font-editorial text-5xl font-medium tracking-tight text-ink lg:text-6xl">Cake</h3>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink/65">
              Made for birthdays, celebrations and everything worth marking.
            </p>
          </Reveal>

          <Reveal y={20} delay={0.1} className="flex items-center gap-5 sm:gap-8 lg:mt-32 lg:block">
            <Photo
              src={coffee.image}
              alt="Iced cold coffee in a tall glass"
              widths={[400, 700]}
              sizes="(min-width: 1024px) 24vw, 44vw"
              fade={false}
              className="aspect-square w-[44%] shrink-0 sm:w-[40%] lg:w-full"
            />
            <div className="lg:mt-6">
              <h3 className="font-editorial text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Coffee
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                Stay for a cup.
                <br />
                Stay a little longer.
              </p>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.2} className="lg:mt-12">
            <div className="bg-plum-950 p-7 text-white sm:p-9">
              <h3 className="font-editorial text-5xl font-medium tracking-tight lg:text-6xl">Moments</h3>
              <p className="mt-4 max-w-[15rem] text-[15px] leading-relaxed text-white/70">
                Some of the best memories begin with something sweet.
              </p>
            </div>
            <Photo
              src={moment.image}
              alt="Warm brownie with vanilla ice cream and caramel being poured over it"
              widths={[500, 800, 1000]}
              sizes="(min-width: 1024px) 34vw, 92vw"
              fade={false}
              imgClassName="object-[50%_58%]"
              className="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
