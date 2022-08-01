<script lang="ts">
import type { Block } from "$lib/utils/editor";
import Text from "./Blocks/Text.svelte";
import Note from "./Blocks/Note.svelte";
import List from "./Blocks/List.svelte";
import Large from "./Blocks/Large.svelte";
import Link from "./Blocks/Link.svelte";
import Medium from "./Blocks/Medium.svelte";
import Small from "./Blocks/Small.svelte";
import Subtitle from "./Blocks/Subtitle.svelte";
import Title from "./Blocks/Title.svelte";
import Image from "./Blocks/Image.svelte";
import Tweet from "./Blocks/Tweet.svelte";
import Youtube from "./Blocks/Youtube.svelte";

    export let block: Block
</script>

{#if block.is('Text')}
    <Text on:keydown on:keyup on:focus {block}/>

{:else if block.is('Note')}
    <Note on:keydown on:keyup {block}/>

{:else if block.is('List')}
    <List on:keydown on:keyup {block}/>
    
{:else if block.is('Large')}
    <Large on:keydown on:keyup  {block}/>
{:else if block.is('Medium')}
    <Medium on:keydown on:keyup {block}/>

{:else if block.is('Small')}
    <Small on:keydown on:keyup {block}/>

{:else if block.is('Link')}
    <Link on:keydown on:keyup {block}/>

{:else if block.is('Image')}
    <Image on:keydown on:keyup  {block}/>

{:else if block.is('Tweet')}
    <Tweet on:keydown on:keyup {block}/>

{:else if block.is('Youtube')}
    <Youtube on:keydown on:keyup {block}/>

{:else if block.is('Title')}
    <Title on:keydown on:keyup on:focus {block}/>

{:else if block.is('Subtitle')}
    <Subtitle on:keydown on:keyup on:focus {block}/>

{/if}
