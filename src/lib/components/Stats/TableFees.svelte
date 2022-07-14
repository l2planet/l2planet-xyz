<table class="flex flex-col rounded-3xl p-3 gap-y-3 bg-[#eaeaea] dark:bg-gri-900">
    <thead>
        <tr class="grid grid-cols-3 w-full px-6">
            <th class="text-left">Name</th>
            <th class="text-right">Send</th>
            <th class="text-right">Swap</th>
        </tr>
    </thead>
    <tbody class="flex flex-col gap-y-3 font-bold">
        <slot/>
    </tbody>
</table>