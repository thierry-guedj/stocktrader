<template>
     <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p><strong>Your Funds: {{ funds | currency }}</strong></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currency: 'Dollars'
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}

</script>