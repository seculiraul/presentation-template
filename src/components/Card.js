const Card = ({ options }) => {
  return (
    <div
      className={`flex flex-col gap-2 p-4 rounded-lg shadow-md cursor-default hover:-translate-y-2 duration-500 ${options?.cardClasses}`}
    >
      <h2
        className={`text-2xl font-bold my-2 text-center ${options?.titleClasses}`}
      >
        {options?.title}
      </h2>
      <p className={`text-center text-lg ${options?.descriptionClasses}`}>
        {options?.description}
      </p>
    </div>
  )
}

export default Card
