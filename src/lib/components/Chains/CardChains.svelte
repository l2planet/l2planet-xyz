<script lang="ts">
    // We will define href outside
    // `href` is the URL we want browser to navigate, when user clicks an anchor element
    export let href: string
    export let name: string
</script>
<!-- Card component -->
<a href={href} class="flex flex-col items-center justify-center gap-y-1 aspect-square rounded-2xl font-bold text-[2.75vw] lg:text-[min(1.5vw,1.08rem)] btn-full scaler md:hover:rotate-6 md:active:-rotate-6 duration-300">
    <!-- Image comes here -->
    <div class="h-1/2">
        <slot/>
    </div>
    {name}
</a>