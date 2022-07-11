export const theme = {
    init() {
        const theme = localStorage.getItem('theme') as 'dark' | 'light' | 'system'
        if(!theme) {
            localStorage.setItem('theme', 'system')
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

    setDark() {
        //
        if(localStorage.getItem('theme') == 'dark') return

        document.body.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeListener)
    },

    setLight() {
        if(localStorage.getItem('theme') == 'light') return

        document.body.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', themeListener)
    },

    setSystem() {
        if(localStorage.getItem('theme') == 'system') return
        
        if(window.matchMedia('(prefers-color-scheme: dark)')) document.body.classList.add('dark')
        localStorage.setItem('theme', 'system')
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', themeListener)
    }
}

function themeListener(this: MediaQueryList) {
    this.matches ? document.body.classList.add('dark') : document.body.classList.remove('dark')
}