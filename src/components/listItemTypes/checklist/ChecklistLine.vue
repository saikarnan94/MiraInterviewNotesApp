<template>
  <q-item
    dense
  >
    <q-item-section side>
      <q-checkbox
        :model-value="line.done"
        dense
        @update:model-value="$emit('update:done', $event)"
      />
    </q-item-section>
    <q-item-section>
      <q-input
        :model-value="line.label"
        dense
        autogrow
        borderless
        placeholder="Add value..."
        @update:model-value="$emit('update:label', $event)"
      />
    </q-item-section>
  </q-item>
</template>

<script>
// todo - add ability to delete a line

export default {
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  emits: ['update:done', 'update:label']
}
</script>
