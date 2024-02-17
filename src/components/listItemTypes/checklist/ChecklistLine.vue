<template>
  <q-item
    dense
  >
    <q-item-section side>
      <q-checkbox
        :model-value="line.done"
        dense
        size="sm"
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
        :class="strikeoutClass"
      />
    </q-item-section>
    <q-item-section side>
      <q-btn
        class="no-shadow trash-icon"
        icon="mdi-trash-can"
        round
        size="sm"
        @click="$emit('delete')"
      />
    </q-item-section>
  </q-item>
</template>

<script>
// todo - add ability to delete a line - Done

export default {
  props: {
    line: {
      type: Object,
      required: true
    }
  },
  emits: ['update:done', 'update:label', 'deleteLine'],
  computed: {
    strikeoutClass () {
      return {
        strikeout: this.line.done
      }
    }
  }
}
</script>
