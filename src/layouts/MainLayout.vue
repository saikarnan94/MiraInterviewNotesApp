<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
          <q-icon left size="2em" name="mdi-note-text-outline" />
        <q-toolbar-title class="text-weight-bold">
          Notepad Project
        </q-toolbar-title>
        <q-btn
          icon="mdi-plus"
          flat
          round
          label="Create Item"
        >
          <q-tooltip>
            Create Item
          </q-tooltip>

          <q-menu>
            <q-card style="min-width: 200px;">
              <q-list padding>
                <q-item
                  dense
                  clickable
                  v-close-popup
                  @click="$refs.noteDialog.open()"
                >
                  <q-item-section>
                    <q-item-label>
                      Create Note
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  dense
                  clickable
                  v-close-popup
                  @click="$refs.checklistDialog.open()"
                >
                  <q-item-section>
                    <q-item-label>
                      Create Checklist
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <CreateChecklistDialog ref="checklistDialog" />
  <CreateNoteDialog ref="noteDialog" />
</template>

<script>
import { defineComponent } from 'vue'
import CreateChecklistDialog from 'components/CreateChecklistDialog.vue'
import CreateNoteDialog from 'components/CreateNoteDialog.vue'

// todo - create note dialog not implemented - Done

export default defineComponent({
  name: 'MainLayout',
  components: {
    CreateChecklistDialog,
    CreateNoteDialog
  }
})
</script>
