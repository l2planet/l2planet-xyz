<script lang="ts">
import CardAbout from "$lib/components/About/CardAbout.svelte";
import GridAbout from "$lib/components/About/GridAbout.svelte";
import Div from "$lib/components/Div.svelte";
import H1 from "$lib/components/H1.svelte";
import H2 from "$lib/components/H2.svelte";
import P1 from "$lib/components/P1.svelte";

</script>

<!-- About Page starts here -->
<Div>
    <H1>About Us</H1>
    <P1>L2 Planet is a community-driven L2 newsletter project which is run by volunteers</P1>
</Div>
<Div>
    <H2>What we do</H2>
    <GridAbout>
        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
        <CardAbout title="Newsletter">People can easily track the state of L2s by reading</CardAbout>
    </GridAbout>
</Div>