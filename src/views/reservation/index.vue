<template>
  <reservation-detail :is-edit="false" />
</template>

<script>
import ReservationDetail from './components/ReservationDetail'

export default {
  name: 'CreateBranches',
  components: { ReservationDetail }
}
</script>

