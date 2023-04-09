const Loader = () => {
    const loader = ''
    return (
        <div class="preloader flex-column justify-content-center align-items-center">
            <img class="animation__wobble" src={loader} height="60" width="60" />
        </div>
    )
}
export default Loader