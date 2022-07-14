<table class="flex flex-col rounded-3xl p-3 gap-y-3 bg-[#e2e2e2] dark:bg-gri-900">
    <thead>
        <tr class="grid grid-cols-3 rounded-2xl px-6">
            <th class="text-left">Name</th>
            <th class="text-right">Max TPS</th>
            <th class="text-right">TPS</th>
        </tr>
    </thead>
    <tbody class="flex flex-col gap-y-3 font-bold">
        <slot/>
    </tbody>
</table>