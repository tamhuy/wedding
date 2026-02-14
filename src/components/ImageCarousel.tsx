import { useCallback, useEffect, useRef } from 'react'
import type {
    EmblaCarouselType,
    EmblaEventListType,
    EmblaEventModelType,
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './ImageCarouselArrowButtons'

import image1 from '../assets/carousel/1.png'
import image2 from '../assets/carousel/2.png'
import image4 from '../assets/carousel/4.jpg'
import image5 from '../assets/carousel/5.jpg'
import image6 from '../assets/carousel/6.jpg'


const images = [image1, image2, image4, image5, image6]
const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})
  const tweenFactor = useRef(0)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length
  }, [])

  const tweenOpacity = useCallback(
    <EventType extends keyof EmblaEventListType>(
      emblaApi: EmblaCarouselType,
      event?: EmblaEventModelType<EventType>
    ) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = event?.type === 'scroll'

      emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)

    emblaApi
      .on('reinit', setTweenFactor)
      .on('reinit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slidefocus', tweenOpacity)
  }, [emblaApi, setTweenFactor, tweenOpacity])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </div>
  )
}

export default ImageCarousel
