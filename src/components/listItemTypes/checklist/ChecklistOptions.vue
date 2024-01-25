<template>
  <q-list>
    <ChecklistLine
      v-for="(line, key) in modelValue"
      v-model:done="line.done"
      v-model:label="line.label"
      :key="key"
      :line="line"
    />

    <q-item
      dense
      clickable
      @click="addLine"
    >
      <q-item-section side>
        <q-icon name="mdi-plus" />
      </q-item-section>

      <q-item-section>
        <q-item-label>
          Add Checklist Item
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import ChecklistLine from 'components/listItemTypes/checklist/ChecklistLine.vue'

function defaultChecklistLine () {
  return {
    done: false,
    label: null
  }
}

export default {
  props: {
    modelValue: {
      type: Array,
      required: true
    }
  },
  components: {
    ChecklistLine
  },
  emits: ['update:model-value'],
  methods: {
    addLine () {
      // todo - add limit of 10 checklist items per list, disable button if limit is reached
      const arr = JSON.parse(JSON.stringify(this.modelValue))
      arr.push(defaultChecklistLine())
      this.$emit('update:model-value', arr)
    },
    deleteLine (index) {
    }
  }
}
</script>
