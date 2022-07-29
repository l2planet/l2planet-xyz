<script lang="ts">
import type { Block } from "$lib/utils/editor";
import Heading1 from "./Heading1.svelte";
import Heading2 from "./Heading2.svelte";
import Image from "./Image.svelte";
import Paragraph from "./Paragraph.svelte";
import Subtitle from "./Subtitle.svelte";
import Title from "./Title.svelte";


    export let blocks: Block[]
</script>
<div class="flex flex-col gap-y-8">
    {#each blocks as block}
        {#if block.type == 'paragraph'}
            <Paragraph>{block.content}</Paragraph>

        {:else if block.type == 'heading1'}
            <Heading1>{block.content}</Heading1>

        {:else if block.type == 'heading2'}
            <Heading2>{block.content}</Heading2>

        {:else if block.type == 'title'}
            <Title>{block.content}</Title>

        {:else if block.type == 'subtitle'}
            <Subtitle>{block.content}</Subtitle>

        {:else if block.type == 'image'}
            <Image href='{block.content}'/>

        {/if}
    {/each}
</div>