<script lang="ts">
import Main from "$lib/components/Main.svelte";
import Menu from "$lib/components/Menu.svelte";
import Page from "$lib/components/Page.svelte";
import TopBar from "$lib/components/TopBar.svelte";

// isMenuOpen handles how menu screen is displayed
let isMenuOpen: boolean = false
</script>

<!-- Index Page starts here -->
<Page>
    <TopBar on:click={() => isMenuOpen = !isMenuOpen}/> <!-- If menu button is clicked, isMenuOpen value will be changed -->
    <Menu isOpen={isMenuOpen}/>
    <!-- The contents will be right here -->
    <Main>
        dsfdslkejwWWWWWWWWWWWWWWWWWWWWWWWWW
    </Main>
</Page>