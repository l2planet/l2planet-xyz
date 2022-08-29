export const getPaths = () => {
    return location.pathname.slice(1).split('/')
}