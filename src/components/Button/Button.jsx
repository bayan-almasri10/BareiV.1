export default function Button(props) {
    return (
        <div className="bay mx-auto flex justify-center">
        <button className={`m-5 relative py-3 flex justify-center px-10 text-white text-base font-bold nded-full overflow-hidden ${props.bg} rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-90  before:transition-all before:duration-500 before:ease-in-out before:z-[-1]`}
                onClick={props.onClick}>
          {props.title}
        </button>
      </div>
    )
}