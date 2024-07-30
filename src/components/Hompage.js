const Hompage = () => {
  return (
    <div className="pt-16">
      {' '}
      {/* Add padding to offset the fixed navbar */}
      <section
        id="home"
        className="min-h-screen bg-blue-100 flex items-center justify-center"
      >
        <h1 className="text-4xl">Home Section</h1>
      </section>
      <section
        id="about"
        className="min-h-screen bg-green-100 flex items-center justify-center"
      >
        <h1 className="text-4xl">About Section</h1>
      </section>
      <section
        id="contact"
        className="min-h-screen bg-yellow-100 flex items-center justify-center"
      >
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  )
}

export default Hompage
