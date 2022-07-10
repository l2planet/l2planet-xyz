export const applyTheme = (t: 'dark' | 'light' | 'system') => {
    switch(t) {
        case 'dark':
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler)
            document.body.classList.add('dark')
            break
        case 'light':
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler)
            document.body.classList.remove('dark')
            break
        case 'system':
            if(matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark')
            } else {
                document.body.classList.remove('dark')
            }
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler)
            break
    }
}


const handler = () => {
    if(matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
}