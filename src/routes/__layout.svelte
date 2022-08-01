<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '../lib/utils/theme'
    import '../app.css'
    import Page from '$lib/components/common/Page.svelte';
import TopBar from '$lib/components/common/TopBar/TopBar.svelte';
import Main from '$lib/components/common/Main.svelte';
import Footer from '$lib/components/common/Footer.svelte';

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