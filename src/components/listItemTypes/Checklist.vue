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
      {{ checklist.created_at }}
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
      // todo - not returning correct amount of completed counters
      return 2
    }
  }
}
</script>
