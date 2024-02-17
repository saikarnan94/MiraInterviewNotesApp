<template>
  <q-dialog
    v-model="dialogOpen"
    no-backdrop-dismiss
  >
    <q-card v-if="note" style="max-width: 400px; width: 100%;">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          Create Note
        </q-toolbar-title>
      </q-toolbar>

      <q-card-section>
        <q-input
          v-model="note.title"
          outlined
          stack-label
          label="Title"
        />
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="note.value"
          outlined
          stack-label
          label="Note"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="black" v-close-popup />
        <q-btn label="Save" color="green-8" @click="save" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>

function defaultNotePayload () {
  return {
    type: 'note',
    title: null,
    created_at: null,
    value: null
  }
}

export default {
  data () {
    return {
      dialogOpen: false,
      note: null
    }
  },
  methods: {
    open () {
      this.note = defaultNotePayload()
      this.dialogOpen = true
    },
    close () {
      this.dialogOpen = false
      this.note = null
    },
    save () {
      this.$store.commit('listStore/addNote', this.note)
      this.close()
    }
  }
}
</script>
