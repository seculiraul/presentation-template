const { useState } = require('react')

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex]?.url})`,
  }

  const goPrev = () => {
    const isFIrstSlide = currentIndex === 0
    const newIndex = isFIrstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goNext = () => {
    const isLast = currentIndex === slides.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative h-full">
      <div
        className="absolute top-[50%] left-[32px] text-4xl text-white font-bold z-[1] cursor-pointer"
        onClick={goPrev}
      >
        {'<'}
      </div>
      <div
        className="absolute top-[50%] right-[32px] text-4xl text-white font-bold z-[1] cursor-pointer"
        onClick={goNext}
      >
        {'>'}
      </div>
      <div
        className="w-full h-full border-r-[10px] bg-center bg-cover "
        style={slideStyles}
      ></div>
      <div className="flex flex-row justify-center">
        {slides?.map((slide, index) => (
          <div
            onClick={() => goSlide(index)}
            className="m-2 cursor-pointer"
            key={index}
          >
            x
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
