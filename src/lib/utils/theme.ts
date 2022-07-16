export const theme = {
    
    init() { /* Initializes theme */
        const theme = localStorage.getItem('theme') as 'dark' | 'light' | 'system'
        if(!theme) {
            localStorage.setItem('theme', 'system')
            this.setSystem()
            return
        }
        else {
            switch(theme) {
            case 'dark':
                this.setDark()
                break

            case 'light':
                this.setLight()
                break

            case 'system':
                this.setSystem()
                break
            }
        }
    },

    setDark() /* Sets theme dark */ {
        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeListener)
    },

    setLight() /* Sets theme light */ {
        if(localStorage.getItem('theme') == 'light') return

        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeListener)
    },

    setSystem() /* Sets theme system */ {
        if(window.matchMedia('(prefers-color-scheme: dark)')) document.body.classList.add('dark')
        localStorage.setItem('theme', 'system')
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeListener)
    }
}

// Event listener to listen changes of `prefers-color-scheme` Media Query
function themeListener(this: MediaQueryList) {
    this.matches ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}