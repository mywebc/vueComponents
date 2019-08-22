<template>
    <div class="wrapper">
        <g-pager :totalPage="16" :currentPage.sync="currentPage"></g-pager>
    </div>
</template>

<script>
    import GPager from "../../../src/pager/pager";
    export default {
        components: {
            "g-pager": GPager
        },
        data() {
            return {
                currentPage: 1
            };
        },
        methods: {}
    };
</script>

