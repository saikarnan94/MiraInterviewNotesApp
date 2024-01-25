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
      {{ note.created_at }}
    </template>
  </ListItemWrapper>
</template>

<script>
import ListItemWrapper from 'components/ListItemWrapper.vue'
import Nl2Br from 'components/Nl2Br.vue'

// todo - perhaps use a package such as Luxon to parse the created_at date?

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
  }
}
</script>
