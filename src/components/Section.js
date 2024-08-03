const Section = ({ options, children }) => {
  return (
    <section id={options.id} className={`${options?.className}`}>
      {children}
    </section>
  )
}

export default Section
