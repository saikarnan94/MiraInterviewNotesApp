<template>
  <Drag
    class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
    handle=".drag-handle"
    @dragstart="isDragging = true"
    @dragend="isDragging = false"
  >
    <q-card
      class="list-item full-height flex column"
      :class="[{ 'dragging': isDragging }, cardClass]"
    >
      <q-toolbar>
        <q-toolbar-title class="text-weight-bolder">
          <slot name="title" />
        </q-toolbar-title>

        <q-btn
          class="drag-handle"
          icon="mdi-drag"
          flat
          dense
          round
        >
          <q-tooltip>Drag Card</q-tooltip>
        </q-btn>

        <q-btn
          class="q-ml-sm"
          icon="mdi-dots-vertical"
          flat
          dense
          round
        >
          <q-menu ref="menu">
            <q-card style="min-width: 150px;">
              <q-list padding>
                <q-item
                  dense
                  clickable
                  @click="confirm"
                >
                  <q-item-section side>
                    <q-icon name="mdi-trash-can" />
                  </q-item-section>

                  <q-item-section>
                    <q-item-label class="text-bold text-white-7">
                      Delete
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <div style="flex: 1 1 auto;">
        <slot />
      </div>

      <q-toolbar>
        <slot name="footer" />

        <q-space />

        <q-item-label class="text-right" caption>
          <slot name="date" />
        </q-item-label>
      </q-toolbar>
    </q-card>
  </Drag>
</template>

<script>
import { Drag } from 'vue-easy-dnd'
import { useQuasar } from 'quasar'

export default {
  props: {
    cardClass: {
      type: [String, Object]
    }
  },
  components: {
    Drag
  },
  emits: ['delete'],
  data () {
    return {
      isDragging: false
    }
  },
  setup (props, { emit }) {
    const $q = useQuasar()
    function confirm () {
      $q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        emit('delete')
      })
    }
    return { confirm }
  }
}
</script>
