<script lang="ts">
    // We will define href outside
    // `href` is the URL we want browser to navigate, when user clicks an anchor element
    export let href: string
</script>
<!-- Card component -->
<a href={href} class="flex items-center justify-center rounded-2xl font-bold text-xl sm:text-2xl md:text-xl lg:text-2xl bg-cyan-400/50 shadow-lg md:hover:rotate-6 active:-rotate-6 md:active:-rotate-6 duration-300">
    <slot/>
</a>