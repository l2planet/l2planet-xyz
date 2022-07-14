<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '../lib/utils/theme'
    import '../app.css'
    import Page from '$lib/components/Page.svelte';
import TopBar from '$lib/components/TopBar/TopBar.svelte';
import Main from '$lib/components/Main.svelte';
import Footer from '$lib/components/Footer.svelte';

    onMount(() => {
        theme.init()
    })
</script>

<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
<Page>
    <TopBar/>
    <Main>
        <slot/>
    </Main>
    <Footer/>
</Page>