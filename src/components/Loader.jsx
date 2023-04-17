const Loader = () => {
    const loader = ''
    return (
        <div className="preloader flex-column justify-content-center align-items-center">
            <img className="animation__wobble" src={loader} height="60" width="60" />
        </div>
    )
}
export default Loader