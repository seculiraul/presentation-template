import Card from './Card'
import ImageSlider from './ImageSlider'
import Section from './Section'

const Hompage = () => {
  const cardOptions = {
    cardClasses: 'bg-white', // Additional Tailwind classes for the card
    title: 'Card Title',
    titleClasses: 'text-blue-500', // Additional Tailwind classes for the title
    description: 'This is a description of the card.',
    descriptionClasses: 'text-gray-600', // Additional Tailwind classes for the description
  }

  const slides = [
    {
      url: 'https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg',
    },
    {
      url: 'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg',
    },
    {
      url: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/30152155/shutterstock_518328943-1.jpg',
    },
    {
      url: 'https://5.imimg.com/data5/SELLER/Default/2023/9/340781037/XT/KA/ZP/189247658/peach-500x500.jpg',
    },
  ]
  return (
    <div className="pt-16">
      {' '}
      {/* Add padding to offset the fixed navbar */}
      <section
        id="home"
        className="min-h-screen bg-blue-100 flex items-center justify-center"
      >
        <h1 className="text-4xl">Home Section</h1>
        <div className="flex flex-row gap-2 mx-auto">
          <Card options={cardOptions} />
        </div>
        <div className="w-[500px] h-[280px] my-auto">
          <ImageSlider slides={slides} />
        </div>
      </section>
      <section
        id="about"
        className="min-h-screen bg-green-100 flex items-center justify-center"
      >
        <h1 className="text-4xl">About Section</h1>
      </section>
      <Section
        options={{
          id: 'contact',
          className:
            'min-h-screen bg-yellow-100 flex items-center justify-center',
        }}
      >
        <h1 className="text-4xl">Salut Vere</h1>
      </Section>
    </div>
  )
}

export default Hompage
