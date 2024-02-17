<template>
  <ListItemWrapper
    card-class="note"
    @delete="$emit('delete')"
  >
    <template #title>
      {{ note.title }}
    </template>

    <q-card-section class="q-pt-none">
      <nl2-br :text="note.value" />
    </q-card-section>

    <template #date>
      {{ parsedDate }}
    </template>
  </ListItemWrapper>
</template>

<script>
import ListItemWrapper from 'components/ListItemWrapper.vue'
import Nl2Br from 'components/Nl2Br.vue'
import { DateTime } from 'luxon'

// todo - perhaps use a package such as Luxon to parse the created_at date? - Done

export default {
  components: {
    Nl2Br,
    ListItemWrapper
  },
  emits: ['delete'],
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  computed: {
    parsedDate () {
      return DateTime.fromMillis(this.note.created_at).toFormat('MMM dd, yyyy \'at\' hh:mm a')
    }
  }
}
</script>
