<template>
  <q-page>
      <DropList
        :items="listItems"
        class="row q-col-gutter-md q-pa-md"
        @reorder="$event.apply(listItems)"
      >
        <template #item="{ item, index }">
          <Note
            v-if="item.type === 'note'"
            :note="item"
            :index="index"
            :key="`note-${item.uuid}`"
            @delete="deleteListItem(index)"
          />
          <Checklist
            v-else-if="item.type === 'checklist'"
            :checklist="item"
            :index="index"
            :key="`checklist-${item.uuid}`"
            @delete="deleteListItem(index)"
          />
        </template>

        <template #feedback />
      </DropList>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { DropList } from 'vue-easy-dnd'

import Note from 'components/listItemTypes/Note.vue'
import Checklist from 'components/listItemTypes/Checklist.vue'

// todo - doesn't seem very responsive on mobile (minimum requirement is iPhone 6-sized screen 4.7 inches) - Done

export default defineComponent({
  name: 'IndexPage',
  components: {
    DropList, Note, Checklist
  },
  computed: {
    listItems () {
      return this.$store.getters['listStore/getList']
    }
  },
  methods: {
    deleteListItem (index) {
      this.$store.commit('listStore/removeListItem', index)
      // hint - perhaps use https://quasar.dev/quasar-plugins/dialog - Done
      //  to programmatically display a confirmation dialog, then perform delete action?
    }
  }
})
</script>
