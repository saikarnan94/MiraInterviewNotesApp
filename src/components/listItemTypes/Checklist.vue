<template>
  <ListItemWrapper
    card-class="checklist"
    @delete="$emit('delete')"
  >
    <template #title>
      {{ checklist.title }}
    </template>

    <ChecklistOptions
      v-model="checklist.value"
    />

    <template #date>
      {{ parsedDate }}
    </template>

    <template #footer>
      <q-item-label>
        {{ doneItemsAmount }} / {{ checklist.value.length }} done
      </q-item-label>
    </template>
  </ListItemWrapper>
</template>

<script>
import ListItemWrapper from 'components/ListItemWrapper.vue'
import ChecklistOptions from 'components/listItemTypes/checklist/ChecklistOptions.vue'
import { DateTime } from 'luxon'

export default {
  components: {
    ListItemWrapper, ChecklistOptions
  },
  props: {
    checklist: {
      type: Object,
      required: true
    }
  },
  emits: ['delete'],
  computed: {
    doneItemsAmount () {
      // todo - not returning correct amount of completed counters - done
      const completedItems = this.checklist.value.filter(item => item.done)
      return completedItems.length
    },
    parsedDate () {
      return DateTime.fromMillis(this.checklist.created_at).toFormat('MMM dd, yyyy \'at\' hh:mm a')
    }
  }
}
</script>
